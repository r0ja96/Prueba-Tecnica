import { Link } from "react-router-dom";
import "./DisplayGIFs.css";

function DisplayGIFs({GIFs}){

    const allGIFS = GIFs.map(g =>{
        return(<div key={g.id} className="cardGIF">
            <div>
            <img src={g.images.original.url}/>
            </div>
            <div>
             <Link to= {`/${g.id}`} ><h3>{g.title}</h3></Link> 
            </div>
            </div>);
    });

return(<div id="displayCards">
    {allGIFS}
</div>);
}

export default DisplayGIFs;