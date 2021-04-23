import React, { useEffect } from "react";
import axios from "axios";

const data = [
  {
    userId: 1,
    id: 56,
    title: "perro loco",
    completed: false,
  },
  {
    userId: 2,
    id: 102,
    title: "pajaro asesino",
    completed: false,
  },
  {
    userId: 3,
    id: 45,
    title: "tigre violento",
    completed: false,
  },
  {
    userId: 4,
    id: 14,
    title: "jabali criminal",
    completed: true,
  },
  {
    userId: 5,
    id: 506,
    title: "pollito en fuga",
    completed: false,
  },
  {
    userId: 6,
    id: 689,
    title: "comadreja soy",
    completed: false,
  },
  {
    userId: 7,
    id: 700,
    title: "dinosaurio viejo",
    completed: false,
  },
];

const Content = () => {
  const getAll = async () => {
    // console.log({ data });

    data.map((id) => {
      // console.log(id);
    });

    //const result = data.sort((a, b) => b.id - a.id);

    let list = [1, 4, 6];

    const randowNumber = (min, max) => {
      let num = Math.random() * (max - min);
      num = Math.round(num + min);
      list.push(num);
    };
    

    console.log(randowNumber(1, 9));

    console.log(list);

    // console.log(number);
  };

  useEffect(() => {
    getAll();
  }, []);

  return <ul></ul>;
};

export default Content;
