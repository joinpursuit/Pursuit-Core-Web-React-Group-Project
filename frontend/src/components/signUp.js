import React, {useState} from "react";

const SignUpForm = () => {
  const[email, setEmail] = useState("")
  const[typeOfArt, setTypeOfArt] = useState("")
  const[bio, setBio] = useState("")
  const[favoriteArtiste, setFavoriteArtiste] = useState("")
  
  const handleSigUpSubmit =(e) => {
    e.preventDefault();
  }
  console.log(email)
  console.log(bio)
  console.log(typeOfArt)
  console.log(favoriteArtiste)
  
 
  return(
    <form onSubmit={handleSigUpSubmit}>
      <label>
        email :
        <input
        onChange={(e)=> setEmail(e.target.value)}
        type="text"
        placeholder="Enter Your Email"
        value={email}
        />

        <input
        onChange={(e)=> setTypeOfArt(e.target.value)}
        type="text"
        placeholder="Enter Type Of Art"
        value={typeOfArt}
        />

        <input
        onChange={(e)=> setBio(e.target.value)}
        type="text"
        placeholder="Enter Your Bio"
        value={bio}
        />

        <input
        onChange={(e)=> setFavoriteArtiste(e.target.value)}
        type="text"
        placeholder="Enter Your Favorite Artiste"
        value={favoriteArtiste}
        />

        <input
        type="Submit"
        value="Sign Up"
        />

        <input
        type="Submit"
        value="Log In"
        />

      </label>
    </form>
  )
}
export default SignUpForm