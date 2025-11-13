const sizeData = [
  { size: "XS", neck: "13 - 13 1/2", chest: "33 - 35", waist: "26-28" },
  { size: "S", neck: "14 - 14 1/2", chest: "36-38", waist: "29-31" },
  { size: "M", neck: "15 - 15 1/2", chest: "39-41", waist: "32-34" },
  { size: "L", neck: "16 - 16 1/2", chest: "42-44", waist: "35-37" },
  { size: "XL", neck: "17 - 17 1/2", chest: "45-47", waist: "38-40" },
  { size: "XXL", neck: "18 - 18 1/2", chest: "48 - 50", waist: "41-43" },
  { size: "XXXL", neck: "19 - 19 1/2", chest: "51 - 53", waist: "44-46" },
  // repeat for demo
  { size: "XS", neck: "13 - 13 1/2", chest: "33 - 35", waist: "26-28" },
  { size: "S", neck: "14 - 14 1/2", chest: "36-38", waist: "29-31" },
  { size: "M", neck: "15 - 15 1/2", chest: "39-41", waist: "32-34" },
  { size: "L", neck: "16 - 16 1/2", chest: "42-44", waist: "35-37" },
  { size: "XL", neck: "17 - 17 1/2", chest: "45-47", waist: "38-40" },
  { size: "XXL", neck: "18 - 18 1/2", chest: "48 - 50", waist: "41-43" },
  { size: "XXXL", neck: "19 - 19 1/2", chest: "51 - 53", waist: "44-46" },
];

const SizeGuide = () => {
  return (
    <div className="bg-white  rounded-xl p-6 mt-4 overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4">Size guideline</h2>
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-black text-white text-left">
            <th className="py-2 px-4 text-sm font-semibold">US Size</th>
            <th className="py-2 px-4 text-sm font-semibold text-blue-400">
              Neck (in)
            </th>
            <th className="py-2 px-4 text-sm font-semibold text-blue-400">
              Chest (in)
            </th>
            <th className="py-2 px-4 text-sm font-semibold">Waist (in)</th>
          </tr>
        </thead>
        <tbody>
          {sizeData.map((item, index) => (
            <tr key={index} className={index % 2 === 1 ? "bg-gray-100" : ""}>
              <td className="py-2 px-4 text-sm">{item.size}</td>
              <td className="py-2 px-4 text-sm">{item.neck}</td>
              <td className="py-2 px-4 text-sm">{item.chest}</td>
              <td className="py-2 px-4 text-sm">{item.waist}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SizeGuide;
