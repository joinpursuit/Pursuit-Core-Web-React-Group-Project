import React, { useState } from "react";
import { useInput } from "../../util/customHooks";
import OurCanvasLogoSplat from "../../images/OurCanvasLogoSplat.jpg";
import "../../css/SignUp.css";
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
          <img src={OurCanvasLogoSplat} alt="" />
        </div>
        <form onSubmit={handleSignUpSubmit} className="signUpForm">
          <h5>
            Don't have an account yet?
            <p>Sign up to connect with artists near you</p>
          </h5>

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
        <div className="already">
          <h6>Already have an account?</h6>
          <input type="button" value="Log In" className="button signUpSwitch" />
        </div>
      </div>
    </>
  );
};
export default SignUpForm;
