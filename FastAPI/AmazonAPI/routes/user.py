from fastapi import APIRouter, status, Request, HTTPException
from pydantic import BaseModel, EmailStr

router = APIRouter()

from app import prisma


class MemberSchema(BaseModel):
    name: str
    email: EmailStr
    password: str


@router.post("/sign-up", status_code=status.HTTP_201_CREATED)
async def sign_up(payload: MemberSchema):
    # Data validation
    print(payload)

    # Check whether email already exists
    existing = await prisma.user.find_unique(
        where={"email": payload.email}
    )

    if existing:
        raise HTTPException(
            status_code=400,
            detail="Email already in use"
        )

    # Create user and password together
    async with prisma.tx() as tx:
        user = await tx.user.create(
            data={
                "name": payload.name,
                "email": payload.email
            }
        )

        user_password = await tx.user_password.create(
            data={
                "user_id": user.id,
                "password_hash": payload.password
            }
        )

    return user