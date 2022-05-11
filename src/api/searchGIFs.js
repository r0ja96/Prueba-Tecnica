
async function searchGIFs(search){
            
try{
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=T8g9QQkwsLC3nmDwk0R2GR7z7E2DTLc2&q=${search}`);
    const data = await response.json();
    return data.data;
}catch(err){
    return [];
}
}

export default searchGIFs;