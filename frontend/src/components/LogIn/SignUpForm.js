import React, { useState } from "react";
import { useInput } from "../../util/customHooks";
import OurCanvasLogoSplat from "../../images/OurCanvasLogoSplat.jpg";
import "../../css/SignUp.css";

const SignUpForm = () => {
  const firstName = useInput("");
  const lastName = useInput("");
  const email = useInput("");
  const username = useInput("");
  const website = useInput("");
  const profilePic = useInput("");
  const bio = useInput("");
  const favoriteArtist = useInput("");
  const typeOfArt = useInput("");

  const handleSignUpSubmit = e => {
    e.preventDefault();
  };
// Make Inputs required
  return (
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
            First Name : 
            <input type="text" placeholder="Enter Your First Name" {...firstName} required className="textInput signUpFirst" />
          </label>

          <label>
            Last Name : 
            <input type="text" placeholder="Enter Your Last Name" {...lastName} required className="textInput signUpLast" />
          </label>

          <label>
            Email : 
            <input type="text" placeholder="Enter Your Email" {...email} required className="signUpEmail"/>
          </label>

          <label>
            Username : 
            <input type="text" placeholder="Enter Your Username" {...username} required className="textInput signUpUser" />
          </label>
          
          <label>
            Website : (Optional)
            <input type="text" placeholder="Enter Website" {...website} className="textInput signUpWebsite"/>
          </label>

          <label>
            Bio : 
            <input type="text" placeholder="Enter Your Bio" maxlength={50} required {...bio} className="textInput signUpBio"/>
          </label>

          <label>
            Favorite Artist : 
            <input type="text" placeholder="Enter Your Favorite Artist" required className="textInput signUpFavArtist" {...favoriteArtist}/>
          </label>

          <label>
            Genre : 
            <input type="text" placeholder="Enter Genre" {...typeOfArt} required className="textInput signUpGenre"/>
          </label>

          <input type="Submit" value="Sign Up" className="button signUpSubmit"/>
        </form>

        <div className="already">
          <h6>Already have an account?</h6>
          <input type="button" value="Log In" className="button signUpSwitch" />
        </div>
      </div>
  );
};
export default SignUpForm;
