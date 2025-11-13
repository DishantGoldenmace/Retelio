import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import shape from "../assets/primary-shape.png";

const ProfileSettings = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    // You can send data to an API here
  };

  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto   p-6 ">
      <div
        onClick={() => navigate("/account")}
        className="flex items-center gap-2 mt-2 mb-6 cursor-pointer"
      >
        <img src={shape} alt="shape" className="w-3 h-3 " />
        <button className="text-sm font-semibold  flex items-center gap-1 cursor-pointer">
          <h2 className="text-xl font-semibold ">Account Settings</h2>
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Profile Information */}
        <div>
          <h3 className="font-semibold text-gray-700 mb-3">
            Profile Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm ">First name</label>
              <input
                type="text"
                {...register("firstName")}
                placeholder="first name"
                className="w-full border rounded px-3 py-2 mt-1"
              />
            </div>
            <div>
              <label className="text-sm ">Last name</label>
              <input
                type="text"
                {...register("lastName")}
                placeholder="Last name"
                className="w-full border rounded px-3 py-2 mt-1"
              />
            </div>
            <div>
              <label className="text-sm ">Email Address</label>
              <input
                type="email"
                {...register("email")}
                placeholder="Your email address"
                className="w-full border rounded px-3 py-2 mt-1"
              />
            </div>
            <div>
              <label className="text-sm ">Phone Number</label>
              <input
                type="text"
                {...register("phone")}
                placeholder="Phone number"
                className="w-full border rounded px-3 py-2 mt-1"
              />
            </div>
          </div>
        </div>

        {/* Change Password */}
        {/* <div>
          <h3 className="font-medium text-gray-700 mb-3">Change Password</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm ">New Password</label>
              <input
                type="password"
                {...register("newPassword")}
                className="w-full border rounded px-3 py-2 mt-1"
                placeholder="New password"
              />
            </div>
            <div>
              <label className="text-sm ">Confirm New Password</label>
              <input
                type="password"
                {...register("confirmPassword")}
                className="w-full border rounded px-3 py-2 mt-1"
                placeholder="Confirm password"
              />
            </div>
          </div>
        </div> */}

        {/* Address */}
        <div>
          <h3 className="font-medium text-gray-700 mb-3">Address</h3>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="text-sm ">Shipping address</label>
              <textarea
                {...register("address")}
                placeholder="Your address"
                className="w-full border rounded px-3 py-2 mt-1"
              ></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm ">State</label>
                <input
                  type="text"
                  {...register("state")}
                  placeholder="Your state"
                  className="w-full border rounded px-3 py-2 mt-1"
                />
              </div>
              <div>
                <label className="text-sm ">Zip Code</label>
                <input
                  type="text"
                  {...register("zipCode")}
                  placeholder="Your zip code"
                  className="w-full border rounded px-3 py-2 mt-1"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition cursor-pointer"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileSettings;
