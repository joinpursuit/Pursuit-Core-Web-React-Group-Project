import React, {useEffect} from 'react';
import '../../css/Home.css';
import UserInfo from '../Profile/UserInfo';
import UserPosts from '../Profile/UserPosts';


const Home = ({user, error}) => {

  useEffect(() => {
    console.log(user);
  }, [])
  
  user = {
    full_name: "Isaiah Collazo",
    username: "theycallme_zay",
    bio: "Aspiring game designer, and film editor",
    favorite_artist: "Damien Chazelle",
    art_type: "Game Design"
  }

  const posts = [
    {
      poster: user.username,
      picture: "https://media.nationalgeographic.org/assets/photos/380/216/1c9ab248-0c9c-413d-b0c8-ce8aec56b821.jpg",
      caption: "The ocean is blue",
      tags: [{tag: "Ocean"}, {tag: "Water"}]
    },
    {
      poster: user.username,
      picture: "https://media.nationalgeographic.org/assets/photos/380/216/1c9ab248-0c9c-413d-b0c8-ce8aec56b821.jpg",
      caption: "The ocean is green",
      tags: [{tag: "Ocean"}, {tag: "Water"}, {tag: "Green"}]
    }
  ]


  return(
    <div className="homeContainer">
      <UserPosts posts={posts} home={true}/>
      {error ? <p>Error</p> : null}
    </div>
  )
}
 export default Home
