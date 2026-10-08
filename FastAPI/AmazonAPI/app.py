from contextlib import asynccontextmanager
from fastapi import FastAPI
import uvicorn

from db import prisma
from routes.user import router as user_router
from routes.product import router as product_router


# Connect to database when the app starts
@asynccontextmanager
async def lifespan(app: FastAPI):
    await prisma.connect()
    yield
    await prisma.disconnect()


# Create FastAPI application
app = FastAPI(
    title="Amazon API",
    lifespan=lifespan
)


# Register routes
app.include_router(user_router, prefix="/user")
app.include_router(product_router, prefix="/product")


# Test API and database connection
@app.get("/")
async def root():
    users = await prisma.user.find_many()
    print(users)

    return {"message": "API is running"}


# Start server
if __name__ == "__main__":
    uvicorn.run(
        "app:app",
        host="127.0.0.1",
        port=5000,
        reload=True
    )