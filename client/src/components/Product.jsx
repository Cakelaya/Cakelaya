import {
  Add, Remove
} from "@material-ui/icons";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  position: relative;
  flex-direction: column;
  border: 2px solid whitesmoke;
  &:hover ${Info} {
    opacity: 1;
  }
  gap: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  blink {
    background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);   -webkit-background-clip: text;
    color: transparent;
    font-weight: 900;
    animation: 2s linear infinite condemned_blink_effect;
    @keyframes condemned_blink_effect {
      0%{
        opacity: 1;
      }
      25%{
        opacity: 0.5;
      }
      50%{
        opacity: 0;
      }
      75%{
        opacity: 0.5;
      }
      100%{
        opacity: 1;
      }
    }
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;



const Image = styled.img`
  height: 240px;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Price = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  /* margin-left: 50px; */
`;

const Name = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
`;

const Button = styled.a`
  padding: 5px 5px;
  text-align: center;
  border: 2px solid teal;
  width: 100px;
  background-color: white;
  cursor: pointer;
  font-weight: 600;
  margin-left: 10px;
  text-decoration: none;
  color: black;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const Filter = styled.div`

`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px 5px;
  min-width: 100px;
  border: 2px solid teal;
  font-size: 16px;
  font-weight: 600;
`;

const FilterSizeOption = styled.option``;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr 2fr;
  grid-row-gap: 10px;
`;

