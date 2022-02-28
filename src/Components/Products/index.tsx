import React from "react";
import { Title } from "../Title/styles";
import {
  ProductsSection,
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
import { Button } from "../Button/styles";

const Products = () => {
  return (
    <ProductsSection>
      <Title className="products_line">Choose <br/> Your Style</Title>
      <ProductsContainer>
        <ProductsCard>
          <ProductsContent>
            <ProductsImg src={productImg1}/>
            <ProductsTitle>Black</ProductsTitle>
            <ProductsPrice>$249</ProductsPrice>

            <Button className="products_button">
              <i className="ri-shopping-bag-line"/>
            </Button>
          </ProductsContent>
        </ProductsCard>

        <ProductsCard>
          <ProductsContent>
            <ProductsImg src={productImg2}/>
            <ProductsTitle>Red Black</ProductsTitle>
            <ProductsPrice>$249</ProductsPrice>

            <Button className="products_button">
              <i className="ri-shopping-bag-line"/>
            </Button>
          </ProductsContent>
        </ProductsCard>

        <ProductsCard>
          <ProductsContent>
            <ProductsImg src={productImg3}/>
            <ProductsTitle>Night Black</ProductsTitle>
            <ProductsPrice>$249</ProductsPrice>

            <Button className="products_button">
              <i className="ri-shopping-bag-line"/>
            </Button>
          </ProductsContent>
        </ProductsCard>

        <ProductsCard>
          <ProductsContent>
            <ProductsImg src={productImg4}/>
            <ProductsTitle>Blue</ProductsTitle>
            <ProductsPrice>$249</ProductsPrice>

            <Button className="products_button">
              <i className="ri-shopping-bag-line"/>
            </Button>
          </ProductsContent>
        </ProductsCard>

        <ProductsCard>
          <ProductsContent>
            <ProductsImg src={productImg5}/>
            <ProductsTitle>Twilight gray</ProductsTitle>
            <ProductsPrice>$249</ProductsPrice>

            <Button className="products_button">
              <i className="ri-shopping-bag-line"/>
            </Button>
          </ProductsContent>
        </ProductsCard>
      </ProductsContainer>
    </ProductsSection>
  )
}

export default Products;