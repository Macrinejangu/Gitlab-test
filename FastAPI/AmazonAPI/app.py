from contextlib import asynccontextmanager
from fastapi import FastAPI, Depends
import uvicorn

from routes.user import router as user_router
from routes.product import router as product_router
from routes.product_image import router as product_image_router

from db import prisma
from auth import get_current_user


# Connect to Prisma when the app starts
@asynccontextmanager
async def lifespan(app: FastAPI):
    await prisma.connect()
    yield
    await prisma.disconnect()


# Create the FastAPI application
app = FastAPI(
    title="Amazon API",
    lifespan=lifespan
)


# Public routes: registration and login
app.include_router(
    user_router,
    prefix="/user"
)


# Protected routes: all product operations require authentication
app.include_router(
    product_router,
    prefix="/product",
    dependencies=[Depends(get_current_user)]
)


# Protected routes: all image operations require authentication
app.include_router(
    product_image_router,
    prefix="/product_image",
    dependencies=[Depends(get_current_user)]
)


# Check whether the API is running
@app.get("/")
async def root():
    users = await prisma.user.find_many()
    print(users)

    return {"message": "API is running"}


# Start the development server
if __name__ == "__main__":
    uvicorn.run(
        "app:app",
        host="127.0.0.1",
        port=5000,
        reload=True,
        reload_excludes=["uploads/*"]
    )