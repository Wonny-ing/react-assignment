import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

interface IFruit {
  name: string;
  price: number;
}

class Fruits {
  fruits;
  constructor(fruits: IFruit[]) {
    this.fruits = fruits;
  }
  // 사용자가 속성의 값을 꺼낼때 실행
  get(): IFruit[] {
    return this.fruits;
  }
  // 사용자가 속성에 값을 저장할때 실행
  set(fruits: IFruit[]): void {
    this.fruits = fruits;
  }
}

const oldFruits: IFruit[] = [
  { name: 'apple', price: 1000 },
  { name: 'orange', price: 2000 },
  { name: 'banana', price: 3000 },
  { name: 'melon', price: 4000 },
];

const newFruits: IFruit[] = [
  { name: 'mango', price: 5000 },
  { name: 'kiwi', price: 6000 },
  { name: 'grape', price: 7000 },
  { name: 'water melon', price: 8000 },
];

const Homework = () => {
  const myFruits = new Fruits(oldFruits);
  const oldOne = myFruits.get();

  myFruits.set(newFruits);
  const newOne = myFruits.get();

  return (
    <>
      <h2>old one</h2>
      <ul>
        {oldOne.map((old) => (
          <li key={old.name}>
            {old.name}/{old.price}
          </li>
        ))}
      </ul>
      <h2>new one</h2>
      <ul>
        {newOne.map((el) => (
          <li key={el.name}>
            {el.name}/{el.price}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Homework;
