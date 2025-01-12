import React from "react";

interface GlobalErrorProps {
  reset: () => void;
}

const GlobalError: React.FC<GlobalErrorProps> = ({ reset }) => {
  return (
    <div className="error">
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default GlobalError;
