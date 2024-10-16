import React, { useEffect, useState, Suspense } from "react";
import About from "./app/about/page";
import MainContent from "./app/components/MainContent";
import LoadingSpinner from "./app/components/Loader";

const App = () => {
  return (
    <>
      <Suspense
        fallback={
          <div>
            <LoadingSpinner />
          </div>
        }
      >
        <MainContent />
      </Suspense>
    </>
  );
};

export default App;
