
let songIndex = 0;
let audioElement = new Audio('../Songs/1.mp3');
let Play = document.getElementById('Play');
let Previous = document.getElementById('Previous');
let Next = document.getElementById('Next');
let gif = document.getElementById('gif');
let Slider=document.getElementById('slider');
let songItem=Array.from(document.getElementsByClassName('songItem'));
let timeStamp=Array.from(document.getElementsByClassName('timeStamp'));



let songs = [
    {songName: "Namo Namo - Amit Trivedi", songPath: "../Songs/1.mp3", songCoverPath: "../Covers/Kedarnath.jpg" }, 
    {songName: "Ik Vaari Aa - Arijit Singh", songPath: "../Songs/2.mp3", songCoverPath: "../Covers/ik.jpg"}, 
    {songName: "Rockabye - Sean Paul", songPath: "../Songs/3.mp3", songCoverPath: "../Covers/rockabye.jpg"}, 
    {songName: "Excuses - Ap Dhillon", songPath: "../Songs/4.mp3", songCoverPath: "../Covers/excuses.jpg"}, 
    {songName: "Stay - Justin Bieber", songPath: "../Songs/5.mp3", songCoverPath: "../Covers/stay.jpg"}, 
    
]

songItem.forEach((element,i)=>{
      element.getElementsByTagName("img")[0].src=songs[i].songCoverPath;
      element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
      
})



Play.addEventListener('click', ()=>
{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        Play.classList.remove('fa-play-circle');
        Play.classList.add('fa-pause-circle');
        gif.style.opacity=1;


    }
    else
    {
        audioElement.pause();
        Play.classList.remove('fa-pause-circle');
        Play.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate', ()=>
{
     progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
     Slider.value=progress;   

})

Slider.addEventListener('change', ()=>
{
    audioElement.currentTime=((Slider.value*audioElement.duration)/100);
    if(audioElement.currentTime==audioElement.duration)
    {
        ()=>{
            if(songIndex>=4)
            {
                songIndex=0;
            }
            else{
                songIndex+=1;
            }
            audioElement.src=`../Songs/${songIndex+1}.mp3`;
            document.getElementById("songBanner").innerText=songs[songIndex].songName;
            audioElement.currentTime=0;
            audioElement.play();
            gif.opacity=1;
            
        }
    }
})

const AllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        AllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`../Songs/${songIndex+1}.mp3`;
        document.getElementById("songBanner").innerText=songs[songIndex].songName;
        timeStamp.innerText=audioElement.duration;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        Play.classList.remove('fa-play-circle');
        Play.classList.add('fa-pause-circle');
        
    })
})



Next.addEventListener('click',()=>{
    if(songIndex>=4)
    {
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`../Songs/${songIndex+1}.mp3`;
    document.getElementById("songBanner").innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.opacity=1;
    Play.classList.remove('fa-play-circle');
    Play.classList.add('fa-pause-circle');
})

Previous.addEventListener('click',()=>{
    if(songIndex<=0)
    {
        songIndex=0;
    }
    else
    {
        songIndex-=1;
    }
    audioElement.src=`../Songs/${songIndex+1}.mp3`;
    document.getElementById("songBanner").innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.opacity=1;
    Play.classList.remove('fa-play-circle');
    Play.classList.add('fa-pause-circle');

})




