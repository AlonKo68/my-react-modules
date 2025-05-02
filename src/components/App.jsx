import React, { useState } from 'react'
// import reactLogo from '../assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React is Amazing</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
// export default App


//    3. components
// function Product() {
//   return (
//     <div>
//       <h2>Cookies</h2>
// 	  <p>Price: 999 credits</p>
//     </div>
//   );
// };

// export default function App() {
//   return (
//     <div>
//       <h1>Products</h1>

//       <Product />
//       <Product />
//       <Product />
//     </div>
//   );
// }

// ***************task-1 **************
// import user from "./userData.json";
// import Profile from "./Product";
// const {
//   username,
//   tag,
//   location,
//   avatar,
//   stats: { followers, views, likes },
// } = user[0];


// const App = () => {
//   return (
//     <>
//       <Profile
//           name={username}
//         tag={tag}
//         location={location}
//         image={avatar}
//         followers={followers}
//         views={views}
//         likes={likes}
//       />
//     </>
//   );
// };
// export default App;
// ***************task-1 **************

// 4.    import/export
// import Product from './Product'
// export default function App() {
//   return (
//     <div>
//       <h1>Products</h1>

//       <Product />
//       <Product />
//       <Product />
//     </div>
//   );
// }

//  6. Властивості компонента (props)
// import Product from './Product';
// export default function App() {
//   return (
//     <div>
//       <h1>Best selling</h1>

//       <Product name="Tacos With Lime" />
//       <Product name="Fries and Burger" />
//     </div>
//   );
// }

// import Product from "./Product";
// export default function App() {
//   return (
//     <div>
//       <h1>Best selling</h1>

//       <Product
//         name="Tacos With Lime"
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//         price={10.99}
//       />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//         price={14.29}
//       />
//     </div>
//   );
// }

// import Product from "./Product";
// export default function App() {
//   return (
//     <div>
//       <h1>Best selling</h1>

//       <Product
//         name="Tacos With Lime"
//         price={10.99}
//       />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//         price={14.29}
//       />
//     </div>
//   );
// }

//    7.  Умовний рендеринг
// Логічний оператор &&

//   8.  Колекції
// import BookList from './Product';
// import favBooks from './Constants';
// const App = () => {
//   return (
//     <>
// 	  <h1>Books of the week</h1>
//       <BookList books={favBooks} />
//     </>
//   );
// };
// export default App;

//  9.  Властивість props.children
// import Card from './Product';

// const App = () => {
//  return ( 
//     <>
//       <Card text="Message as a text prop" />
//     </>
//   )
// }
// export default App;

// const App = () => {
//   return (
//   <Card>
// 	  <h1>Card title</h1>
// 	  <p>Text between opening and closing tag</p>
//   </Card >
//   )
// }
// export default App;

//Заняття 2. Вбудовані стилі
// export const App = () => {
//   return (
//     <p
//       style={{
//         margin: 8,
//         padding: "12px 16px",
//         borderRadius: 4,
//         backgroundColor: "gray",
//         color: "white",
//       }}
//       >
//         Please update your email!
//     </p>
//   );
// };
// export default App;

// *********************
// const alertStyles = {
//   margin: 8,
//   padding: "12px 16px",
//   borderRadius: 4,
//   backgroundColor: "gray",
//   color: "white",
// };
        
// export const App = () => {
//   return (
//     <>
//       <p style={alertStyles}>Please update your email!</p>
//       <p style={alertStyles}>There was an error during transaction!</p>
//       <p style={alertStyles}>Payment received, thank you for your purchase!</p>
//     </>
//   );
// };
// export default App;

// ******************        
// import { Alert } from "./Alert";
// export const App = () => {
//   return (
//     <>
//       <Alert>Please update your email!</Alert>
//       <Alert>There was an error during transaction!</Alert>
//       <Alert>Payment received, thank you for your purchase!</Alert>
//     </>
//   );
// };
// export default App;

//1.1.   Динамічні стилі
// import { Alert } from "./Alert";

