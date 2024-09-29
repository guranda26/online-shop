const obj = {
  id: "10002",

  name: "Eco-Friendly Water Bottle",

  description: "Stay hydrated with our durable, eco-friendly water bottle.",

  price: 14.99,

  currency: "USD",

  imageURL: "https://example.com/images/product-10002.jpg",
};

const NewObject = () => {
  return (
    <table>
      <thead>{obj.name}</thead>
    </table>
  );
};

export default NewObject;
