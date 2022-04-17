import React, {useState} from "react";
import "./App.css";
import AddToList from "./components/AddToList";
import List from "./components/List";

// export to re-use
export interface IState {
  items: {
    name: string;
    image: string;
    amount: number;
    note?: string; // ? means optional
  }[]; // [] means array
}

function App() {
  const [items, setItems] = useState<IState["items"]>([
    {
      name: "Carrots",
      image:
        "https://i5.walmartimages.ca/images/Enlarge/686/686/6000198686686.jpg",
      amount: 3,
      note: "The orange cucumber",
    },
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
      <h1 style={{marginLeft: "40px"}}>Grocery List</h1>
      <div className="headings" style={{display: "flex"}}>
        <div style={{width: "40.83px", paddingLeft: "40px"}}></div>
        <span>Name</span>
        <span>Amount</span>
        <span>Description</span>
      </div>
      <List items={items} />
      <AddToList items={items} setItems={setItems} />
    </div>
  );
}

export default App;
