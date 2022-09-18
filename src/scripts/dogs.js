// function to perform a get request
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

// function not used anymore
export function getBreedImage(breed)
{
    // get the json from the server
    var imageJson = httpGet('https://dog.ceo/api/breed/'+breed+'/images/random');
    console.log(imageJson);

    // decode the json into an array
    var array = JSON.parse(imageJson);
    console.log(array);

    // get the image url from the array
    return array.message;
}

export function getBreedList(){
    var breedsJson = httpGet('https://dog.ceo/api/breeds/list/all');
    console.log(breedsJson);
    var list = JSON.parse(breedsJson).message
    console.log(list);
    return list;

}



