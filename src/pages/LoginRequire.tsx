import React from "react";

interface LoginRequireProps {
  message: string;
  onLoginClick: () => void;
}

const LoginRequire: React.FC<LoginRequireProps> = ({ message, onLoginClick }) => {
  return (
    <div className="p-6 text-center mt-40 py-10">
      <p className="mb-4 ">{message}</p>
      <button
        onClick={onLoginClick}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Login
      </button>
    </div>
  );
};

export default LoginRequire;
