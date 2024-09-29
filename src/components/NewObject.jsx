import "../styles/ObjectTable.css";
import { obj } from "../utils/object";
// const obj = {
//   id: "10002",

//   name: "Eco-Friendly Water Bottle",

//   description: "Stay hydrated with our durable, eco-friendly water bottle.",

//   price: 14.99,

//   currency: "USD",

//   imageURL: "https://example.com/images/product-10002.jpg",
// };

const parsedObj = obj();

const headings = ["Key", "Value", "Position"];

const NewObject = () => {
  return (
    <table>
      <thead>
        <tr className="header-row">
          {headings.map((i) => (
            <th className="header-cell">{i}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {parsedObj.reduce((acc, cur, index) => {
          acc.push(
            <tr key={index} className="body-row">
              <td className="body-cell">{cur[0]}</td>
              <td className="body-cell">{cur[1]}</td>
              <td className="body-cell">{index}</td>
            </tr>
          );
          return acc;
        }, [])}
        <tr className="body-row"></tr>
      </tbody>
    </table>
  );
};

export default NewObject;
