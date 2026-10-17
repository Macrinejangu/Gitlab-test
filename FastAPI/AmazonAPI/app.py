from contextlib import asynccontextmanager

from fastapi import FastAPI, Depends
import uvicorn

from db import prisma
from auth import get_current_user
from seed import seed_status

from routes.user import router as user_router
from routes.product import router as product_router
from routes.product_image import router as product_image_router
from routes.order_item import router as order_item_router
from routes.orders import router as orders_router
from fastapi.middleware.cors import CORSMiddleware


# Connect to Prisma and seed order statuses
@asynccontextmanager
async def lifespan(app: FastAPI):

    await prisma.connect()

    try:
        await seed_status()
        yield

    finally:
        await prisma.disconnect()


# Initialize FastAPI
app = FastAPI(lifespan=lifespan)


# Allow the React frontend to communicate with FastAPI
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Public authentication routes
app.include_router(
    user_router,
    prefix="/user"
)


# Protected product routes
app.include_router(
    product_router,
    prefix="/product",
    dependencies=[Depends(get_current_user)]
)


# Protected product image routes
app.include_router(
    product_image_router,
    prefix="/product_image",
    dependencies=[Depends(get_current_user)]
)


# Protected shopping-cart routes
app.include_router(
    order_item_router,
    prefix="/order_item",
    dependencies=[Depends(get_current_user)]
)


# Protected order history and active-cart routes
app.include_router(
    orders_router,
    prefix="/orders",
    dependencies=[Depends(get_current_user)]
)


# Check whether the API is running
@app.get("/")
async def root():

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