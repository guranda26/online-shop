import { obj } from "../../utils/object";
import "../../styles/ObjectTable.css";

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
        {parsedObj.reduce(
          (acc, cur, index) => [
            ...acc,
            <tr key={index} className="body-row">
              <td className="body-cell">{cur[0]}</td>
              <td className="body-cell">{cur[1]}</td>
              <td className="body-cell">{index}</td>
            </tr>,
          ],
          []
        )}
        <tr className="body-row"></tr>
      </tbody>
    </table>
  );
};

export default NewObject;
