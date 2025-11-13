import { useContext } from "react"
import ProductImage from "../sections/productDetails/ProductImage"
import ProductInfo from "../sections/productDetails/ProductInfo"
import ProductTabs from "../sections/productDetails/ProductTabs"
import { ShopContext } from "../components/Context/ShopContext"
import { useParams } from "react-router-dom"
import Breadcrums from "../components/Breadcrums/Breadcrums"

const ProductDetails = () => {
  const shopContext = useContext(ShopContext);
  const allProducts = shopContext?.allProducts ?? [];
  const { id } = useParams<{ id: string }>();
  
  // Find product and handle missing cases
  const product = allProducts?.find((e) => e.id === Number(id));

  if (!product) {
    return <div className="container p-4 mx-auto  px-20">Product not found</div>;
  }

  return (
    <div className="container p-4 mx-auto py-8 md:px-20 2xl:pt-14">
      <Breadcrums product = {product}/>

{/* <ProductDisplay product = {product}/> */}
      <div className="flex flex-col lg:flex-row mt-10">
        {/* Left Side: Image and thumbnails */}
        <div className="lg:w-1/2">
          <ProductImage product = {product} />
        </div>

        {/* Right Side: Product Info */}
        <div className="lg:w-1/2">
          <ProductInfo product = {product}/>
        </div>
      </div>

      <div className="mt-8">
        <ProductTabs  />
        
      </div>
    </div>
  )
}

export default ProductDetails
