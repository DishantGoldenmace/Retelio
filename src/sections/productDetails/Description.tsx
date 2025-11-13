const Description = () => {
  return (
    <div className="space-y-6 mt-4  ">
      {/* Product Details Section */}
      <div>
        <h2 className="font-bold text-lg md:text-xl mb-4 text-[#1C252E]">
          Product details
        </h2>
        <ul className="list-disc pl-4 text-sm md:text-base text-[#1C252E]">
          <li>The foam sockliner feels soft and comfortable.</li>
          <li>Pull tab</li>
          <li>Not intended for use as Personal Protective Equipment</li>
          <li>
            Colour Shown: White/Black/Oxygen Purple/Action Grape
            <li> Style: 921826-109</li>
          </li>
          <li>Country/Region of Origin: China</li>
        </ul>
      </div>

      {/* Benefits Section */}
      <div>
        <h2 className="font-bold text-lg md:text-xl mb-4 text-[#1C252E]">
          Benefits
        </h2>
        <ul className="list-disc pl-4 text-sm md:text-base text-[#1C252E]">
          <li>
            Mesh and synthetic materials on the upper keep the fluid look of the
            OG while adding comfort and durability.
          </li>
          <li>
            Originally designed for performance running, the full-length Max Air
            unit adds soft, comfortable cushioning underfoot.
          </li>
          <li>The foam midsole feels springy and soft.</li>
          <li>The rubber outsole adds traction and durability.</li>
        </ul>
      </div>

      {/* Delivery and Returns Section */}
      <div className="text-[#1C252E]">
        <h2 className="font-bold text-lg md:text-xl mb-4 text-[#1C252E]">
          Here you can find the phrase :
        </h2>

        <ul className="list-disc pl-4 text-sm md:text-base">
          <li>
            We ship in 5–7 days: the time a real store needs to prepare your
            order.
          </li>
          <li>No endless warehouses, just authentic products.</li>
        </ul>
      </div>
    </div>
  );
};

export default Description;
