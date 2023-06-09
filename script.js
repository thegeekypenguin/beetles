console.log("Welcome to Podify!")
// Initialize the variable
let songIndex= 0;
let audioElement= new Audio('songs/1_a_thousand_years.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document,getElementsByClassName('songItem'));



let songs = [
    {songName: "a_thousand_years", filePath: "songs/1_a_thousand_years.mp3", coverPath:"covers/1.jpg"},
    {songName: "man_on_the_moon", filePath: "songs/2_man_on_the_moon.mp3", coverPath:"covers/2.jpg"},
    {songName: "world_we_used_to_know", filePath: "songs/3_world_we_used_to_know.mp3", coverPath:"covers/3.jpg"},
    {songName: "space_melody", filePath: "songs/4_space_melody.mp3", coverPath:"covers/4.jpg"},
    {songName: "catch_me_if_you_can", filePath: "songs/5_catch_me_if_you_can.mp3", coverPath:"covers/5.jpg"}
]
 
songItems.forEach((element, i)=> {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();



        // jab ganna chal gya, uske baad
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity= 1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity= 0;
    }
});
// Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    // update the seekbar
      progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
      myProgressBar.value= progress;
})

 myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime= myProgressBar.value * audioElement.duration/100;
 })

