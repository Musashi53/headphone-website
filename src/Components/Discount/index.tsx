import { DiscountAnimate, DiscountContainer, DiscountDescription, DiscountImg, DiscountTitle } from "./styles";
import discountImg from '../../Assets/img/discount.png';

const Discount = () => {
  return (
    <section>
      <DiscountContainer>
        <DiscountAnimate>
          <DiscountTitle>Immerse yourself <br/> your music</DiscountTitle>
          <DiscountDescription>Get it now, up to 50% off.</DiscountDescription>
          <a>
            <i className="ri-shopping-bag-line"/>
          </a>
        </DiscountAnimate>
        <DiscountImg src={discountImg}/>
      </DiscountContainer>
    </section>
  )
}

export default Discount;