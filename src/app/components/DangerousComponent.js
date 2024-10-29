// components/DangerousComponent.js
import React, { useState } from "react";

export default function DangerousComponent() {
  const [throwError, setThrowError] = useState(false);

  if (throwError) {
    throw new Error("Deliberate Error");
  }

  return <button onClick={() => setThrowError(true)}>Trigger Error</button>;
}
