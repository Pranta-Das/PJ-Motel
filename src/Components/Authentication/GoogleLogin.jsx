import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import React, { useState } from "react";
import { auth } from "../../firebase/firebase.config";


const GoogleLogin = () => {
//   const [loginUser, setloginUser] = useState(null);

  
  
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // setloginUser(user);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

//   const handleGoogleSignOut = () => {
//     signOut(auth)
//       .then((result) => {
//         console.log(result);
//         setloginUser(null);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
  return (
    <div>
      {/* <div>
        {loginUser ? (
          <button onClick={handleGoogleSignOut}>LogOut</button>
        ) : (
          <button onClick={handleGoogleSignIn}>google login</button>
        )}

        {loginUser && (
          <div>
            <h1>{loginUser.displayName}</h1>
          </div>
        )}
      </div> */}
      
      <button
        onClick={handleGoogleSignIn}
        className=" px-5 py-3 bg-yellow-500 text-white w-full rounded-lg"
      >
        Google Login
      </button>
    </div>
  );
};

export default GoogleLogin;
