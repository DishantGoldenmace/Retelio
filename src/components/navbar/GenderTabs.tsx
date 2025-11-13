import { useGender } from "../Context/GenderContext";
import { useNavigate, useLocation } from "react-router-dom";

type GenderTabsProps = {
  onChange?: (gender: string) => void; // optional if needed outside
};

const GenderTabs: React.FC<GenderTabsProps> = ({ onChange }) => {
  const { gender, setGender } = useGender();
  const navigate = useNavigate();
  const location = useLocation();

  const handleGenderClick = (g: string) => {
    setGender(g);
    onChange?.(g); // optional callback if you use it

    if (location.pathname !== "/") {
      navigate("/");
    }
  };

  return (
    <div className="flex gap-2 items-center text-lg font-medium">
      {["men", "woman", "kids"].map((g) => (
        <button
          key={g}
          onClick={() => handleGenderClick(g)}
          className={`px-3 py-1 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base font-medium transition-colors duration-200 cursor-pointer ${
            gender === g
              ? "bg-black text-white"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          {g.charAt(0).toUpperCase() + g.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default GenderTabs;
