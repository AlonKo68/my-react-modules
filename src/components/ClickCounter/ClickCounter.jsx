//-------------8. Ізоляція стану ---------
// import { useState } from 'react';

// const ClickCounter = () => {
//     const [clicks, setClicks] = useState(0);
  
//     const handleClick = () => {
//       setClicks(clicks + 1);
//     };
      
//     return <button onClick={handleClick}>Current: {clicks}</button>
//   };
//   export default ClickCounter;

  //-----------------9. Підняття стану --------------
  export const ClickCounter = ({ value, onUpdate }) => {
    console.log(value); //0
    return <button onClick={onUpdate}>Current: {value}</button>;
  };