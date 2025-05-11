console.log("lovely song");

let songIndex = 0;
let audioElement = new Audio("../song/1.mp3");
let masterplay = document.getElementById("masterPlay");
let progressbar = document.getElementById("progressbar");
let gif = document.getElementById("gif");
let songitem = Array.from(document.getElementsByClassName("songitem"));
let sharp = Array.from(document.getElementsByClassName("fa_sharp"));
let next = document.getElementById("next");
let previous = document.getElementById("previous");
let sname = document.getElementById("sname");

let songs = [
  {
    SongName: "Nain ta Here",
    // filePath: "../song/Nain_Ta_here.mp3",
    filePath: "../song/1.mp3",
    coverPath: "img/thora thora.jpg",
  },
  {
    SongName: "dil",
    // filePath: "../song/Dil.mp3",
    filePath: "../song/2.mp3",
    coverPath: "img/Dil.jpg",
  },
  {
    SongName: "AAshiqui aa gayi",
    // filePath: "../song/Aashiqui.mp3",
    filePath: "../song/3.mp3",
    coverPath: "img/aashiqui.jpg",
  },
  {
    SongName: "thora thora pyar",
    // filePath: "../song/thora.mp3",
    filePath: "../song/4.mp3",
    coverPath: "img/thora thora.jpg",
  },
  {
    SongName: "tera fitur",
    // filePath: "../song/Tera_Fitur.mp3",
    filePath: "../song/5.mp3",
    coverPath: "img/tera fitur.jpg",
  },
  {
    SongName: "Barish me tum",
    // filePath: "../song/Baarish.mp3",
    filePath: "../song/6.mp3",
    coverPath: "img/barish me tm.jpg",
  },
  {
    SongName: "tumhe kitna chahein",
    // filePath: "../song/tumhe_kitna.mp3",
    filePath: "../song/7mp3",
    coverPath: "img/tumhe kitna.jpg",
  },
  {
    SongName: "dua kro",
    // filePath: "../song/Dua.mp3",
    filePath: "../song/8.mp3",
    coverPath: "img/dua kro.jpg",
  },
  {
    SongName: "chor diya",
    // filePath: "../song/thora.mp3",
    filePath: "../song/9.mp3",
    coverPath: "img/dua kro.jpg",
  },
  {
    SongName: "ik varri aa",
    // filePath: "../song/ik_vari.mp3",
    filePath: "../song/10.mp3",
    coverPath: "img/ik varri.jpg",
  },
];

// songitem.forEach((element, i) => {
//   console.log(element, i);
//   element.getElementsByTageName("img")[0].src = songs[i].coverPath;
//   element.getElementsByClassName("headline")[0].innerText = songs[i].SongName;
// });

masterplay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterplay.classList.remove("fa-pause-circle");
    masterplay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  progressbar.value = progress;
});

progressbar.addEventListener("change", () => {
  audioElement.currentTime = (progressbar.value * audioElement.duration) / 100;
});

const makeAllplay = () => {
  sharp.forEach((element) => {
    element.classList.remove("fa-pause-circle");
    element.classList.add("fa-play-circle");
  });
};

sharp.forEach((element) => {
  element.addEventListener("click", (e) => {
    makeAllplay();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove("fa-play-circle");
    e.target.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
    audioElement.src = `../song/${songIndex}.mp3`;
    sname.innerText = songs[songIndex - 1].SongName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
  });
});

next.addEventListener("click", () => {
  if (songIndex >= 10) {
    songIndex = 1;
  } else {
    songIndex += 1;
  }
  audioElement.src = `../song/${songIndex}.mp3`;
  sname.innerText = songs[songIndex - 1].SongName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterplay.classList.remove("fa-play-circle");
  masterplay.classList.add("fa-pause-circle");
});

previous.addEventListener("click", () => {
  if (songIndex <= 1) {
    songIndex = 1;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `../song/${songIndex}.mp3`;
  sname.innerText = songs[songIndex - 1].SongName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterplay.classList.remove("fa-play-circle");
  masterplay.classList.add("fa-pause-circle");
});
