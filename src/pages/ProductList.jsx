import { products } from "../datas/Products";
import ProductCard from "../components/ProductCard";

const ProductList = () => {

    return (
    <>
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </>
    )
}

export default ProductList;