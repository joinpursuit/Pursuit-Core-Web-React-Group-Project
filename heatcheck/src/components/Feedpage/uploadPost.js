import React, { Component } from 'react'
import axios from 'axios'

export default class UploadPost extends Component {
    state ={
        selectedFile : null
    }
    fileSelectHandle = event =>{
        console.log(event.target.files[0]);
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandle = ()=>{
        axios.post('')
    }
    render() {
        return (
            <>
            <form action="/profile" method="post" enctype="multipart/form-data">
                <input type="file" name="avatar" onChange= {this.fileSelectHandle}/>
                <br/>
                <select required>
                    <option value="none" selected disabled>Brand</option>
                    <option>Jordan</option>
                    <option>Nike</option>
                    <option>Adidas</option>
                    <option>Converse</option>
                    <option>Other</option>
                </select>
                <input type ="text" placeholder= "description" required/>
                <input type ="number" min="1984" max="2020" placeholder= "year" required/>
                <input type ="text" placeholder= "colorway" required/>
                <button onClick = {this.fileUploadHandle}>upload</button>
            </form>
            </>
        )
    }
}
