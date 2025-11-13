import { FaStar, FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import img1 from "../../assets/product_1.png";
import img2 from "../../assets/product_2.png";
import reviewer1 from "../../assets/reviewer1.png";
import reviewer2 from "../../assets/reviewer2.png";

const reviews = [
  {
    name: "Harrison Stein",
    img: reviewer1,
    date: "09 Aug 2022",
    rating: 3,
    verified: true,
    text: "Good Looking........",
    images: [img2, img2],
  },
  {
    name: "Deja Brady",
    img: reviewer2,
    date: "10 Sep 2022",
    rating: 2,
    verified: true,
    text: "Very nice! On the other hand, we denounce with righteous indignation...",
    images: [],
  },
  {
    name: "Lucian Obrien",
    img: reviewer1,
    date: "11 Feb 2022",
    rating: 3,
    verified: false,
    text: "Very nice! On the other hand, we denounce with righteous indignation...",
    images: [img1],
  },
  {
    name: "Jayvion Simon",
    img: reviewer2,
    date: "12 Jan 2022",
    rating: 4,
    verified: true,
    text: "Very nice! On the other hand, we denounce with righteous indignation...",
    images: [],
  },
];

const Review = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 mt-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 border-b pb-6">
        {/* Average Rating */}
        <div className="text-center md:text-left">
          <h2 className="text-sm text-gray-600">Average rating</h2>
          <h1 className="text-3xl font-bold">4/5</h1>
          <div className="mt-1 flex flex-col items-center md:items-start">
            <div className="flex gap-1 text-yellow-400">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <span className="text-gray-500 text-sm mt-1">(8.24k reviews)</span>
          </div>
        </div>

        {/* Rating Bars */}
        <div className="flex-1 w-full">
          {[
            { label: "5 Star", value: "8.2k" },
            { label: "4 Star", value: "86.6k" },
            { label: "3 Star", value: "73.9k" },
            { label: "2 Star", value: "79k" },
            { label: "1 Star", value: "63.1k" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between text-sm font-semibold my-2"
            >
              <span className="w-16 shrink-0">{item.label}</span>
              <div className="flex-1 mx-2 h-1 bg-gray-200 rounded-full relative">
                <div className="absolute left-0 top-0 h-full bg-black w-[40%] rounded-full" />
              </div>
              <span className="text-gray-400">{item.value}</span>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-4 md:mt-0">
          <button className="bg-gray-200 px-4 py-2 rounded text-sm font-semibold w-full md:w-auto">
            ✍️ Write your review
          </button>
        </div>
      </div>

      {/* Review List */}
      <div className="mt-8 space-y-10">
        {reviews.map((r, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row gap-6 border-b pb-6"
          >
            {/* Reviewer Info */}
            <div className="flex flex-col items-center sm:w-32">
              <img
                src={r.img}
                alt={r.name}
                className="rounded-full w-12 h-12 object-cover"
              />
              <p className="text-sm font-semibold mt-1">{r.name}</p>
              <p className="text-xs text-gray-500">{r.date}</p>
            </div>

            {/* Review Content */}
            <div className="flex-1">
              <div className="flex flex-col gap-1">
                {/* Stars */}
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(r.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Verified */}
                {r.verified && (
                  <span className="text-green-500 text-sm flex items-center gap-1">
                    <MdVerified className="inline" /> Verified purchase
                  </span>
                )}
              </div>

              {/* Text */}
              <p className="text-sm mt-2 text-gray-800">{r.text}</p>

              {/* Images */}
              {r.images.length > 0 && (
                <div className="flex gap-2 mt-3 flex-wrap">
                  {r.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt=""
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  ))}
                </div>
              )}

              {/* Likes */}
              <div className="flex gap-4 mt-4 text-gray-600 text-sm">
                <span className="flex items-center gap-1">
                  <FaRegThumbsUp /> 234
                </span>
                <span className="flex items-center gap-1">
                  <FaRegThumbsDown /> 234
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-10 text-sm">
        <button className="px-2">&lt;</button>
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            className={`w-8 h-8 rounded-full ${
              num === 1 ? "bg-black text-white" : "hover:bg-gray-100"
            }`}
          >
            {num}
          </button>
        ))}
        <span>...</span>
        <button className="px-2">&gt;</button>
      </div>
    </div>
  );
};

export default Review;
