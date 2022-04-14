import React, {useState} from "react";
import "./App.css";
import List from "./components/List";

interface Istate {
  items: {
    name: string;
    image: string;
    amount: number;
    note?: string; // ? means optional
  }[]; // [] means array
}

function App() {
  const [items, setItems] = useState<Istate["items"]>([
    {
      name: "Carrots",
      image:
        "https://i5.walmartimages.ca/images/Enlarge/686/686/6000198686686.jpg",
      amount: 3,
      note: "The orange cucumber",
    },
  ]);

  return (
    <div className="App">
      <h1>Grocery List</h1>
      <List items={items} />
    </div>
  );
}

export default App;
