import { PriceStyled, ProductWrapper, NameStyled } from "./styles";
import "./styles.css";
import { ProductProps } from "./types";

function Product({ name, price }: ProductProps) {
  return (
    <ProductWrapper>
      <NameStyled>{name}</NameStyled>
      {price !== undefined && <PriceStyled></PriceStyled>}
    </ProductWrapper>
  );
}

export default Product;
