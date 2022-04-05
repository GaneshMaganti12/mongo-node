import React, { useState } from "react"
import './App.css';
import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";

export const store = React.createContext()

function App() {
  const [data, setData] = useState(1)
  return (
    <store.Provider value={[data, setData]}>
      <ComponentOne/>
      <ComponentTwo/>
    </store.Provider>
  );
}

export default App;
