// import React from 'react';
//  -- Стан компонента ----------
import {useState} from 'react';
import css from './App.module.css';

// import { useState, useEffect } from "react";

// ------- Заняття 3 - Події та стан компонента --------
//    ----- Обробка подій -------
// export default function App () {
//   const handleClick = () => {
//     console.log('Click');
//   }
//   const handleMouseEnter =(evt) => {
//     // console.log('Mouse enter');
//     console.log(evt);
//   }
//   return (
//     <div className={css.container} onMouseEnter={handleMouseEnter}>
//       State in React
//       <button onClick={handleClick}>Click</button>
//     </div>
//   )
// };

// --------------------
// export default function App () {
//   const handleClick = () => {
//     console.log('Click');
//   }
//   const handleMouseEnter =(evt) => {
//     console.log(evt);
//   }
//   const passValue = (value) => {
//     console.log(value);
//   }
//   // return (
//   //   <div className={css.container} onMouseEnter={handleMouseEnter}>
//   //     State in React
//   //     <button onClick={handleClick}>Click</button>
//   //     <button onDoubleClick={passValue}>Double click</button>
//   //   </div>
//   // )
//   return (
//     <div className={css.container} onMouseEnter={handleMouseEnter}>
//       State in React
//       <button onClick={handleClick}>Click</button>
//       <button onDoubleClick={() => {passValue(5)}}>Double click</button>
//     </div>
//   )
// };

//  -- Стан компонента ----------

// export default function App () {
//   let clicks = 0;
//   const handleClick = () => {
//     clicks += 1;
//     console.log("clicks", clicks);
//   }

//   return (
//     <div className={css.container}>
//       State in React
//       <button onClick={handleClick}>Click: {clicks}</button>
      
//     </div>
//   )
// };

// export default function App () {
//   // const data = useState(0)
//   // console.log(data);
//   const [clicks, setClicks]= useState(0);

//   const handleClick = () => {
//     console.log("clicks", clicks);
//     setClicks(clicks + 1);
//     console.log(clicks);
//     }

//   return (
//     <div className={css.container}>
//       State in React
//       <button onClick={handleClick}>Click: {clicks}</button>
//     </div>
//   )
// };

// ------------------- task 1 -------------------
// import Counter from '../Counter';
// export default function App () {

//   return (
//     <div className={css.container}>
//       <Counter />
//       <Counter />
//       <Counter />
//     </div>
//   )
// };

//    ------- Підняття стану  ---------
// import Counter from '../Counter';
// export default function App () {
//   const [clicks, setClicks] = useState(0);
//   const handleClick = () => {
//     setClicks(clicks + 1);
//   }

//   return (
//     <div className={css.container}>
//       <Counter value={clicks} onUpdate={handleClick}/>
//       <Counter value={clicks} onUpate={handleClick}/>
//       <Counter value={clicks} onUpdate={handleClick}/>
//     </div>
//   )
// };

// ------------------- task 2 -------------------
// import Counter from '../Counter';
// export default function App () {
//   // 1
//   const [clicks, setClicks] = useState(0);

//   // 2
//   const [isOpen, setIsOpen] = useState(false);

//   // 3
//   const [tabIndex, setTabIndex] = useState(null);
 
//   //1
//   const handleClick = () => {
//     setClicks(clicks + 1);
//   }
//   //2
//   const toggleText = () => {
//     setIsOpen(!isOpen);
//   }

//   //3
//   const selectTab = (nextIndex) => {
//     console.log(nextIndex);
//     // setTabIndex(nextIndex);

//     if (nextIndex === tabIndex) {
//       setTabIndex(null);
//     } else {
//       setTabIndex(nextIndex);
//     }
//   }
  
//   return (
//     <div className={css.container}>
//       {/* 1 */}
//       <Counter value={clicks} onUpdate={handleClick}/>
//       <Counter value={clicks} onUpate={handleClick}/>
//       <Counter value={clicks} onUpdate={handleClick}/>

