console.log("Welcome to Podify!")
// Initialize the variable
let songIndex= 0;
let audioElement= new Audio('a_thousand_years.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');




let songs = [
    {songName: "Jashn-e-Bahara", filePath: "song/1.mp3", coverPath:"covers/1.jpeg"},
    {songName: "Jashn-e-Bahara", filePath: "song/1.mp3", coverPath:"covers/1.jpeg"},
    {songName: "Jashn-e-Bahara", filePath: "song/1.mp3", coverPath:"covers/1.jpeg"},
    {songName: "Jashn-e-Bahara", filePath: "song/1.mp3", coverPath:"covers/1.jpeg"},
    {songName: "Jashn-e-Bahara", filePath: "song/1.mp3", coverPath:"covers/1.jpeg"}
]
 

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
