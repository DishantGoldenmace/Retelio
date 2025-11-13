import img from "../../assets/complete_order.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


const OrderSuccess = () => {
  const navigate = useNavigate ();
  return (
    <div className="max-w-md mx-auto text-center py-12 px-4 2xl:pt-14 ">
      <h2 className="text-2xl font-semibold mb-4">
        Thank you for your purchase!
      </h2>

      <img src={img} alt="Success" className="mx-auto w-50 mb-6" />

      <p className="text-sm text-gray-600">
        Thanks for placing order :
        <span className="block text-green-600 font-medium mt-1">
          01dc1370-3df6-11eb-b378-0242ac130002
        </span>
      </p>

      <p className="text-sm text-gray-600 mt-4">
        We will send you a notification within 5 days when it ships.
        <br />
        If you have any questions or queries, feel free to get in contact with
        us.
      </p>

      <p className="mt-6 text-sm text-gray-600">All the best,</p>

      <div className="mt-8 flex justify-center gap-4">
        <button 
        onClick={()=>{ navigate("/shop")}} className="border border-gray-300 rounded-md px-2  font-semibold cursor-pointer ">
          Continue shopping
        </button>
        <button 
          onClick={() => navigate("/")}  className="bg-black font-semibold text-white flex items-center px-2 md:px-4 py-2 rounded cursor-pointer">
          <FontAwesomeIcon icon={faHome} className="w-4 h-4 mr-2" />
          Go to home
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;
