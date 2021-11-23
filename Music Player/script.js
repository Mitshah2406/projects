let audio = document.getElementById('audio');
let play = document.getElementById('play');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let songName = document.getElementById('songName');
let singer = document.getElementById('singer');
let img = document.getElementById('songImg');
let isPlaying = false;

let songs = [{
    name: "Believer",
    title: "believer",
    singer: "imgaine dragons",
},
{
    name: "Firse",
    title: "firse machayenge",
    singer: "emiway bantai",
},
{
    name: "Raatan",
    title: "raatan lambiyaan",
    singer: "b praak",
},
]
const playMusic = () => {
    isPlaying = true;
    audio.play();
    img.classList.add('rotate');
    play.classList.replace('fa-play', 'fa-pause')
};

const pauseMusic = () => {
    isPlaying = false;
    audio.pause();
    img.classList.remove('rotate');
    play.classList.replace('fa-pause', 'fa-play');
}

play.addEventListener('click', () => {
    if (isPlaying) {
        pauseMusic();
    }
    else {
        playMusic();
    }
})

const loadSong = (songs) => {
    songName.textContent = songs.title;
    singer.textContent = songs.artist;
    img.src = `img/${songs.name}.jpg`;
    audio.src = `music/${songs.name}.mp3`;
    playMusic();
}
let songIndex = 0;
const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
}
const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
}
prev.addEventListener('click', prevSong);
next.addEventListener('click', nextSong);








