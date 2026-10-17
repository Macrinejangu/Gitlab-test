import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useAxios from "../../Hooks/useAxios";
import useApp from "../../Hooks/useApp";

function LoginPage() {
  const navigate = useNavigate();
  const request = useAxios();
  const { setUser, setToken } = useApp();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const result = await request({
        method: "POST",
        url: "/user/login",
        data: {
          email,
          password,
        },
      });

      if (result._error) return;

      const data = result.responseData;

      if (!data?.access_token) {
        console.error("Login response did not include an access token.");
        return;
      }

      setToken(data.access_token);
      setUser(data.user ?? null);

      navigate("/product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">
          AmazonWeb Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-2 font-medium">Email</label>

            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              required
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Password</label>

            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              required
              className="w-full border rounded-lg p-3"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center mt-5">
          Don't have an account?{" "}
          <a href="/sign_up" className="text-blue-600">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;