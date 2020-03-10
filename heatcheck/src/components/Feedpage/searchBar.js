import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const  UserInfo =()=> {
        let [user,setUser] = useState([])
        
    
        useEffect(()=>{
            const getUserInfo = async(url)=>{
                try {
                    let res= await axios.get(url)
                    // debugger
                    setUser(res.data.payload)
                } catch (error) {
                    setUser([])
                }
            }
            getUserInfo(`http://localhost:3005/users/${sessionStorage.loginedUser}`)
    
        }, [])
        
        const handleStyle ={
         heigh:"100px",
         width:"50px"
        }
    
        const displayUser = () =>{
            return <div className="loggedUser" style={handleStyle}><h2>{user.username}</h2><h5>{user.email}</h5><img src={user.profilepic}></img></div> 
        }
            return (
                <div>
                {displayUser()}
                </div>
            )
        }

    useEffect(()=>{
        const fetchData = async (url) =>{
            try{
                let res = await axios.get(url);
                setPosts(res.data.payload)
            }catch(error){
                setPosts([])
            }
        }
        fetchData('http://localhost:3000/posts');
    }, [])


    const postsDisplay = posts.map(post =>{
        // console.log(post)
    return <PostImage key={post.id} userName={post.username} profilePic={post.profilepic} filePath={post.imageurl} />
    })
        
return(
            <div>
                <form className="form">
                    <input placeholder="Search"></input>
                </form>
                    
                
            <div className="userInfo split">
                <UserInfo/>
                {/* <ul id="hashtags"></ul> */}
            </div>
            <div className="feed split">
                <div>{postsDisplay}</div>
            </div>
        </div>
        )
