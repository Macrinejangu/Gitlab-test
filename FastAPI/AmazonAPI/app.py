from contextlib import asynccontextmanager
from fastapi import FastAPI
import uvicorn

from prisma import Prisma

prisma=Prisma()

@asynccontextmanager
async def lifespan(app:FastAPI):
    await prisma.connect()
    yield
    await prisma.disconnect()

app=FastAPI(title="Amazon api",lifespan=lifespan)

@app.get("/")
async def root():
    users=await prisma.user.find_many()
    print(users)
    return {"message":"API is running"}

if __name__=="__main__":
    uvicorn.run("app:app",host="127.0.0.1",port=5000, reload=True)


