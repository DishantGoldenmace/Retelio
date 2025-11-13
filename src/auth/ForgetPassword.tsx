import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";


const ForgotPassword = () => {
  const [step, setStep] = useState(1);

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");

  // === Step 1: Submit Email ===
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Email is required.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Enter a valid email.");
      return;
    }

    console.log("Email submitted:", email);
    // Simulate sending OTP
    setStep(2);
  };

  // === Step 2: Submit OTP ===
  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!otp || otp.length !== 6) {
      setError("Enter a valid 6-digit OTP.");
      return;
    }

    console.log("OTP submitted:", otp);
    setStep(3);
  };

  // === Step 3: Submit New Password ===
  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!password || !confirmPassword) {
      setError("Both password fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/.test(password)
    ) {
      setError("Password must be 8+ characters, 1 uppercase & 1 symbol.");
      return;
    }

    console.log("Password reset:", password);
    alert("Password reset successfully!");
    setStep(1);
    setEmail("");
    setOtp("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center relative px-4 pb-10 ">
      {/* Top Bar */}
      

      <div className="w-full max-w-md mt-20 px-4">
        <Link to="/sign-in">
          <div className="flex items-center gap-2 text-[#313131] font-medium mb-4">
            <MdKeyboardArrowLeft className="text-xl" />
            <span>Back to login</span>
          </div>
        </Link>

        {/* Step 1: Email */}
        {step === 1 && (
          <>
            <h1 className="text-3xl font-bold mb-2">Forgot your password?</h1>
            <p className="text-base text-gray-600 mb-6">
              Don’t worry, happens to all of us. Enter your email to recover your account.
            </p>

            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <fieldset className="border border-gray-400 rounded px-3 pt-2 pb-1">
                <legend className="text-sm">Email</legend>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full outline-none text-base"
                />
              </fieldset>
              {error && <p className="text-red-600 text-sm">{error}</p>}
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded mt-4"
              >
                Send OTP
              </button>
            </form>
          </>
        )}

        {/* Step 2: OTP */}
        {step === 2 && (
          <>
            <h1 className="text-3xl font-bold mb-2">Enter OTP</h1>
            <p className="text-base text-gray-600 mb-6">
              We've sent a 6-digit OTP to <strong>{email}</strong>.
            </p>

            <form onSubmit={handleOtpSubmit} className="space-y-4">
              <fieldset className="border border-gray-400 rounded px-3 pt-2 pb-1">
                <legend className="text-sm">OTP</legend>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength={6}
                  className="w-full outline-none text-base"
                  placeholder="Enter 6-digit code"
                />
              </fieldset>
              {error && <p className="text-red-600 text-sm">{error}</p>}
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded mt-4"
              >
                Verify OTP
              </button>
            </form>
          </>
        )}

        {/* Step 3: Reset Password */}
        {step === 3 && (
          <>
            <h1 className="text-3xl font-bold mb-2">Reset Password</h1>
            <p className="text-base text-gray-600 mb-6">
              Create a new strong password for your account.
            </p>

            <form onSubmit={handleResetPassword} className="space-y-4">
              <fieldset className="border border-gray-400 rounded px-3 pt-2 pb-1">
                <legend className="text-sm">New Password</legend>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full outline-none text-base"
                  placeholder="••••••••"
                />
              </fieldset>

              <fieldset className="border border-gray-400 rounded px-3 pt-2 pb-1">
                <legend className="text-sm">Confirm Password</legend>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full outline-none text-base"
                  placeholder="••••••••"
                />
              </fieldset>

              {error && <p className="text-red-600 text-sm">{error}</p>}

              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded mt-4"
              >
                Reset Password
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
