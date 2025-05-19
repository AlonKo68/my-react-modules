import React from 'react';
import { useState, useEffect } from 'react';

import Timer from '../Timer'; 

import css from './App.module.css';
import axios from "axios";

// export default function App() {
//   const [character, setCharacter] = useState(null);

//   // axios
//   // .get(`https://swapi.info/api/people/1`)
//   // .then(data => console.log(data));

//   // axios
//   // .get(`https://swapi.info/api/people/1`)
//   //   .then(data => setCharacter(data));

//   useEffect(() => {
//     console.log('HTTP request');
//     axios
//       .get(`https://swapi.info/api/people/1`)
//       .then((data) => setCharacter(data));
//   }, []);

//   // console.log('App rendered');

//   return (
//     <div className={css.container}>
//       <pre>{JSON.stringify(character, null, 2)}</pre>
//     </div>
//   );
// }

// --------------------------
// export default function App() {

//   const [character, setCharacter] = useState(null);
//   const [count, setCount] = useState(0)

//   console.log('App rendered');

//   useEffect(() => {
//     console.log('HTTP request');
//     axios
//       .get(`https://swapi.info/api/people/${count}`)
//       .then((response) => setCharacter(response.data));
//   }, [count]);

//   useEffect(() =>{
//     console.log("You'll se me once");
//   }, [])


//   return (
//     <div className={css.container}>
//       <button onClick={() => setCount(count+1)}>
//           count is {count}
//       </button>
//       <pre>{JSON.stringify(character, null, 2)}</pre>
//     </div>
//   );
// }

//---------------------
export default function App() {
  const [isTimeOpen, setTimeOpen] = useState(false);
  const toggleTimer = () => setTimeOpen(!isTimeOpen);

  return (
    <>
      <button onClick={toggleTimer}>Toggle timerBox</button>
      {isTimeOpen && <Timer />}
      <p>Hello World!</p>
    </>
  );
};


// ----------------------------------
// export default function App() {
//   const items = Array.from({length: 10}, (_, i) => `Element ${i+1}`);
//   console.log(items);
//   return (
//     <ul>
//       {items.map((item, idx) => (
//         <li key={idx}>{item} </li>
//       ))}
//     </ul>
//   )
// }
