import React, {useState} from "react";
import "./AddToList.css";
import {IState as Props} from "../App";

interface IProps {
  items: Props["items"];
  setItems: React.Dispatch<React.SetStateAction<Props["items"]>>;
}

const AddToList: React.FC<IProps> = ({items, setItems}) => {
  const [input, setInput] = useState({
    name: "",
    image: "",
    amount: "",
    note: "",
  });

  const {name, image, amount, note} = input;

  // void = return nothing
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const {name, value} = event.target;
    setInput((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleClick = (): void => {
    if (!name || !amount || !note) {
      alert("Missing name, amount or note");
      return;
    }

    setItems([
      ...items,
      {
        name: name,
        image: image,
        amount: Number(amount),
        note: note,
      },
    ]);

    setInput({
      name: "",
      image: "",
      amount: "",
      note: "",
    });
  };

  return (
    <div className="inputs">
      <h3>AddToList</h3>
      <input
        name="name"
        type="text"
        placeholder="item"
        className="input"
        value={name}
        onChange={handleChange}
      />
      <input
        name="image"
        type="text"
        placeholder="image"
        className="input"
        value={image}
        onChange={handleChange}
      />
      <input
        name="amount"
        type="number"
        placeholder="amount"
        className="input"
        value={amount}
        onChange={handleChange}
      />
      <textarea
        name="note"
        placeholder="note"
        className="input"
        value={note}
        onChange={handleChange}
      />
      <button onClick={handleClick} className="add">
        Add to list
      </button>
    </div>
  );
};

export default AddToList;
