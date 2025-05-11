// import React from 'react';
// import './App.css'

import css from './App.module.css';

//Заняття 1. Обробка подій
// const App = () => {
  // 	return <button>Click me!</button>;
  // };
  // export default App;
  
  //-----------------------------
  // const App = () => {
    // 	const handleClick = () => {
      // 		alert("I'm a button!");
      // 	};
      // 	return <button onClick={handleClick}>Click me!</button>;
      // };
      // export default App;
      
      // export default function App() {
        //   const handleClick = () => {
//     alert("I'm a button!");
//   };
//   return <button onClick={handleClick}>Click me!</button>;
// }

//------------------------------
// const App = () => {
  //   return <button onClick={() => alert("I'm a button!")}>Click me!</button>;
  // };
  // export default App;
  
  //---------------1. Посилання на функцію---------------
  // const App = () => {
//     return <button onClick={alert('You clicked me!')}>Click me!</button>;
//   };
//   export default App;

//------------
// const App = () => {
  //   return <button onClick={() => alert("I'm a button!")}>Click me!</button>;
  // };
  // export default App;
  
  //-----------------2. Об'єкт події ---------------
  //  export default function App() {
    // 	const handleClick = (evt) => {
      // 		console.log(evt);
      // 	};
      // 	return (
        // 		<>
        // 			<button onClick={handleClick}>First button</button>
        // 			<button onClick={evt => console.log(evt)}>Second button</button>
        // 		</>
        // 	);
        // };
        
        //-------------3. Читання props -------------
        // import CustomButton from '../CustomButton';
        
        //   const App = () => {
          //     return (
            //       <>
            //         <CustomButton message="Playing music!">
            //           Play some music
            //         </CustomButton>
            //         <CustomButton message="Uploading your data!">
            //           Upload data
            //         </CustomButton>
            //       </>
            //     );
            //   }
// export default App;

//--------- 5. Реактивність -----------
// const App = () => {
  // 	let clicks = 0;
  
  //   const handleClick = () => {
    //     clicks = clicks + 1;
    
    //   };
    
    // 	return <button onClick={handleClick}>Current: {clicks}</button>
    // };
    // export default App;
    
    //------------------------  
    // const App = () => {
// 	const [ clicks, setClicks ] = useState(0);
//   console.log(useState(0));

//   const handleClick = () => {
  //     // clicks = clicks + 1;
  // 		setClicks(clicks + 1);
  //   };
  //   console.log(clicks);
  
  // 	return <button onClick={handleClick}>Current: {clicks}</button>
  // };
  // export default App;
  
  //-----------------6. Хук useState --------------
  // import { useState } from 'react';

  // export const App = () => {
    //   const [clicks, setClicks] = useState(1);
    //   console.log(clicks);
    //   console.log(useState(1));
//   const handleClick = () => {
  //     setClicks(clicks + 1);
  //   };
  
  //   return <button onClick={handleClick}>Number of clicks: {clicks}</button>;
  // };
  // export default App;
  
//-----------------7. Декілька станів --------------
// import { useState } from 'react';

// export default function App() {
//   const [clicks, setClicks] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <button onClick={handleClick}>Current: {clicks}</button>
//       <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
//       {isOpen && <p>Now you can see me!</p>}
//     </>
//   );
// };

//-------------8. Ізоляція стану ---------
// import ClickCounter from '../ClickCounter/ClickCounter';
// const App = () => {
//   return (
//     <>
// 	  <ClickCounter />
// 	  <ClickCounter />
//     </>
//   );
// };
// export default App;  

//-----------------9. Підняття стану --------------
// import { useState } from 'react';
// import { ClickCounter } from '../ClickCounter/ClickCounter';

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return (
//     <>
//       <ClickCounter value={clicks} onUpdate={handleClick} />
//       <ClickCounter value={clicks} onUpdate={handleClick} />
//     </>
//   );
// };
// export default App;

//------------- 10. Оновлення об'єктів --------
// import { useState } from 'react';

// const App = () => {
//   const [values, setValues] = useState({
//     x: 0,
//     y: 0,
//   });

//   const updateX = () => {
//     setValues({
//       ...values,
//       x: values.x + 1,
//     });
//   };

//   const updateY = () => {
//     setValues({
//       ...values,
//       y: values.y + 1,
//     });
//   };

//   return (
//     <div>
//       <p>
//         x: {values.x}, y: {values.y}
//       </p>

//       <button onClick={updateX}>Update x</button>
//       <button onClick={updateY}>Update y</button>
//     </div>
//   );
// };
// export default App;

//      -----------  Заняття 2. Життєвий цикл компонента
//------    2.1. Хук useEffect ---------
// import { useState, useEffect } from "react";

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };
// export default App;

//------------------------
import { useState, useEffect } from "react";

const App = () => {
  const [clicks, setClicks] = useState(0);

  // Оголошуємо ефект
  useEffect(() => {
    //змінювати заголовок вкладки браузера.
    document.title = `You clicked ${clicks} times`;
  });

  return (
    <button onClick={() => setClicks(clicks + 1)}>
      You clicked {clicks} times
    </button>
  );
};
export default App;