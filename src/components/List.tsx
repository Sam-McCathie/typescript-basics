import React from "react";
import "./List.css";
import {IState as IProps} from "../App";

// replaced with IState import
// interface IProps {
//   items: {
//     name: string;
//     image: string;
//     amount: number;
//     note?: string;
//   }[];
// }

// type = React Functional Component, containing IProps -> destructure the items props
const List: React.FC<IProps> = ({items}) => {
  // JSX.Element[] = array of JSX elements
  const renderList = (): JSX.Element[] => {
    return items.map((i, index) => {
      return (
        <li key={index}>
          <img src={i.image} />
          <p>{i.name}</p>
          <p>{i.amount}</p>
          {i.note && <p>{i.note}</p>}
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
