//Заняття 2. Вбудовані стилі
// const alertStyles = {
//   margin: 8,
//   padding: "12px 16px",
//   borderRadius: 4,
//   backgroundColor: "gray",
//   color: "white",
// };

// export const Alert = ({ children }) => {
//     return <p style={alertStyles}>{children}</p>;
// };

//  *********************
//1.1.   Динамічні стилі
// const alertStyles = {
//   margin: 8,
//   padding: "12px 16px",
//   borderRadius: 4,
//   color: "white",
// };

// const getBgColor = variant => {
//   switch (variant) {
//     case "info":
//       return "blue";
//     case "success":
//       return "green";
//     case "error":
//       return "red";
//     case "warning":
//       return "orange";
//     default:
//       throw new Error(`Unsupported variant prop value - ${variant}`);
//   }
// };

// export const Alert = ({ variant, children }) => {
//   return (
//     <p
//       style={{
//         ...alertStyles,
//         backgroundColor: getBgColor(variant),
//       }}
//     >
//       {children}
//     </p>
//   );
// };

//  2.  Ванільний CSS
// import "./Alert.css";
// const Alert = ({ children }) => {
//     return <p className="alert">
//         {children}
//     </p>
// }
// export default Alert;

//  3.  Композиція класів
// import "./Alert.css";

// export const Alert = ({ variant, children }) => {
//   const classNames = ["alert", variant];
//   return <p className={classNames.join(" ")}>{children}</p>;
// };

//    ******************
// import './Alert.css';
// export const Alert = ({ variant, outlined, elevated, children }) => {
//   const classNames = ['alert', variant];

//   if (outlined) {
//     classNames.push('is-outlined');
//   }

//   if (elevated) {
//     classNames.push('is-elevated');
//   }

//   return <p className={classNames.join(' ')}>{children}</p>;
// };

//  4.  Бібліотека clsx
// import './Alert.css';
// import clsx from "clsx";

// export const Alert = () => {
//     const className = clsx(
//         "first",
//          10,
//          undefined && "second",
//         true && "third",
//         false ? "fourth" : "fifth"
//     );
// console.log(className); // "first 10 third fifth"
// };

//   *********************
// import clsx from "clsx";
// import "./Alert.css";

// export const Alert = ({ variant, outlined, elevated, children }) => {
//   return (
//     <p
//       className={clsx(
//         "alert",
//         variant,
//         outlined && "is-outlined",
//         elevated && "is-elevated"
//       )}
//     >
//       {children}
//     </p>
//   );
// };

// 6.  CSS-модулі
// import clsx from "clsx";
// import css from "./Alert.module.css";
// export const Alert = ({ variant, children }) => {
//        return <p className={clsx(css.alert, css[variant])}>{children}</p>;
// };

//    6.1 Бібліотека clsx
// import clsx from 'clsx';
// import css from './Alert.module.css';

// export const Alert = ({ variant, outlined, elevated, children }) => {
//   return (
//     <p
//     className={clsx(
//         css.alert,
//         css[variant],
//         outlined && css.isOutlined,
//         elevated && css.isElevated
//       )}
//     >
//       {children}
//     </p>
//   );
// };





