// import { useState } from 'react';

// export default function Counter() {
//     const [clicks, setClicks] = useState(0);

//     const handleClick = () => {
//         setClicks(clicks + 1);
//     }

//     return (
//         <button onClick={handleClick}>
//             {clicks}
//         </button>
//     );
//   }

  //  ----   Підняття стану ---------   
// export default function Counter({value, onUpdate}) {
//     return (
//         <button onClick={onUpdate}>
//             Button : {value}
//         </button>
//     );
//   }

// -------------task 2-----------------
export default function Counter({value, onUpdate}) {
    return (
        <button onClick={onUpdate}>
            Button : {value}
        </button>
    );
  }

