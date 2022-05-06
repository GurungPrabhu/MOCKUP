import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { IProduct } from "../../../interfaces";
import "./style.css";

interface IProductProps {
  data: IProduct;
}

const ProductCard: React.FC<IProductProps> = ({ data }) => (
  <div className="product">
    <OverlayTrigger
      placement="top"
      overlay={
        <Tooltip>{`ingredients: ${String(
          data.ingredients?.join(",")
        )}`}</Tooltip>
      }
    >
      <div className="product--img">
        <img src={data.imageUrl} alt="iamge" />
      </div>
    </OverlayTrigger>
    <div className="product--container">
      <h2>{data.name}</h2>
      <span className="product--sub-desc">{data.tagline}</span>
      <p className="product--desc">{data.description}</p>
    </div>
  </div>
);

export { ProductCard };
