import { DiscountAnimate, DiscountContainer, DiscountDescription, DiscountImg, DiscountSection, DiscountTitle } from "./styles";
import discountImg from '../../Assets/img/discount.png';
import { Button } from "../Button/styles";

const Discount = () => {
  return (
    <DiscountSection>
      <DiscountContainer>
        <DiscountAnimate>
          <DiscountTitle>Immerse yourself <br/> your music</DiscountTitle>
          <DiscountDescription>Get it now, up to 50% off.</DiscountDescription>
          <Button>
            <i className="ri-shopping-bag-line"/>
            Shop Now
          </Button>
        </DiscountAnimate>
        <DiscountImg src={discountImg}/>
      </DiscountContainer>
    </DiscountSection>
  )
}

export default Discount;