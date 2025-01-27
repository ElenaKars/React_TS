import "./styles.css";
import { ProductProps } from "./types";

function Product({ name, price }: ProductProps) {
  return (
    <div className="product-wrapper">
      <h3 className="name">{name}</h3>
      {price !== undefined && <div className="price"></div>}
    </div>
  );
}

export default Product;
