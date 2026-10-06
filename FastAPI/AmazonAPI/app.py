from contextlib import asynccontextmanager
from fastapi import FastAPI
import uvicorn

from prisma import Prisma
from routes.user import router as user_router

prisma = Prisma()


@asynccontextmanager
async def lifespan(app: FastAPI):
    await prisma.connect()
    yield
    await prisma.disconnect()


app = FastAPI(title="Amazon API", lifespan=lifespan)

# Register user routes
app.include_router(user_router)


@app.get("/")
async def root():
    users = await prisma.user.find_many()
    print(users)
    return {"message": "API is running"}


if __name__ == "__main__":
    uvicorn.run(
        "app:app",
        host="127.0.0.1",
        port=5000,
        reload=True
    )