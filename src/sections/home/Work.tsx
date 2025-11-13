import img from "../../assets/work-img01.jpg";
import img1 from "../../assets/arrow-right.png";
import { FaBox, FaTrophy, FaCreditCard, FaHeadset } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const features = [
  {
    icon: <FaBox className="text-2xl" />,
    title: "FASTED DELIVERY",
    desc: "Our delivery times (5–7 days)",
  },
  {
    icon: <FaTrophy className="text-2xl" />,
    title: "24 HOURS RETURN",
    desc: "100% money-back guarantee",
  },
  {
    icon: <FaCreditCard className="text-2xl" />,
    title: "SECURE PAYMENT",
    desc: "Your money is safe",
  },
  {
    icon: <FaHeadset className="text-2xl" />,
    title: "SUPPORT 24/7",
    desc: "Live contact/message",
  },
];

const Work = () => {
  const navigate = useNavigate();
  const handlenavigate = () => {
    navigate("/how-works");
  };
  return (
    <div className="">
      <div className=" mt-6">
        {/* Content Section */}
        <div className=" text-[#1D1F1E]  bg-[#F3F5F7]">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-center">
            {/* Image */}
            <div className="w-3/4  lg:w-1/2 flex justify-center">
              <img
                src={img}
                alt="Work Together"
                className="max-w-full h-auto [w-100] pr-10"
              />
            </div>
            {/* Text */}

            <div className="w-full lg:w-1/2 mt-6 md:mt-0 pl-6 ">
              <h1 className="font-semibold text-4xl md:text-3xl xl:text-10xl text-[#1D1F1E]">
                Why Choose StockMate
              </h1>
              <p className="mt-4 text-[#141718] w-full md:w-3/4 ">
                We give value to unsold items and new collections from shops in
                your city. You save, they sell, and the environment thanks you
              </p>
              <div className="mt-4 flex items-center mb-4  ">
                <div>
                  <button
                    onClick={handlenavigate}
                    className="text-[#141718] underline cursor-pointer "
                  >
                    Learn how it works
                  </button>
                </div>
                <div>
                  <img className="w-4 h-4" src={img1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto py-6 container mt-5">
          <div className="border border-gray-300 rounded-md py-6 px-4 md:px-10 flex flex-col md:flex-row justify-between md:items-center gap-6 ">
            {features.map((item, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 text-center md:text-left ${
                  index !== features.length - 1
                    ? "md:border-r border-gray-300 md:pr-6"
                    : ""
                }`}
              >
                <div className="text-black">{item.icon}</div>
                <div className="pr-10">
                  <p className="font- text-large font-bold">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
