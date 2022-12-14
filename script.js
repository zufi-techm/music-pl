window.onload= function (){

var music= document.querySelector('.audio');
var music_duration= document.querySelector('.meantime');
var current_time= document.querySelector('.prevtime'); 
var disk= document.querySelector('.disk');
var prev= document.querySelector('.prev');
var next= document.querySelector('.next');
var pause_icon= document.querySelector('.pause_icon');
var pause= document.querySelector('.pause');
var songname= document.querySelector('.trackname');
var range= document.querySelector('.range');
const marquee= document.querySelector('.marquee')
var image=  document.querySelector('.image');
pause.onclick= function (e){
disk.classList.toggle('rotating');
pause_icon.classList.toggle('play_icon');
songname.classList.toggle('trackname_paused');
if(pause_icon.className.includes('play_icon')){
    music.pause();
}else{
    music.play();
}
}
var i=2;
async function setMusic(musicindex){
music.src= songs[musicindex].path;
image.src= songs[musicindex].src;
songname.innerHTML= songs[musicindex].name;
console.log(songs[musicindex]);
}

setMusic(i);

prev.onclick= function bck(){
    if(i>0){
    i--;
    }else{
    i=songs.length;
    }
    setMusic(i).then(()=>{
        setTimeout(()=>{
            music_duration.innerHTML= Format_time(music.duration);
         },500);
    });
}
next.addEventListener('click',function ntx(){
    if(i<=songs.length-1){
        i++;
    }
    else{
        i=0;
    }
    setMusic(i).then(()=>{
        setTimeout(()=>{
            music_duration.innerHTML= Format_time(music.duration);
         },500);
    });
});



music.addEventListener('ended',()=>{
    next.click();
});

function Format_time(time){
var minute=Math.floor(time/60);
var second=Math.floor( time%60);
if(minute<10){
    minute= `0${minute}`;
}

if(second<10){
    second=`0${second}`;
}



   time= `${minute}:${second}`;
   return time;
}




}