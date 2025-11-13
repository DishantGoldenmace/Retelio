import ProductImage from './ProductImage'
import ProductInfo from './ProductInfo'

// Define the Product type locally or import from a dedicated Product type file
type Product = {
  id: number
  title: string // Add this line to match the required property in ProductInfo
  name: string
  imageUrl: string
  price: number
  description: string
  image: string[] // Add this line to match the required property
  // Add other fields as required
}
const mockProduct: Product = {
  // Fill in the required Product fields with mock or real data
  id: 1,
  title: 'Sample Product', // Add this line
  name: 'Sample Product',
  imageUrl: '/path/to/image.jpg',
  price: 100,
  description: 'Sample product description',
  image: ['/path/to/image.jpg'], // Provide an array for the image property
  // Add other fields as required by the Product type
}

const ProductDisplay = () => {
  return (
    <div>
       <div className="flex flex-col lg:flex-row mt-10">
        {/* Left Side: Image and thumbnails */}
        <div className="lg:w-1/2">
          <ProductImage product={mockProduct} />
        </div>

        {/* Right Side: Product Info */}
        <div className="lg:w-1/2">
          <ProductInfo product={mockProduct} />
        </div>
      </div> 
    </div>
  )
}

export default ProductDisplay
