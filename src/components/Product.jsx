//  export default function Product() {
//   return (
//     <div>
//       <h2>Tacos</h2>
//       <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//         alt="Tacos With Lime" width="640" />
// 	  <p>Price: 999 credits</p>
//     </div>
//   );
// };

//5.  JSX - опис UI

// export default function Product() {
//   return (
//       <h2>Tacos</h2>
// 	  <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640" alt="Tacos With Lime" width="640" />
//       <p>Price: 999 credits</p>
//   );
// }; //Error

// export default function Product() {
//   return (
//     <>
//       <h2>Tacos</h2>
// 	  <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640" alt="Tacos With Lime" width="640" />
//       <p>Price: 999 credits</p>
//     </>
//   );
// };

// export default function Product() {
// 	const price = 999;

//   return (
//     <>
//       <h2>Tacos</h2>
// 	    <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640" alt="Tacos With Lime" width="640" />
//       <p>Price: {price} credits</p>
//     </>
//   );
// };

//  6. Властивості компонента (props)
// export default function Product() {
//   return (
//     <div>
//       <h2>Tacos</h2>
// 	  <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640" alt="Tacos With Lime" width="640" />
// 	  <p>Price: 999 credits</p>
//     </div>
//   );
// };

// export default function Product(props) {
//   return (
//     <div>
//       <h2>{props.name}</h2>
// 	  <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640" alt="Tacos With Lime" width="480" />
// 	  <p>Price: 999 credits</p>
//     </div>
//   );
// };

// export default function Product(props) {
//   return (
//     <div>
//       <h2>{props.name}</h2>
// 	  <img src={props.imgUrl} alt={props.name} width="480" />
// 	  <p>Price: {props.price} credits</p>
//     </div>
//   );
// };

// export default function Product({ name, imgUrl, price }) {
//   return (
//     <div>
//       <h2>{name}</h2>
// 	  <img src={imgUrl} alt={name} width="480" />
// 	  <p>Price: {price} credits</p>
//     </div>
//   );
// };

// export default function Product({
//   name,
//   imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
//   price,
// }) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <img src={imgUrl} alt={name} width="480" />
//       <p>Price: {price} credits</p>
//     </div>
//   );
// }

//    7.  Умовний рендеринг
//Логічний оператор &&

// const Mailbox = ({ username, messages }) => {
//   return (
//     <>
//       <p>Hello {username}</p>
//       {messages.length > 0 && (
//         <p>You have {messages.length} unread messages</p>
//       )}
//     </>
//   );
// };

//    8.  Колекції
// const BookList = ({ books }) => {
//   return (
//     <ul>
//       {books.map((book) => {
//         return <li>{book.name}</li>;
//       })}
//     </ul>
//   );
// };
// export default BookList;
// const BookList = ({ books }) => {
//   return (
// 	<ul>
// 	  {books.map((book) => {
// 		return <li key={book.id}>{book.name}</li>;
// 	  })}
// 	</ul>
//   );
// };

// const BookList = ({ books }) => (
//   <ul>
// 	{books.map((book, index) => {
//       return <li key={index}>{book.name}</li>;
// 	})}
//   </ul>
// );
// export default BookList;

//  9.  Властивість props.children
const Card = ({ text }) => {
  return <div>{text}</div>;
};
export default Card;

// const Card = ({ children }) => {
//   return <div>{children}</div>;
// };
// export default Card;