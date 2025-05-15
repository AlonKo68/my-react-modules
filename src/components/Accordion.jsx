// import {useState} from 'react';
// export default function Accordion() {
//     const [tabIndex, setTabIndex] = useState(null);

//     const selectTab = (nextIndex) => {
//         console.log(nextIndex);
//         // setTabIndex(nextIndex);

//         if (nextIndex === tabIndex) {
//           setTabIndex(null);
//         } else {
//           setTabIndex(nextIndex);
//         }
//       }

//     return (
//         <div>
//             <div>
//               <p onClick={() => selectTab(1)}>Tab 1</p>
//                {tabIndex === 1 && <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit!</p>}
//             </div>
//             <div>
//               <p onClick={() => selectTab(2)}>Tab 2</p>
//                {tabIndex === 2 && <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit!</p>}
//             </div>
//             <div>
//               <p onClick={() => selectTab(3)}>Tab 3</p>
//               {tabIndex === 3 && <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit!</p>}
//             </div>
//       </div>

//     )
// }

import { useState } from 'react';
export default function Accordion({ tabs }) {
  const [tabIndex, setTabIndex] = useState(null);

  const selectTab = (nextIndex) => {
    console.log(nextIndex);
    // setTabIndex(nextIndex);

    if (nextIndex === tabIndex) {
      setTabIndex(null);
    } else {
      setTabIndex(nextIndex);
    }
  };

  return (
    <div>
      {tabs.map((tab, index) => (
        <div key={index}>
          <p onClick={() => selectTab(index)}>{tab.title}</p>
          {tabIndex === index && <p>{tab.content}</p>}
        </div>
      ))}
    </div>
  );
}


