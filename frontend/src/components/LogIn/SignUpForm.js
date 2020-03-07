import React, { useState } from "react";
import { useInput } from "../../util/customHooks";

const SignUpForm = () => {
  const email = useInput("");
  const typeOfArt = useInput("");
  const bio = useInput("");
  const favoriteArtiste = useInput("");

  const handleSigUpSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSigUpSubmit}>
        <label>
          Email :
          <input type="text" placeholder="Enter Your Email" {...email} />
        </label>
        <label>
          Genre :
          <input type="text" placeholder="Enter Genre" {...typeOfArt} />
        </label>
        <label>
          Bio :
          <input type="text" placeholder="Enter Your Bio" {...bio} />
        </label>
        <label>
          Favorite Artist :
          <input
            type="text"
            placeholder="Enter Your Favorite Artist"
            {...favoriteArtiste}
          />
        </label>

        <input type="Submit" value="Sign Up" />
      </form>
      <input type="button" value="Log In" />
    </div>
  );
};
export default SignUpForm;
