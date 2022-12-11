console.log("welcome to spotify");
//Initialize the variable
let songIndex = 0;

let timeStart = 0;

let masterIndex = songIndex;

let audioElement = new Audio("songs/1.mp3");

let masterPlay = document.getElementById("masterPlay");

let myProgressBar = document.getElementById("myProgressBar");

let songItem = Array.from(document.getElementsByClassName("songItem"));

// changes made
console.log(masterIndex);
let songs = [
  {
    songName: "Warriyo - Mortals",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  { songName: "Cielo", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
  { songName: "DEAF KEV", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
  {
    songName: "Different heaven & EMIDE",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Janji heroes tonight",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "Safety Dance",
    filePath: "songs/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "Back it up",
    filePath: "songs/7.mp3",
    coverPath: "covers/7.jpg",
  },
  { songName: "Zinda", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
  { songName: "Zinda", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
  {
    songName: "True Love",
    filePath: "songs/10.mp3",
    coverPath: "covers/10.jpg",
  },
];
console.log(songs.length);
songItem.forEach((element, i) => {
  console.log(element, i);
  //setting our cover src
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;

  //setting our song name
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

  // console.log(element.getElementsByClassName("songName"));
});

//making our master play functional to change from pause to play and vice versa

masterPlay.addEventListener("click", (e) => {
  var selector2 = document.getElementsByClassName("songItemPlay");

  let tempsrc1 = audioElement.src;
  var j = 0;

  for (var i = 0; i < songs.length; ++i) {
    if (tempsrc1.includes(songs[i].filePath)) {
      j = i;
      break;
    }
  }
  console.log(j);

  var playButton = document.getElementsByClassName("songItemPlay");

  document.getElementById("logo").src = songs[j].coverPath;

  console.log(songs[j].coverPath);
  console.log(document.getElementById("logo").src);

  // console.log(songItemPlay[tempindex]);
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();

    masterPlay.classList.remove("fa-play");

    masterPlay.classList.add("fa-pause");

    playButton[j].classList.remove("fa-play");

    playButton[j].classList.add("fa-pause");
  } else if (!audioElement.paused) {
    audioElement.pause();

    masterPlay.classList.remove("fa-pause");

    masterPlay.classList.add("fa-play");

    playButton[j].classList.remove("fa-pause");

    playButton[j].classList.add("fa-play");
  }
});
//setting our progress bar

audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});
var timeStamp = document.getElementsByClassName("timeStamp");

for (var i = 0, len = timeStamp.length; i < len; ++i) {
  timeStamp[i].innerText = "00" + ":" + "00";
}
//for toggling between play and pause
var pause = true;

//selecting our songs
var songItemPlay = document.getElementsByClassName("songItemPlay");

for (var j = 0, len = songItemPlay.length; j < len; ++j) {
  songItemPlay[j].addEventListener("click", (e) => {
    let tempsrc1 = audioElement.src;
    var j = 0;

    for (var i = 0; i < songs.length; ++i) {
      if (tempsrc1.includes(songs[i].filePath)) {
        j = i;
        break;
      }
    }
    console.log(j);

    var playButton = document.getElementsByClassName("songItemPlay");

    if (pause) {
      //changing our play to pause and pause to play
      let songIndex = parseInt(e.target.id);

      masterPlay.classList.remove("fa-play");

      masterPlay.classList.add("fa-pause");

      e.target.classList.remove("fa-play");

      e.target.classList.add("fa-pause");

      //    timeStamp.innerText = audioElement.currentTime;

      audioElement.src = songs[songIndex].filePath;

      let tempsrc = audioElement.src;

      console.log(audioElement.src);

      audioElement.play();

      //      var sec = console.log(Math.floor(audioElement.currentTime % 60));
      //      var min = console.log(Math.floor(audioElement.currentTime / 60));

      pause = false;
    } else {
      let index = parseInt(e.target.id);

      e.target.classList.remove("fa-pause");

      e.target.classList.add("fa-play");

      masterPlay.classList.remove("fa-pause");

      masterPlay.classList.add("fa-play");

      startTime = audioElement.currentTime;

      audioElement.pause();

      pause = true;
    }

    var currentChange = audioElement.currentTime;
    var totaltime = audioElement.duration;
  });
}

document.getElementById("forward").addEventListener("click", (e) => {
  var selector = document.getElementsByClassName("songItemPlay");

  //tempindex for changing storing previous index value
  var tempindex = songIndex;
  console.log(tempindex + "main temp index hoon");
  if (songIndex > 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  console.log(songIndex + "main song index hoon");
  //setting our audio file to play our audio file
  audioElement.src = songs[songIndex].filePath;

  audioElement.currentTime = 0;

  audioElement.play();

  masterPlay.classList.remove("fa-play");

  masterPlay.classList.add("fa-pause");

  pauseForward = true;

  if (pauseForward) {
    selector[tempindex].classList.remove("fa-pause");

    selector[tempindex].classList.add("fa-play");

    selector[songIndex].classList.remove("fa-play");

    selector[songIndex].classList.add("fa-pause");
  }
  let tempsrc1 = audioElement.src;
  var j = 0;

  for (var i = 0; i < songs.length; ++i) {
    if (tempsrc1.includes(songs[i].filePath)) {
      j = i;
      break;
    }
  }
  console.log(j);
  document.getElementById("logo").src = songs[j].coverPath;

  console.log(songs[j].coverPath);
  console.log(document.getElementById("logo").src);
});
document.getElementById("backward").addEventListener("click", (e) => {
  //storing value for previos index
  var tempIndex1 = songIndex;
  console.log(tempIndex1 + "main temp index hoon");
  console.log();
  if (songIndex < 0) {
    songIndex = 9;
  } else {
    songIndex -= 1;
  }

  var selector1 = document.getElementsByClassName("songItemPlay");

  pauseBackward = true;

  if (pauseBackward) {
    selector1[tempIndex1].classList.remove("fa-pause");

    selector1[tempIndex1].classList.add("fa-play");

    selector1[songIndex].classList.remove("fa-play");

    selector1[songIndex].classList.add("fa-pause");
  }
  console.log(songIndex + "main song index hoon");
  audioElement.src = songs[songIndex].filePath;

  audioElement.currentTime = 0;

  audioElement.play();

  let tempsrc1 = audioElement.src;
  var j = 0;

  for (var i = 0; i < songs.length; ++i) {
    if (tempsrc1.includes(songs[i].filePath)) {
      j = i;
      break;
    }
  }
  console.log(j);
  document.getElementById("logo").src = songs[j].coverPath;

  console.log(songs[j].coverPath);
  console.log(document.getElementById("logo").src);
});

audioElement.addEventListener("ended", () => {
  console.log(songIndex);
  let tempsrc2 = audioElement.src;
  var k = 0;

  for (var i = 0; i < songs.length; ++i) {
    if (tempsrc2.includes(songs[i].filePath)) {
      k = i;
      break;
    }
  }
  if (songIndex === 9) {
    songIndex = 0;
  } else {
    ++songIndex;
    audioElement.src = songs[songIndex].filePath;
    console.log(songIndex);
    audioElement.play();
  }

  var autoSelector = document.getElementsByClassName("songItemPlay");
  autoSelector[k].classList.remove("fa-pause");
  autoSelector[k].classList.add("fa-play");
  autoSelector[k + 1].classList.remove("fa-play");
  autoSelector[k + 1].classList.add("fa-pause");
  var timeStamp2 = document.getElementsByClassName("timeStamp");
  timeStamp2[k].innerText = "00" + ":" + "00";
});

audioElement.addEventListener("timeupdate", () => {
  let tempsrc2 = audioElement.src;
  var k = 0;

  for (var i = 0; i < songs.length; ++i) {
    if (tempsrc2.includes(songs[i].filePath)) {
      k = i;
      songIndex = k;
      break;
    }
  }
  console.log(k);
  var duration = audioElement.currentTime;
  var sec = new Number();
  var min = new Number();
  sec = Math.floor(duration);
  min = Math.floor(sec / 60);
  min = min >= 10 ? min : "0" + min;
  sec = Math.floor(sec % 60);
  sec = sec >= 10 ? sec : "0" + sec;
  console.log(min + ":" + sec);
  var timeStamp2 = document.getElementsByClassName("timeStamp");
  timeStamp2[k].innerText = min + ":" + sec;
});
var songItemPlay = document.getElementsByClassName("songItemPlay");

for (var j = 0, len = songItemPlay.length; j < len; ++j) {
  songItemPlay[j].addEventListener("click", (e) => {
    let tempsrc1 = audioElement.src;
    var j = 0;

    for (var i = 0; i < songs.length; ++i) {
      if (tempsrc1.includes(songs[i].filePath)) {
        j = i;
        break;
      }
    }
    console.log(j);
    document.getElementById("logo").src = songs[j].coverPath;

    console.log(songs[j].coverPath);
    console.log(document.getElementById("logo").src);
  });
}
audioElement.addEventListener("ended", () => {
  let tempsrc1 = audioElement.src;
  var j = 0;

  for (var i = 0; i < songs.length; ++i) {
    if (tempsrc1.includes(songs[i].filePath)) {
      j = i;
      break;
    }
  }
  console.log(j);
  document.getElementById("logo").src = songs[j].coverPath;
  //  timeStamp[j - 1].innerText = "00" + ":" + "00";
  console.log(songs[j].coverPath);
  console.log(document.getElementById("logo").src);
});
