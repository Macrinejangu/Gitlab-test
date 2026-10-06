from fastapi import APIRouter, status, Request, HTTPException
from pydantic import BaseModel, EmailStr
import bcrypt

router = APIRouter()

from app import prisma


class UserSchema(BaseModel):
    name: str
    email: EmailStr
    password: str


class LoginSchema(BaseModel):
    email: EmailStr
    password: str


@router.post("/sign-up", status_code=status.HTTP_201_CREATED)
async def sign_up(payload: UserSchema):
    # Data validation
    print(payload)

    existing = await prisma.user.find_unique(
        where={"email": payload.email}
    )

    if existing:
        raise HTTPException(
            status_code=400,
            detail="Email already in use"
        )

    async with prisma.tx() as tx:
        user = await tx.user.create(
            data={
                "name": payload.name,
                "email": payload.email
            }
        )

        # Hash password
        user_pass = payload.password
        bytes = user_pass.encode("utf-8")
        salt = bcrypt.gensalt()
        hash = bcrypt.hashpw(bytes, salt).decode("utf-8")

        await tx.user_password.create(
            data={
                "user_id": user.id,
                "password_hash": hash
            }
        )

    return user


@router.post("/login", status_code=status.HTTP_201_CREATED)
async def login(payload: LoginSchema):

    # Fetch user using email, including password relationship
    user = await prisma.user.find_unique(
        where={"email": payload.email},
        include={
            "user_password": True
        }
    )

    print("USER IS")
    print(user)

    if not user:
        raise HTTPException(
            status_code=400,
            detail="Invalid email and or password"
        )

    # Get stored hashed password
    hashed_password = user.user_password.password_hash.encode("utf-8")

    # Convert password entered by user to bytes
    user_password = payload.password.encode("utf-8")

    # Compare entered password with stored hash
    if not bcrypt.checkpw(user_password, hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password"
        )

    return {
        "message": "Login successful",
        "user": user
    }