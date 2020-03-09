import React, {useEffect} from 'react';
const Home = ({user, error}) => {

  useEffect(() => {
    console.log(user);
  }, [])
  
  return(
    <div>
      Home
      {error ? <p>Error</p> : null}
    </div>
  )
}
 export default Home
