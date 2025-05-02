// export default function CatProfile({ cat: {name, image } }) {
//     return (
//         <div>
//             <h1>My cat</h1>
//             <img src={image} alt={name} width="280" />
//             <h2>{name}</h2>
    
//         </div>
//     );
// };

//   ****************************************

export default function CatProfile({ cats: { name, phone, email, image } }) {
    return (
        <>
            <img src={image} alt={name} width="200" />
            <h2>{name}</h2>
            <p>{phone}</p>
            <p>{email}</p>
        </>
    );
};









// ************************************
// export default function Profile({ user: { username,tag, location,avatar, stats: {followers, views, likes} } } ) {
//     return (
//         <div>
//             <div>
//                 <img src={avatar} alt={username} width="300" />
//                 <p>{username}</p>
//                 <p>{tag}</p>
//                 <p>{location}</p>
//             </div>
//             <ul>
//                 <li>
//                     <span>Followers</span>
//                     <span>{followers}</span>
//                 </li>
//                 <li>
//                     <span>Views</span>
//                     <span>{views}</span>
//                 </li>
//                 <li>
//                     <span>Likes</span>
//                     <span>{likes}</span>
//                 </li>
//             </ul>
//         </div>
//     );
// }
// ********************************