import { useParams } from "react-router-dom";
import { useEffect, useState, Fragment } from "react";
import getGIF from "../../api/getGIF";
import { Link } from "react-router-dom";
import "./ShowGifPage.css";

function ShowGifPage(){
     const {id} = useParams();
     const [GIF,setGIF] = useState({}); 
     
     useEffect(()=>{
        async function fetchData(){
        const response = await getGIF(id);
         setGIF({
             title:response.title,
             url:response.images.original.url
         });
        }
        fetchData();
     },[]);


    return(<div className="showGIF">
    <h1>{GIF.title}</h1>
    <Link to={"/"}><h3>Back to search</h3></Link>
    <div className="centerImage">
    <img src={GIF.url}/> 
    </div>
    </div>
    );
}

export default ShowGifPage;