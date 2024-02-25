/* ------------------------------------------------------------------------------------------
  <div class="card" onclick="openplaylist(this)">
    and
    <div class="card" onclick="openplaylist(event)">
    are 2 different things
    ------------------------------------------------------------------------------------------*/
function formatTime(seconds) {
  var minutes = Math.floor(seconds / 60);
  var remainingSeconds = Math.floor(seconds % 60);

  // Add leading zero if needed
  var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  var formattedSeconds =
    remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

  return formattedMinutes + ":" + formattedSeconds;
}
// Playing song
let playname;
let isvisible;
let currentplaylist = null;
let audio = new Audio();
let isoriginal = true;
let animationinterval;
let songname;
let names;
let trackname = "";
let audioname = [];
let currentTrackIndex = 0;
// Opening Playlist

function findplaylist(element) {
  let playlisttag = element.getElementsByTagName("h2")[0];
  let playlistname = playlisttag.innerText;
  openplaylist(playlistname);
}

function openplaylist(name) {
  const symbol = document.querySelector(".symbol");
  const expand = symbol.querySelector("img");
  let libraryheight = document.querySelector(".library");
  if (currentplaylist) {
    currentplaylist.style.display = "none";
  }
  switch (name) {
    case "South Beats":
      audioname.length = 0;
      playname = document.querySelector(".songs1");
      names = document.querySelector(".songs1").querySelectorAll(".name");
      names.forEach((nameElement) => {
        audioname.push(nameElement.innerText);
      });
      break;
    case "Bhakti Songs":
      audioname.length = 0;
      playname = document.querySelector(".songs2");
      names = document.querySelector(".songs2").querySelectorAll(".name");
      names.forEach((nameElement) => {
        audioname.push(nameElement.innerText);
      });
      break;
  }
  isvisible = playname.style.display === "block";
  playname.style.display = isvisible ? "none" : "block";
  currentplaylist = isvisible ? null : playname;
  if (!isvisible) {
    libraryheight.style.height = "72vh";
    expand.src = "symbol.svg";
  } else {
    libraryheight.style.height = "7vh";
    expand.src = "subtract.svg";
  }
}

function playsong(element) {
  let name = element.getElementsByTagName("div")[0].innerText;
  trackname = name;
  let index = audioname.indexOf(trackname);
  currentTrackIndex = index !== -1 ? index : 0;
  playmusic(name);
}
function playmusic(name) {
  songname = document.querySelector(".songname");
  songname.innerHTML = name;
  audio.pause();
  let button = document.getElementById("play");
  button.src = "pause.svg";
  switch (name) {
    case "Badass Leo":
      audio.src = "songs/South Beats/Badass Leo 320 Kbps.mp3";
      break;
    case "Lokiverse 2 Leo":
      audio.src = "songs/South Beats/Lokiverse 2 Leo Hindi 320 Kbps.mp3";
      break;
    case "Naa Ready Leo":
      audio.src = "songs/South Beats/Naa Ready Leo 320 Kbps.mp3";
      break;
    case "Once Upon A Time Vikram":
      audio.src = "songs/South Beats/Once Upon A Time Vikram 320 Kbps.mp3";
      break;
    case "Pathala Pathala Vikram":
      audio.src = "songs/South Beats/Pathala Pathala Vikram 320 Kbps.mp3";
      break;
    case "Porkanda Singam Edm Ver Vikram":
      audio.src =
        "songs/South Beats/Porkanda Singam Edm Ver Vikram Tamil 2021 320 Kbps.mp3";
      break;
    case "Porkanda Singam Vikram":
      audio.src = "songs/South Beats/Porkanda Singam Vikram 320 Kbps.mp3";
      break;
    case "Ratata Leo":
      audio.src = "songs/South Beats/Ratata Leo 320 Kbps.mp3";
      break;
    case "Vikram (title Teaser Theme)":
      audio.src =
        "songs/South Beats/Vikram (title Teaser Theme) Kamal Haasan 320 Kbps.mp3";
      break;
    case "Vikram Title Track":
      audio.src =
        "songs/South Beats/Vikram Title Track Anirudh Ravichander 320 Kbps.mp3";
      break;
    case "Villain Yaaru Leo":
      audio.src = "songs/South Beats/Villain Yaaru Leo 320 Kbps.mp3";
      break;
    case "Wasted Vikram":
      audio.src = "songs/South Beats/Wasted Vikram 320 Kbps.mp3";
      break;
    case "Ram Siya Ram Adipurush":
      audio.src = "songs/Bhakti Songs/Ram Siya Ram Adipurush 320 Kbps.mp3";
      break;
    case "Ram Siya Ram Lofi":
      audio.src = "songs/Bhakti Songs/Ram Siya Ram Lofi.mp3";
      break;
    case "Shri Hari Stotram Lofi":
      audio.src = "songs/Bhakti Songs/Shri Hari Stotram Lofi.mp3";
      break;
  }
  audio.load();
  audio.play();

  let checkEndedInterval = setInterval(function () {
    if (audio.ended) {
      clearInterval(checkEndedInterval); // Stop checking
      // Increment the track index and play the next track
      currentTrackIndex = (currentTrackIndex + 1) % audioname.length;
      playmusic(audioname[currentTrackIndex]);
    }
  }, 1000);
  const originalcontent = songname.innerHTML;
  const animationspeed = 300;
  startanimation(originalcontent, animationspeed);
}

// Animation on Circle

audio.addEventListener("loadedmetadata", () => {
  let totalduration = formatTime(audio.duration);
  audio.addEventListener("timeupdate", () => {
    let currenttime = formatTime(audio.currentTime);
    document.querySelector(
      ".songduration"
    ).innerHTML = `${currenttime}/${totalduration}`;
    let time = (audio.currentTime / audio.duration) * 100;
    document.querySelector(".circle").style.left = time + "%";
  });
});

// Expand Library
function changesymbol() {
  const symbol = document.querySelector(".symbol");
  const expand = symbol.querySelector("img");
  let libraryheight = document.querySelector(".library");
  if (isoriginal) {
    expand.src = "symbol.svg";
    libraryheight.style.height = "72vh";
    if (currentplaylist) {
      currentplaylist.style.display = "block";
    }
  } else {
    expand.src = "subtract.svg";
    libraryheight.style.height = "7vh";
    if (currentplaylist) {
      currentplaylist.style.display = "none";
    }
  }
  isoriginal = !isoriginal;
}

// Animation of songname

function startanimation(originalcontent, animationspeed) {
  clearInterval(animationinterval);
  let sname = document.querySelector(".songname");
  let i = 0;
  animationinterval = setInterval(() => {
    sname.textContent =
      originalcontent.substring(i) + " " + originalcontent.substring(0, i);
    i = (i + 1) % originalcontent.length;
  }, animationspeed);
}

// Change button play and pause

function changebutton() {
  let button = document.getElementById("play");
  if (audio.paused) {
    audio.play();
    button.src = "pause.svg";
  } else {
    audio.pause();
    button.src = "play.svg";
  }
}

// Add event listener to the seekbar

document.querySelector(".seekbar").addEventListener("click", (e) => {
  let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
  document.querySelector(".circle").style.left = percent + "%";
  audio.currentTime = (audio.duration * percent) / 100;
});

// Next and Previous Song

function playNext() {
  currentTrackIndex = (currentTrackIndex + 1) % audioname.length;
  playmusic(audioname[currentTrackIndex]);
}

function playPrevious() {
  currentTrackIndex =
    (currentTrackIndex - 1 + audioname.length) % audioname.length;
  playmusic(audioname[currentTrackIndex]);
}
