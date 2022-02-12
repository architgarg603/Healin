import React from "react";
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductInfo,
  ProductDesc,
} from "./ProductsElements";

const Products = () => {
  return (
    <ProductsContainer>
      <ProductsHeading>What we have for your Self Care?</ProductsHeading>
      <ProductWrapper>
        <ProductCard>
          <ProductInfo>
            <ProductTitle>Find your next Self Care Activity!</ProductTitle>
            <ProductDesc>Based on the amount of time you have and activity location, We will provide a self-care activity for you to complete! <br/><br/>It is fast, flexible, and efficient. 
            </ProductDesc>
          </ProductInfo>
        </ProductCard>
        <ProductCard>
          <ProductInfo>
            <ProductTitle>Time to Destress by Doodle</ProductTitle>
            <ProductDesc>You can doodle in your browser, reflect in a typed journal entry, save your work and get a random prompt. <br/><br/> Helps to concentrate.</ProductDesc>
          </ProductInfo>
        </ProductCard>
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
