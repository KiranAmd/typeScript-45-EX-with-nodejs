// Define the make_album function
function make_album(artist_name: string, album_title: string,tracks?: number){
let album: {artist: string, title: string, track?: number} = {
    artist: artist_name,
    title: album_title,
};

if (tracks !== undefined){
    album.track = tracks;
}

return album;

}

//Calling three function and creating 3 variables with diffrent values

let album1 = make_album("kiran","Album title 1");

let album2 = make_album("Ahmed", "Album title 2");

//CALLING A make_album function with third parameter
let album3 = make_album("Mahmad","Album title 3", 10);

//Printing values of our object created my function
console.log(album1);
console.log(album2);
console.log(album3);



