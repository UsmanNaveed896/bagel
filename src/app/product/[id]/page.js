import { bagelData, spreadData } from "../../components/menu/categoryAcardData";
import ProductDetailsPage from "../../components/productDetail/productDetail";


export default function ProductDetails({ params }) {
  const { id } = params;

  // Combine bagelData and spreadData into a single array
  const allProducts = [...bagelData, ...spreadData];

  // Find the product by id
  const product = allProducts.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>404 - Product not found</div>; // Custom 404 message or redirect
  }

  return <ProductDetailsPage product={product} />;
}