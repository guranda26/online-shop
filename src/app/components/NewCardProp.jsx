import React from "react";

const NewCardProp = (props) => {
  const { title, description, imageUrl, price, ...rest } = props;
  return (
    <div {...rest} className="products">
      <div className="product-list">
        <img src={imageUrl} alt={title} className="product-mg" />
        <div className="product-info">
          <h2>{title}</h2>
          <p>{description}</p>
          <p className="price">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default function Dashboard() {
  const cardProps = {
    title: "Makeup Revolution Skin Silk Serum Foundation F8",
    description:
      "A peptide-infused foundation with light to medium coverage, designed to visibly blur and brighten.",
    imageUrl:
      "https://www.lookfantastic.com/images?url=https://static.thcdn.com/productimg/original/15016240-1005114937620181.jpg&format=webp&auto=avif&width=985&height=985&fit=cover",
    price: "£10.99",
    className: "card",
  };

  return <NewCardProp {...cardProps} />;
}
