import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useAxios from "../../Hooks/useAxios";
import useApp from "../../Hooks/useApp";

function OrderPage() {
  const request = useAxios();
  const { token } = useApp();

  const [order, setOrder] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        // Get the active order
        const orderResult = await request({
          method: "GET",
          url: "/orders/active",
        });

        if (orderResult._error) return;

        const activeOrder = orderResult.responseData;
        setOrder(activeOrder);

        // Get product details and images
        const productResult = await request({
          method: "GET",
          url: "/product/",
        });

        if (productResult._error) return;

        const products = productResult.responseData;

        // Match cart items with products
        const items = (activeOrder.order_item || []).map((item) => {
          const product = products.find(
            (p) => Number(p.id) === Number(item.product_id)
          );

          const images = product?.product_image || [];

          const defaultImage = images.find(
            (image) => image.is_default
          );

          return {
            ...item,
            name: product?.name || "Unknown Product",
            image:
              defaultImage?.image_url ||
              images[0]?.image_url ||
              null,
            price: Number(item.price),
          };
        });

        setCartItems(items);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchCart();
    } else {
      setLoading(false);
    }
  }, [token]);

  const formatPrice = (amount) => {
    return `KES ${Number(amount).toLocaleString()}`;
  };

  if (!token) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">
          Please log in to view your cart.
        </h1>

        <Link to="/" className="text-blue-600">
          Go to Login
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto">

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">
            Shopping Cart
          </h1>

          <Link
            to="/product"
            className="bg-blue-600 text-white px-5 py-3 rounded-lg"
          >
            Continue Shopping
          </Link>
        </div>

        {loading ? (
          <p>Loading your cart...</p>
        ) : cartItems.length === 0 ? (
          <p>Your shopping cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-5 rounded-xl shadow flex gap-6"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-32 h-32 object-contain"
                    />
                  )}

                  <div>
                    <h2 className="text-xl font-bold">
                      {item.name}
                    </h2>

                    <p>
                      Price: {formatPrice(item.price)}
                    </p>

                    <p>Quantity: {item.quantity}</p>

                    <p className="font-semibold text-green-700">
                      Subtotal:{" "}
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-xl shadow mt-8">
              <h2 className="text-2xl font-bold mb-4">
                Order Summary
              </h2>

              <p>Order ID: #{order?.id}</p>

              <p>
                Status: {order?.order_status?.name}
              </p>

              <p className="text-xl font-bold mt-4">
                Total: {formatPrice(order?.total_amount || 0)}
              </p>
            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default OrderPage;