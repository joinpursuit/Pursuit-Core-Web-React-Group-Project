import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useInput } from "../../util/customHooks";

export default function UploadPost() {
    const userId = useInput("")
    const brand = useInput("")
    const description = useInput("")
    const year = useInput("")
    const colorway = useInput("")
    const image = useInput("")
    const [pic, setPic] = useState("")
    // const [loading, setLoading] = useState(false) 


    const handleSubmit=async(e)=> {
        e.preventDefault();
        try{
            await axios.post('http://localhost:3001/posts',{user_id: userId.value, image: image.value, brand: brand.value, description: description.value, release_date: year.value, colorway: colorway.value})         
        }catch(error){
            console.log(error);
        }
    }


    const fileSelectHandle = (event) =>{
        const pic = event.target.files[0]
        // console.log(event.target.files[0]);
        const formData = new FormData(); 
        formData.append('upload_preset','heatcheck');
        formData.append('file', pic);

        axios.post('https://api.cloudinary.com/v1_1/perezsyn/image/upload',formData)
        .then(res => setPic(res.data.secure_url))
 
                // try {
                //     axios.post("https://api.cloudinary.com/v1_1/perezsyn/image/upload",formData)
                //     .then(res => setPic(res.data.secure_url))
                // } catch (error) { 
                //    console.log(error);
                    
                // }
        // setPic (event.target.files[0]);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="file"onChange= {fileSelectHandle} required {...image} />
                <br/>
                <input type ="text" placeholder= "tempUserID" required {...userId}/>
                <select  required  {...brand}>
                    <option value={""} disabled>Brand</option>
                    <option value={"Jordan"}>Jordan</option>
                    <option value={"Nike"}>Nike</option>
                    <option value={"Adidas"}>Adidas</option>
                    <option value={"Converse"}>Converse</option>
                    <option value={"Other"}>Other</option>
                </select>
                <input type ="text" placeholder= "description" required {...description}/>
                <input type ="number" min="1984" max="2020" placeholder= "year" required {...year}/>
                <input type ="text" placeholder= "colorway" required {...colorway}/>
                {/* <button onClick = {fileUploadHandle} required >upload</button> */}
                <input type ="submit"/>
            </form>
            </>
    )
}
