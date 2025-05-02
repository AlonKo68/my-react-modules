// M1-2 Mentor - Styling
//вбудовані стилі
//
import CatList from '../CatList/CatList';
import cats from '../../cats.json'
import AppBar from '../AppBar/AppBar';

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
