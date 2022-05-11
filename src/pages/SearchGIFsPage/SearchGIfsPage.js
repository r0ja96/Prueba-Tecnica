import DisplayGIFs from "../../components/DisplayGIFs/DisplayGIFs";
import SearchField from "../../components/SearchField/SearchField";
import { Fragment, useState } from "react";

function SearchGIFsPage(){

    const [GIFs,setGIFs] = useState([]);

    return(
    <Fragment>
        <h1>GIFs</h1>
        <SearchField setGIFs={setGIFs}/>
        <DisplayGIFs GIFs={GIFs}/>
    </Fragment>
);

}

export default SearchGIFsPage;