import React , {useState, useEffect} from "react";
import axios from "axios";


const DisplayUserInfo = () => {
    const [user, setUser] = useState([]);

    const fetchData = async (url) => {
        try{
            let res = await axios.get(url);
            debugger
            
        } catch (error) {
            setUser([])
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData("/:id");
    }, [])

    return (
        <section id="displayUser">

        </section>
    )

};

export default DisplayUserInfo;
