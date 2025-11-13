import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FaApple, FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [changepassword, setChangePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    changepassword: "",
    terms: "",
  });

  const validate = () => {
    const newErrors = {
      name: "",
      email: "",
      password: "",
      changepassword: "",
      terms: "",
    };
    let isValid = true;

    if (!name.trim()) {
      newErrors.name = "Full name is required.";
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = "Email or phone is required.";
      isValid = false;
    } else if (
      !/^\S+@\S+\.\S+$/.test(email) && // email format
      !/^\d{10}$/.test(email) // OR phone format
    ) {
      newErrors.email = "Enter a valid email or 10-digit phone number.";
      isValid = false;
    }

    if (!password.trim()) {
      newErrors.password = "Password is required.";
      isValid = false;
    } else if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/.test(password)
    ) {
      newErrors.password =
        "Password must be 8+ characters, include one uppercase letter and one symbol.";
      isValid = false;
    }

    if (!changepassword.trim()) {
      newErrors.changepassword = "Please confirm your password.";
      isValid = false;
    } else if (changepassword !== password) {
      newErrors.changepassword = "Passwords do not match.";
      isValid = false;
    }

    if (!isChecked) {
      newErrors.terms = "You must agree to the Terms and Privacy Policy.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log({ name, email, password });
      // proceed with signup
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 ">
      <div className="w-full max-w-2xl border border-gray-300 p-10 rounded-xl">
        <h2 className="text-3xl font-bold mb-2">Sign Up</h2>
        <p className="text-sm text-gray-500 mb-6">
          Already have an account?{" "}
          <Link to="/sign-in" className="text-green-600 font-medium">
            Login
          </Link>
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/2">
              <label className="text-sm block mb-1 text-gray-700">Full name</label>
              <input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${
                  errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-black"
                }`}
              />
              {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
            </div>

            <div className="md:w-1/2">
              <label className="text-sm block mb-1 text-gray-700">Email or Phone</label>
              <input
                type="text"
                placeholder="michael.joe@xmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${
                  errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-black"
                }`}
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/2">
              <label className="text-sm block mb-1 text-gray-700">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="******"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full border rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 ${
                    errors.password ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-black"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
              {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
            </div>

            <div className="md:w-1/2">
              <label className="text-sm block mb-1 text-gray-700">Confirm Password</label>
              <div className="relative">
                <input
                  type={showPassword1 ? "text" : "password"}
                  placeholder="******"
                  value={changepassword}
                  onChange={(e) => setChangePassword(e.target.value)}
                  className={`w-full border rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 ${
                    errors.changepassword ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-black"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword1(!showPassword1)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  <FontAwesomeIcon icon={showPassword1 ? faEyeSlash : faEye} />
                </button>
              </div>
              {errors.changepassword && <p className="text-sm text-red-500">{errors.changepassword}</p>}
            </div>
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="terms"
              className="mt-1"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <label htmlFor="terms" className="text-sm text-gray-500">
              I have read and agreed to the{" "}
              <span className="underline">Terms of Service</span> and{" "}
              <span className="underline">Privacy Policy</span>
            </label>
          </div>
          {errors.terms && <p className="text-sm text-red-500">{errors.terms}</p>}

          <button
            type="submit"
            className="bg-black text-white w-full py-2 rounded-md hover:opacity-90 transition"
          >
            Create Account
          </button>
        </form>

        <div className="mt-8">
          <div className="flex items-center justify-center text-sm text-gray-500 mx-20">
            <div className="border-t border-gray-300 flex-1"></div>
            <span className="md:px-3 text-xs md:text-base">Or Login with</span>
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
  );
}