const Product = ({ item, cat, filters }) => {
  const city = useSelector((state) => state.city.city);
  const [quantity, setQuantity] = useState(1);

  return (
    <Container>
      {/* <Circle /> */}
      <Image src={item.img} />

      {item.categories[0] !== "Pastries" &&
        item.categories[0] !== "Foods and Beverages" &&
        item.categories[0] !== "Chaats and Juices" &&
        (filters.size == "0.5 Kg" ||
          filters.size == "1.5 Kg" ||
          filters.size == "1 Kg" ||
          filters.size == "2 Kg") && (
          <Name>
            {item.title} ({filters.size.toUpperCase()})
          </Name>
        )}
      {item.size[0] == "2.25 L" && <Name>{item.title} (2.25 L)</Name>}
      {item.categories[0] == "Chaats and Juices" && <Name>{item.title}</Name>}
      {item.categories[0] == "Foods and Beverages" && item.size[0] == "Regular" && (
        <Name> {item.title} </Name>
      )}
      {item.categories[0] == "Pastries" && <Name>{item.title}</Name>}
      {(filters.size == undefined || filters.size == "Quantity") &&
        item.categories[0] !== "Pastries" &&
        item.categories[0] !== "Foods and Beverages" && item.categories[0] !== "Chaats and Juices" && <Name>{item.title} ({item.size[0].toUpperCase()})</Name>}

      <div style={{ display: "flex", justifyContent: "center" }}>

        {
          (filters.size == undefined || filters.size == "Quantity") && item.size[0] !== "2.25 L" &&

          <div style={{ display: "flex" }}>
            <Price>₹{item.price[0]}</Price>
            <Price style={{ color: "gray", marginLeft: "15px" }}>
              {item.size[0] !== "2 L" && (
                <strike> ₹{Math.floor(item.price[0] * (1 + 25 / 100))}</strike>
              )}
            </Price>
          </div>
        }
        {
          item.size[0] == "2.25 L" && item.location[0] == "Noida" && filters.size !== "2.25 L" && <Price>MRP</Price>
        }
        {
          item.size[0] == "2.25 L" && item.location[0] == "Sultanpur" && filters.size !== "2.25 L" && <Price>MRP</Price>
        }
        {
          filters.size == "0.5 Kg" && item.color[0] !== "Truffle" &&
          <div style={{ display: "flex" }}>
            <Price>₹{item.price[0]}</Price>
            <Price style={{ color: "gray", marginLeft: "15px" }}>
              {item.size[0] !== "2 L" && (
                <strike> ₹{Math.floor(item.price[0] * (1 + 25 / 100))}</strike>
              )}
            </Price>
          </div>
        }
        {
          filters.size == "0.5 Kg" && item.color[0] === "Truffle" && city == "Noida" &&
          <div style={{ display: "flex" }}>
            <Price>₹{item.price[0]}</Price>
            <Price style={{ color: "gray", marginLeft: "15px" }}>
              {item.size[0] !== "2 L" && (
                <strike> ₹{Math.floor(item.price[0] * (1 + 25 / 100))}</strike>
              )}
            </Price>
          </div>
        }
        {
          filters.size == "1 Kg" && (item.categories[0] !== "Designer" && item.color[0] !== "Truffle") &&
          <div style={{ display: "flex" }}>
            <Price>₹{item.price[1] ? item.price[1] : item.price[0]}</Price>
            <Price style={{ color: "gray", marginLeft: "15px" }}>
              {item.size[0] !== "2 L" && (
                <strike> ₹{Math.floor((item.price[1] ? item.price[1] : item.price[0]) * (1 + 25 / 100))}</strike>
              )}
            </Price>
          </div>
        }
        {
          filters.size == "1 Kg" && item.color[0] === "Truffle" && city == "Noida" &&
          <div style={{ display: "flex" }}>
            <Price>₹{item.price[1] ? item.price[1] : item.price[0]}</Price>
            <Price style={{ color: "gray", marginLeft: "15px" }}>
              {item.size[0] !== "2 L" && (
                <strike> ₹{Math.floor((item.price[1] ? item.price[1] : item.price[0]) * (1 + 25 / 100))}</strike>
              )}
            </Price>
          </div>
        }
        {
          filters.size == "1 Kg" && (item.categories[0] == "Designer" || item.categories[0] == "Truffle") &&
          <div style={{ display: "flex" }}>
            <Price>₹{item.price[0]}</Price>
            <Price style={{ color: "gray", marginLeft: "15px" }}>
              {item.size[0] !== "2 L" && (
                <strike> ₹{Math.floor(item.price[0] * (1 + 25 / 100))}</strike>
              )}
            </Price>
          </div>
        }
        {
          filters.size == "2 Kg" && (item.categories[0] == "Designer" || item.color[0] == "Truffle") &&
          <div style={{ display: "flex" }}>
            <Price>₹{item.price[1] ? item.price[1] : item.price[0]}</Price>
            <Price style={{ color: "gray", marginLeft: "15px" }}>
              {item.size[1] !== "2 L" && (
                <strike> ₹{Math.floor((item.price[1] ? item.price[1] : item.price[0]) * (1 + 25 / 100))}</strike>
              )}
            </Price>
          </div>
        }
        {
          filters.size == "1.5 Kg" && item.categories[0] == "Cookies and Namkeens" &&
          <div style={{ display: "flex" }}>
            <Price>₹{item.price[2]}</Price>
            <Price style={{ color: "gray", marginLeft: "15px" }}>
              {item.size[0] !== "2 L" && (
                <strike> ₹{Math.floor(item.price[2] * (1 + 25 / 100))}</strike>
              )}
            </Price>
          </div>
        }
        {
          filters.size == "2 Kg" && item.categories[0] == "Cookies and Namkeens" &&
          <div style={{ display: "flex" }}>
            <Price>₹{item.price[3]}</Price>
            <Price style={{ color: "gray", marginLeft: "15px" }}>
              {item.size[0] !== "2 L" && (
                <strike> ₹{Math.floor(item.price[3] * (1 + 25 / 100))}</strike>
              )}
            </Price>
          </div>
        }
        {
          filters.size == "1.5 Kg" && item.categories[0] == "Designer" && <div style={{ display: "flex" }}>
            <Price>₹{item.price[0]}</Price>
            <Price style={{ color: "gray", marginLeft: "15px" }}>
              {item.size[0] !== "2 L" && (
                <strike> ₹{Math.floor(item.price[0] * (1 + 25 / 100))}</strike>
              )}
            </Price>
          </div>
        }
        {
          filters.size == "2 Kg" && item.categories[0] !== "Cookies and Namkeens" && (item.categories[0] !== "Designer" && item.color[0] !== "Truffle") &&
          <div style={{ display: "flex" }}>
            <Price>₹{item.price[2] ? item.price[2] : item.price[1]}</Price>
            <Price style={{ color: "gray", marginLeft: "15px" }}>
              {item.size[0] !== "2 L" && (
                <strike> ₹{Math.floor((item.price[2] ? item.price[2] : item.price[1]) * (1 + 25 / 100))}</strike>
              )}
            </Price>
          </div>
        }
        {
          filters.size == "2.25 L" && <Price>MRP</Price>
        }


      </div>
      {item.size[0] !== "2.25 L" && item.location[0] == "Sultanpur" && (<blink style={{ marginTop: "5px" }}>20% OFF</blink>)}
      {item.location[0] == "Noida" && item.size[0] !== '2.25 L' && (<blink style={{ marginTop: "5px" }}>20% OFF</blink>)}
      <Info width='100%'>
        <Wrapper>
          <Filter>
            <FilterSize >
              <FilterSizeOption disabled>Size</FilterSizeOption>
              {item.size.map((s, i) => {
                return <FilterSizeOption key={i}>{s}</FilterSizeOption>
              })}
            </FilterSize>
          </Filter>
          <Filter>
            <FilterSize >
              <FilterSizeOption disabled>Flavour</FilterSizeOption>
              {item.color.map((s, i) => {
                return <FilterSizeOption key={i}>{s}</FilterSizeOption>
              })}
            </FilterSize>
          </Filter>
          <Button>Add to Cart</Button>
          <Button>Buy Now</Button>
        </Wrapper>
      </Info>
    </Container >
  );
};

export default Product;
