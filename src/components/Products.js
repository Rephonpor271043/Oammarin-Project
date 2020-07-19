import React  from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
const Products = (props) => {
  const Product = [
    { id: 1, name: "Ram", price: 4000 },
    { id: 2, name: "Monitor", price: 400 },
    { id: 3, name: "CPU", price: 6890 },
    { id: 4, name: "GUI", price: 4030 },
    { id: 5, name: "Keyboard", price: 3200 },
  ];
  return (
      <>
    <div>
      <h1>Products</h1>
      {Product.map((itme)=>{
          return (
            <Card key={itme.id}>
            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
            <CardBody>
          <CardTitle>{itme.id}</CardTitle>
          <CardSubtitle>{itme.name}</CardSubtitle>
          <CardSubtitle>{itme.price}</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          )
      })}
    </div>
    </>
  );
};
export default Products;