//       {/* 2 */}
//       <hr />
//       <button onClick={toggleText}>Toggle</button>
//       {isOpen && <p>You can see me 😍💋</p>}

//       {/* 3 */}
//       <hr />
//       <div>
//         <div>
//           <p onClick={() => selectTab(1)}>Tab 1</p>
//           {tabIndex === 1 && <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit!</p>}
//         </div>
//         <div>
//           <p onClick={() => selectTab(2)}>Tab 2</p>
//           {tabIndex === 2 && <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit!</p>}
//         </div>
//         <div>
//           <p onClick={() => selectTab(3)}>Tab 3</p>
//          {tabIndex === 3 && <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit!</p>}
//         </div>
//       </div>
     
//     </div>
//   )
// };

//    ------------------
// import Counter from '../Counter';
// import Accordion from '../Accordion'; 
// export default function App () {
// const items = [
//   { title: 'Tab 1', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit!' },
//   { title: 'Tab 2', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit!' },
//   { title: 'Tab 3', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit!' },
// ]
//   // 1
//   const [clicks, setClicks] = useState(0);

//   // 2
//   const [isOpen, setIsOpen] = useState(false);

//   //1
//   const handleClick = () => {
//     setClicks(clicks + 1);
//   }
//   //2
//   const toggleText = () => {
//     setIsOpen(!isOpen);
//   }

//   return (
//     <div className={css.container}>
//       {/* 1 */}
//       <Counter value={clicks} onUpdate={handleClick}/>
//       <Counter value={clicks} onUpate={handleClick}/>
//       <Counter value={clicks} onUpdate={handleClick}/>

//       {/* 2 */}
//       <hr />
//       <button onClick={toggleText}>Toggle</button>
//       {isOpen && <p>You can see me 😍💋</p>}

//       {/* 3 */}
//       <hr />
//       <Accordion tabs={items}/>
     
//     </div>
//   )
// };

//-----------
import Counter from '../Counter';
import Accordion from '../Accordion'; 
export default function App () {
  //3
  const items = [
    { title: 'Tab 1', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit!' },
    { title: 'Tab 2', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit!' },
    { title: 'Tab 3', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit!' },
  ]

  //4
  const [taskCount, setTaskCount] = useState({
    work: 0,
    hobby: 0,
    edu: 0,
  });
 
  taskCount.hobby = 10;
  console.log(taskCount.hobby);
  const totalTask = taskCount.work + taskCount.hobby + taskCount.edu;

  // 1
  const [clicks, setClicks] = useState(0);

  // 2
  const [isOpen, setIsOpen] = useState(false);

  //1
  const handleClick = () => {
    setClicks(clicks + 1);
  }
  //2
  const toggleText = () => {
    setIsOpen(!isOpen);
  }
  //4
  const updateTaskCount = (taskType) => {
    console.log(taskType);
    // setTaskCount(() => ({
    //   ...taskCount,
    //  work: 5,
    //  edu: taskCount.edu + 1,
    //  hobby: taskCount.hobby + 1,
    // }));
  };

  return (
    <div className={css.container}>
      {/* 1 */}
      <Counter value={clicks} onUpdate={handleClick}/>
      <Counter value={clicks} onUpate={handleClick}/>
      <Counter value={clicks} onUpdate={handleClick}/>

      {/* 2 */}
      <hr />
      <button onClick={toggleText}>Toggle</button>
      {isOpen && <p>You can see me 😍💋</p>}

      {/* 3 */}
      <hr />
      <Accordion tabs={items}/>

      {/* 4 */}
      <hr />
    <div>
      <p>Total tasks: {totalTask}</p>
      <button onClick={() => updateTaskCount('work')}>Work : {taskCount.work}</button>
      <button onClick={() => updateTaskCount('hobby')}>Hobby : {taskCount.hobby}</button>
      <button onClick={() => updateTaskCount('edu')}>Education : {taskCount.edu}</button>
    </div>
    </div>
  )
};