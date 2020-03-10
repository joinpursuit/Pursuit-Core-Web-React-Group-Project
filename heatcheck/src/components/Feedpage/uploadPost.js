// import React, { Component } from 'react'
// import axios from 'axios'

// export default class UploadPost extends Component {
//     constructor(props) {
//         super(props);
//             this.state = {
//                 selectedFile: null
//             }
//     }

//     fileSelectHandle = event =>{
//         console.log(event.target.files[0]);
//         this.setState({
//             selectedFile: event.target.files[0]
//         })
//     }

//     fileUploadHandle = async()=>{
//         try {
//             await axios.post('http://localhost:3001/posts',{ID: ID.value, brand: brand.value, description: description.value, year: year.value, colorway: colorway.value})         
//         } catch (error) {
            
//         }

        
//     }
//     render() {
//         return (
//             <>
//             <form action="/profile" method="post" enctype="multipart/form-data">
//                 <input type="file" name="avatar" onChange= {this.fileSelectHandle}/>
//                 <br/>
//                 <input type ="text" placeholder= "tempUserID" required {...ID}/>
//                 <select required  {...brand}>
//                     <option value="none" selected disabled>Brand</option>
//                     <option>Jordan</option>
//                     <option>Nike</option>
//                     <option>Adidas</option>
//                     <option>Converse</option>
//                     <option>Other</option>
//                 </select>
//                 <input type ="text" placeholder= "description" required {...description}/>
//                 <input type ="number" min="1984" max="2020" placeholder= "year" required {...year}/>
//                 <input type ="text" placeholder= "colorway" required {...colorway}/>
//                 <button onClick = {this.fileUploadHandle}>upload</button>
//             </form>
//             </>
//         )
//     }
// }
// import React from 'react'

// export default function uploadPost() {


    
//     return (
//         <div>
            
//         </div>
//     )
// }
