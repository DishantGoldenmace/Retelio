import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FaApple, FaFacebookF, FaGoogle } from "react-icons/fa";
import { useAuth } from "../components/Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  const auth = useAuth();
  const navigate = useNavigate();

  const validate = () => {
    let isValid = true;
    const newErrors = { email: "", password: "" };

    // Check if email is entered
    if (!email.trim()) {
      newErrors.email = "Email or phone is required.";
      isValid = false;
    } else if (
      !/^\S+@\S+\.\S+$/.test(email) &&
      !/^\d{10}$/.test(email) // Accept 10-digit phone numbers
    ) {
      newErrors.email = "Enter a valid email or 10-digit phone number.";
      isValid = false;
    }

    // Check if password is entered
if (!password.trim()) {
  newErrors.password = "Password is required.";
  isValid = false;
} else if (
  !/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/.test(password)
) {
  newErrors.password =
    "Password must be at least 8 characters, include one uppercase letter and one symbol.";
  isValid = false;
}

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      if (auth && auth.login) {
        auth.login();
        navigate("/");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 ">
      <div className="rounded-xl max-w-6xl w-full flex overflow-hidden justify-center items-center">
        <div className="w-full md:w-1/2 p-10 border border-gray-300 rounded-md">
          <h2 className="text-3xl font-bold mb-2">Login</h2>
          <p className="text-sm text-gray-500 mb-6">
            Do not have an account?{" "}
            <Link to="/sign-up" className="text-green-600 font-medium">
              create a new one.
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mb-4">
              <label className="text-sm mb-1 block text-[#3D3D3D]">
                Enter Your Email or Phone
              </label>
              <input
                type="text"
                placeholder="michael.joe@xmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${
                  errors.email ? "focus:ring-red-500" : "focus:ring-black"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="mb-2">
              <label className="text-sm mb-1 block text-[#3D3D3D]">
                Enter Your Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="******"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 ${
                    errors.password ? "focus:ring-red-500" : "focus:ring-black"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                  />
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <div className="text-right">
              <Link
                to="/forget-password"
                className="text-sm text-red-500 hover:underline"
              >
                Forgot Your Password
              </Link>
            </div>

            <button
              type="submit"
              className="bg-black cursor-pointer text-white w-full py-2 rounded-md transition"
            >
              Login
            </button>
          </form>

          <div className="mt-8">
            <div className="flex items-center justify-center text-sm text-gray-500 mx-20">
              <div className="border-t border-gray-300 flex-1"></div>
              <span className="md:px-3 text-xs md;text-sm">Or Login with</span>
              <div className="border-t border-gray-300 flex-1"></div>
            </div>

            <div className="flex justify-center gap-4 mt-6">
              <button className="px-6 py-2 border border-gray-300 rounded-lg hover:shadow-sm">
                <FaFacebookF className="w-4 h-4" />
              </button>
              <button className="px-6 py-2 border border-gray-300 rounded-lg hover:shadow-sm">
                <FaGoogle className="w-4 h-4" />
              </button>
              <button className="px-6 py-2 border border-gray-300 rounded-lg hover:shadow-sm">
                <FaApple className="text-black w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
