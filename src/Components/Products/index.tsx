import React from "react";
import { Title } from "../Title/styles";
import {
  ProductsContainer,
  ProductsCard,
  ProductsContent,
  ProductsImg,
  ProductsTitle,
  ProductsPrice,
  ProductsButton
} from './styles';

import productImg1 from './../../Assets/img/product1.png';
import productImg2 from './../../Assets/img/product2.png';
import productImg3 from './../../Assets/img/product3.png';
import productImg4 from './../../Assets/img/product4.png';
import productImg5 from './../../Assets/img/product5.png';

const Products = () => {
  return (
    <section>
      <Title>Choose <br/> Your Style</Title>
      <ProductsContainer>
        <ProductsCard>
          <ProductsContent>
            <ProductsImg src={productImg1}/>
            <ProductsTitle>Black</ProductsTitle>
            <ProductsPrice>$249</ProductsPrice>

            <ProductsButton>
              <i className="ri-shopping-bag-line"/>
            </ProductsButton>
          </ProductsContent>
        </ProductsCard>

        <ProductsCard>
          <ProductsContent>
            <ProductsImg src={productImg2}/>
            <ProductsTitle>Red Black</ProductsTitle>
            <ProductsPrice>$249</ProductsPrice>

            <ProductsButton>
              <i className="ri-shopping-bag-line"/>
            </ProductsButton>
          </ProductsContent>
        </ProductsCard>

        <ProductsCard>
          <ProductsContent>
            <ProductsImg src={productImg3}/>
            <ProductsTitle>Night Black</ProductsTitle>
            <ProductsPrice>$249</ProductsPrice>

            <ProductsButton>
              <i className="ri-shopping-bag-line"/>
            </ProductsButton>
          </ProductsContent>
        </ProductsCard>

        <ProductsCard>
          <ProductsContent>
            <ProductsImg src={productImg4}/>
            <ProductsTitle>Blue</ProductsTitle>
            <ProductsPrice>$249</ProductsPrice>

            <ProductsButton>
              <i className="ri-shopping-bag-line"/>
            </ProductsButton>
          </ProductsContent>
        </ProductsCard>

        <ProductsCard>
          <ProductsContent>
            <ProductsImg src={productImg5}/>
            <ProductsTitle>Twilight gray</ProductsTitle>
            <ProductsPrice>$249</ProductsPrice>

            <ProductsButton>
              <i className="ri-shopping-bag-line"/>
            </ProductsButton>
          </ProductsContent>
        </ProductsCard>
      </ProductsContainer>
    </section>
  )
}

export default Products;