from fastapi import APIRouter, status, HTTPException
from pydantic import BaseModel, EmailStr
import bcrypt

from db import prisma
from auth import create_access_token


router = APIRouter()


# Data required when registering a user
class UserSchema(BaseModel):
    name: str
    email: EmailStr
    password: str


# Data required when logging in
class LoginSchema(BaseModel):
    email: EmailStr
    password: str


# REGISTER USER
@router.post("/sign-up", status_code=status.HTTP_201_CREATED)
async def sign_up(payload: UserSchema):

    # Check whether the email is already registered
    existing = await prisma.user.find_unique(
        where={"email": payload.email}
    )

    if existing:
        raise HTTPException(
            status_code=400,
            detail="Email already in use"
        )

    # Hash the password before saving it
    password_bytes = payload.password.encode("utf-8")

    if len(password_bytes) > 72:
        raise HTTPException(
            status_code=422,
            detail="Password is too long"
        )

    salt = bcrypt.gensalt()
    password_hash = bcrypt.hashpw(
        password_bytes, salt
    ).decode("utf-8")

    # Save the user and password together
    async with prisma.tx() as tx:

        user = await tx.user.create(
            data={
                "name": payload.name,
                "email": payload.email
            }
        )

        await tx.user_password.create(
            data={
                "user_id": user.id,
                "password_hash": password_hash
            }
        )

    return {
        "message": "User registered successfully",
        "user": {
            "id": user.id,
            "name": user.name,
            "email": user.email
        }
    }


# LOGIN USER
@router.post("/login", status_code=status.HTTP_200_OK)
async def login(payload: LoginSchema):

    # Find the user and their stored password hash
    user = await prisma.user.find_unique(
        where={"email": payload.email},
        include={"user_password": True}
    )

    # Return the same error for unknown emails and wrong passwords
    if not user or not user.user_password:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    # Compare the submitted password with the stored hash
    hashed_password = user.user_password.password_hash.encode("utf-8")
    entered_password = payload.password.encode("utf-8")

    if not bcrypt.checkpw(entered_password, hashed_password):
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    # Generate a JWT containing the user's ID
    token = create_access_token(
        {"sub": str(user.id)}
    )

    return {
        "message": "Login successful",
        "user": {
            "id": user.id,
            "name": user.name,
            "email": user.email
        },
        "access_token": token,
        "token_type": "bearer"
    }