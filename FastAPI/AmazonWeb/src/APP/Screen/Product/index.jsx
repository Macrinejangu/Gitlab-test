import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useApp from "../../Hooks/useApp";

import useAxios from "../../Hooks/useAxios";

function ProductPage() {
  const request = useAxios();
  const navigate = useNavigate();
const { token } = useApp();

const [addingProductId, setAddingProductId] = useState(null);

const handleAddToCart = async (product) => {
  // Check whether the user is logged in
  if (!token) {
    toast.error("Please log in to add products to your cart.");
    navigate("/");
    return;
  }

  // Prevent adding products that are out of stock
  if (product.stock_quantity <= 0) {
    toast.error("This product is out of stock.");
    return;
  }

  setAddingProductId(product.id);

  try {
    const result = await request({
      method: "POST",
      url: "/order_item/",
      data: {
        product_id: product.id,
        quantity: 1,
      },
    });

    if (!result._error) {
      toast.success(`${product.name} added to cart!`);
    }
  } finally {
    setAddingProductId(null);
  }
};

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      try {
        const result = await request({
          method: "GET",
          url: "/product/",
        });

        if (!result._error) {
          const data = result.responseData;

          setProducts(
            Array.isArray(data)
              ? data
              : Array.isArray(data?.products)
                ? data.products
                : []
          );
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getProductImage = (product) => {
    const images = product.product_image || [];

    const defaultImage = images.find(
      (image) => image.is_default === true
    );

    return defaultImage?.image_url || images[0]?.image_url || null;
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">
            AmazonWeb Products
          </h1>

          <Link
            to="/order"
            className="bg-blue-600 text-white px-5 py-3 rounded-lg"
          >
            View Orders
          </Link>
        </div>

        {loading ? (
          <p>Loading products...</p>
        ) : products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {products.map((product) => {
              const imageUrl = getProductImage(product);

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >

                  {/* Product Image */}
                  <div className="h-56 bg-white flex items-center justify-center p-4">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={product.name}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <div className="text-gray-400">
                        No image available
                      </div>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="p-6">

                    <h2 className="text-xl font-bold mb-2">
                      {product.name}
                    </h2>

                    <p className="text-gray-600 mb-4">
                      {product.description}
                    </p>

                    <p className="text-lg font-semibold text-green-700">
                      KES {Number(product.price).toLocaleString()}
                    </p>

                    <p className="text-sm text-gray-500 mt-2">
                      Stock: {product.stock_quantity}
                    </p>
                    <button
  onClick={() => handleAddToCart(product)}
  disabled={
    addingProductId === product.id ||
    product.stock_quantity <= 0
  }
  className="
    w-full
    mt-5
    bg-yellow-400
    text-gray-900
    font-semibold
    py-3
    px-4
    rounded-lg
    hover:bg-yellow-500
    transition
    disabled:opacity-50
    disabled:cursor-not-allowed
  "
>
  {addingProductId === product.id
    ? "Adding..."
    : product.stock_quantity <= 0
      ? "Out of Stock"
      : "Add to Cart"}
</button>

                  </div>

                </div>
              );
            })}

          </div>
        )}

      </div>
    </div>
  );
}

export default ProductPage;