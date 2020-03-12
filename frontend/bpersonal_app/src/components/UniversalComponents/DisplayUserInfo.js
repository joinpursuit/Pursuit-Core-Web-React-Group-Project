// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useInput, useToggleShow } from '../../util/customHooks'

// const DisplayUserInfo = () => {
//   const [user, setUser] = useState({});
//   const [editBoolean, setEditBoolean] = useState(false);
// //   const editProfileInputObj = useInput("")
//   const toggleEditProfile = useToggleShow(false);

//   const fetchData = async url => {
//     try {
//       let res = await axios.get(url);
//       //   debugger;
//       const { single_user } = res.data.body;
//       setUser(single_user);
//     } catch (error) {
//       setUser({});
//       console.log(error);
//     }
//   };

//   const handleUpdateProfile = async e => {
//     e.preventDefault();
//     await axios.patch(`users/${sessionStorage.userID}`, {
//       userName: username,
//       name: full_name,
//       bio: bio,
//       email: email
//     });
//   };

//   // const handleClick = () => {
//   //     if (editBoolean){
//   //         // style.display of the form "block"
//   //     } else {
//   //         // style.display of the form "none"
//   //     }
//   // }

//   useEffect(() => {
//     fetchData("users/1");
//   }, []);

//   return (
//     <section id="displayUser">
//       <img
//         src={user.profile_pic_url}
//         style={{ width: "300px", height: "300px", borderRadius: "100%" }}
//       ></img>
//       <h1>{user.username}:</h1>
//       <h2> {user.full_name}</h2>
//       <h2>{user.bio}</h2>
//       <h2>{user.email}</h2>
//       <button id="editProfileButton" onClick={toggleEditProfile.onclick} >Edit Profile</button>
      
//       {toggleEditProfile.showInsert ? (
//       <form id="updateBio" onSubmit={handleUpdateProfile}>
//         <input id="name" type="text" />
//         <input id="userName" type="text" />
//         <input id="email" type="text" />
//         <input id="bio" type="text" />
//       <button>Edit Profile</button>
//       </form>
//       ) : null}
//     </section>
//   );
// };

// export default DisplayUserInfo;