// const App = () => {
//   return (
//     <>
//       <Alert variant="info">
//         Would you like to browse our recommended products?
//       </Alert>
//       <Alert variant="error">
//         There was an error during your last transaction
//       </Alert>
//       <Alert variant="success">
//         Payment received, thank you for your purchase
//       </Alert>
//       <Alert variant="warning">
//         Please update your profile contact information
//       </Alert>
//     </>
//   );
// };
// export default App;

//  2.  Ванільний CSS
// import Alert from './Alert';
// const App = () => {
//   return (
//   <Alert>
// 	  <h1>Card title</h1>
// 	  <p>Text between opening and closing tag</p>
//   </Alert>
//   )
// }
// export default App;

//  3.  Композиція класів
// 4.  Бібліотека clsx
/*  6.  CSS-модулі */
/* 6.1 Бібліотека clsx */

// import { Alert }  from "./Alert";
// const App = () => {
//   return (
//     <>
//       <Alert variant="info">
//         Would you like to browse our recommended products?
//       </Alert>
//       <Alert variant="error" outlined>
//         There was an error during your last transaction
//       </Alert>
//       <Alert variant="success" elevated>
//         Payment received, thank you for your purchase
//       </Alert>
//       <Alert variant="warning" outlined elevated>
//         Please update your profile contact information
//       </Alert>
//     </>
//   );
// };
// export default App;

//  8.  Бібліотека React Icons
// import { DiApple } from "react-icons/di";

// export default function UserMenu({ name }) {
//   return (
//     <div className='icon'>
//       <p><DiApple className="my-icon" size="24" /> {name}</p>
//     </div>
//   );
// };

//          mentor m1-1 - Components
// export const cat = {
//     id: 1,
//     name: "Mr. Whiskerson",
//     phone: "+1-555-1234",
//     email: "whiskerson@catmail.com",
//     image: "https://cataas.com/cat/says/Hello"
// };
// function CatProfile(props) {
//     console.log(props);
//     return (
//         <div>
//             <h1>My cat</h1>
//             <img src={cat.image} alt={cat.name} width="280" />
//             <h2>{cat.name}</h2>
//             <p>Phone: {cat.phone}</p>
//             <p>Email: {cat.email}</p>
//         </div>
//     );
// };
// export default function App() {     
//     return (
//         <div>
//             <CatProfile />
//             <CatProfile />
//         </div>
//     );
// };

//    props
// const cat = {
//     id: 1,
//     name: "Mr. Whiskerson",
//     phone: "+1-555-1234",
//     email: "whiskerson@catmail.com",
//     image: "https://cataas.com/cat/says/Hello",
// };

// const cat2 = {
//     id: 2,
//     name: "Sir Pounce-a-lot",
//     phone: "+1-555-5678",
//     email: "pouncealot@catmail.com",
//     image: "https://cataas.com/cat/says/Meow",
// };

// function CatProfile({cat}) {
//     return (
//         <div>
//             <h1>My cat</h1>
//             <img src={cat.image} alt={cat.name} width="280" />
//             <h2>{cat.name}</h2>
    
//         </div>
//     );
// };
// export default function App() {     
//     return (
//         <div>
//             {/* <CatProfile a="Hello" b={5} /> */}
//             <CatProfile cat={cat} />
//             <CatProfile cat={cat2} />
//         </div>
//     );
// };

//**************************** */
// import CatProfile from './CatProfile';

// const cat = {
//     id: 1,
//     name: "Mr. Whiskerson",
//     phone: "+1-555-1234",
//     email: "whiskerson@catmail.com",
//     image: "https://cataas.com/cat/says/Hello",
// };

// const cat2 = {
//     id: 2,
//     name: "Sir Pounce-a-lot",
//     phone: "+1-555-5678",
//     email: "pouncealot@catmail.com",
//     image: "https://cataas.com/cat/says/Meow",
// };

// export default function App() {     
//     return (
//         <div>
//             {/* <CatProfile a="Hello" b={5} /> */}
//             <CatProfile cat={cat} />
//             <CatProfile cat={cat2} />
//         </div>
//     );
// };

