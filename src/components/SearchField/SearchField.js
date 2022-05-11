import searchGIFs from "../../api/searchGIFs";
import "./SearchField.css";

function SearchField({setGIFs}){

    return(<form id='searchField'>
        <input type={'text'} placeholder="Search for GIFs" onChange={async e => setGIFs(await searchGIFs(e.target.value))}/>
    </form>);

}

export default SearchField;