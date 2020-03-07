import React, { useState } from "react";
import { useInput } from "../../util/customHooks";
import OurCanvasLogo from "../../Images/OurCanvasLogo.jpg";
import "../../CSS/signIn.css"
// import OurCanvasBackground from "../../Images/OurCanvasBackground.jpg"

const SignUpForm = () => {
  const email = useInput("");
  const typeOfArt = useInput("");
  const bio = useInput("");
  const favoriteArtist = useInput("");

  const handleSignUpSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <div className="signUpFormDiv">
        <div>
          <img src={OurCanvasLogo} alt="" />
        </div>
        <form onSubmit={handleSignUpSubmit} className="signUpForm">
          <label>
            Email :
            <input
              type="text"
              placeholder="Enter Your Email"
              {...email}
              className="signUpEmail"
            />
          </label>
          <label>
            Genre :
            <input
              type="text"
              placeholder="Enter Genre"
              {...typeOfArt}
              className="textInput signUpGenre"
            />
          </label>
          <label>
            Bio :
            <input
              type="text"
              placeholder="Enter Your Bio"
              {...bio}
              className="textInput signUpBio"
            />
          </label>
          <label>
            Favorite Artist :
            <input
              type="text"
              placeholder="Enter Your Favorite Artist"
              className="textInput signUpFavArtist"
              {...favoriteArtist}
            />
          </label>

          <input
            type="Submit"
            value="Sign Up"
            className="button signUpSubmit"
          />
        </form>
      
        <input type="button" value="Log In" className="button signUpSwitch" />
      </div>
    </>
  );
};
export default SignUpForm;
