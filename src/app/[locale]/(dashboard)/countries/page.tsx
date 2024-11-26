"use client";
import { useEffect, useState } from "react";

export default function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/countries")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  console.log(countries);

  return (
    <div>
      <h1>Countries</h1>
      <ul>
        {countries.map((country) => (
          <li key={country?.id}>{country?.name}</li> // Adjust based on your table structure
        ))}
      </ul>
    </div>
  );
}
