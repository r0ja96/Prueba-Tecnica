
async function getGIF(id){
try{
const response = await fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=T8g9QQkwsLC3nmDwk0R2GR7z7E2DTLc2`);
const data = await response.json();
return data.data;
}catch(err){
console.log(err);
}
}

export default getGIF;