//          Колекції елементів
//Метод map використовують тоді, коли дані не статичні, 
// а можуть змінюватися з часом: завантажуються з API, додаються 
// користувачем, фільтруються тощо.

// import CatProfile from './CatProfile';

// const cat = {
//     id: 1,
//     name: "Mr. Whiskerson",
//     phone: "+1-555-1234",
//     email: "whiskerson@catmail.com",
//     image: "https://cataas.com/cat/says/Hello",
// };

// const cat2 = {
//     id: 2,
//     name: "Sir Pounce-a-lot",
//     phone: "+1-555-5678",
//     email: "pouncealot@catmail.com",
//     image: "https://cataas.com/cat/says/Meow",
// };

// export default function App() {     
//     return (
//         <div>
//             {/* <CatProfile a="Hello" b={5} /> */}
//             <CatProfile cat={cat} />
//         {/* {['HTML', 'CSS','JS', 'React']} */}
//         {/* {[<div>'HTML'</div>, <div>'CSS'</div>,<div>'JS'</div>, 'React']} */}
//         {['HTML', 'CSS', 'JS', 'React'].map((item) => {
//             return (
//                 <div>{item}</div>
//             )
//         })}
//         </div>
//     );
// };

// import CatProfile from './CatProfile';
// import cats from '../cats.json'
// // console.log(cats);

// export default function App() {     
//     return (
//         <div>
//         <ul>
//           {cats.map((cat) => (
//             <li>
//               <CatProfile cat={cat} />
//             </li>
//           ))}
//        </ul>
//         </div>
//     );
// };

//Рендер за умови
//Значення що не відображаються: 
// null, undefined, false

// import CatProfile from './CatProfile';
// import cats from '../cats.json'
// // console.log(cats);

// export default function App() {     
//   const isLoggedId = true;
//   return (
//     <div>
//       {/* //Оператор && */}
//       {/* {isLoggedId && <h1>Welcome back!</h1>}
//       {!isLoggedId && <h1>Please log in</h1>}
//       {0 && <h1>0</h1>}
//       {NaN && <h1>NaN</h1>}
//       {null && <h1>null</h1>}
//       {undefined && <h1>undefined</h1>}
//       {false && <h1>false</h1>} */}
//       {/* //Тернарний оператор */}
//       {isLoggedId ? <h1>Welcome back!</h1> : <h1>Please log in</h1>}
//     </div>
// );
// };


// import CatList from './CatList';
// import cats from '../cats.json'

// export default function App() {     
//     return (
//       <div>
//         <CatList itemCats={cats} />
//       </div>
//     );
// };

// import CatList from './CatList';
// import cats from '../cats.json'
// import AppBar from './AppBar';

// export default function App() {     
//     return (
//         <>
//             <AppBar />
//             <CatList itemsCat={cats} />
//       </>
//     );
// };

// M1-2 Mentor - Styling
//вбудовані стилі
//
import CatList from './CatList';
import cats from '../cats.json'
import AppBar from './AppBar';

export default function App() {
    return (
        <div style={{
            backgroundColor: '#f5deb3',
            margin: "0 auto",         
        }}>
            <AppBar />
            <CatList itemsCat={cats} />
      </div>
    );
};






// *************************** task-1 ************
// import Profile from './CatProfile';
// const userData = {
//   username: "Jacques Gluke",
//   tag: "jgluke",
//   location: "Ocho Rios, Jamaica",
//   avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308
//   }
// };
// console.log(userData);

// export default function App() {     
//     return (
//         <div>
//             <Profile user={userData} />
//         </div>
//     );
// };

// ************************ task-2 ************

// import friends from '../friends.json';
// // import FriendListItem from './FriendListItem';
// import FriendsList from './FriendsList';

// export default function App() {
//     return (
//         <div>
//             <FriendsList itemFriends={friends} />
//         </div>
//     );
// }

//***************************    */
