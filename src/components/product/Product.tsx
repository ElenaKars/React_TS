import { PriceStyled, ProductWrapper } from "./styles";
import "./styles.css";
import { ProductProps } from "./types";

function Product({ name, price }: ProductProps) {
  return (
    <ProductWrapper>
      <h3 className="name">{name}</h3>
      {price !== undefined && <PriceStyled></PriceStyled>}
    </ProductWrapper>
  );
}

export default Product;
