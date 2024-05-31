import { SimpleLineIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export const libraryIcons = [
  {
    id: 1,
    name: "Playlists",
    icon: <SimpleLineIcons name="playlist" size={33} color="#f92d47" />,
  },
  {
    id: 2,
    name: "Artists",
    icon: <Entypo name="modern-mic" size={33} color="#f92d47" />,
  },
  {
    id: 3,
    name: "Albums",
    icon: <Ionicons name="albums-outline" size={33} color="#f92d47" />,
  },
  {
    id: 4,
    name: "Songs",
    icon: <Ionicons name="musical-note" size={33} color="#f92d47" />,
  },
  {
    id: 5,
    name: "Genres",
    icon: <MaterialIcons name="my-library-music" size={33} color="#f92d47" />,
  },
  {
    id: 6,
    name: "Composers",
    icon: <Ionicons name="create" size={33} color="#f92d47" />,
  },
  {
    id: 7,
    name: "Downloaded",
    icon: <Ionicons name="cloud-download" size={33} color="#f92d47" />,
  },
];

const lover = require("../assets/images/lover.jpeg");
const ForAllTheDogs = require("../assets/images/ForAllTheDogs.png");
const Reputation = require("../assets/images/Reputation.png");

export const Playlists = [
  {
    id: 1,
    name: "Liked Songs",
    icon: lover,
  },
  {
    id: 2,
    name: "Vibing",
    icon: ForAllTheDogs,
  },
  {
    id: 3,
    name: "Workout",
    icon: Reputation,
  },
  {
    id: 4,
    name: "Chill",
    icon: lover,
  },
  {
    id: 5,
    name: "Focus",
    icon: ForAllTheDogs,
  },
  {
    id: 6,
    name: "Sleep",
    icon: Reputation,
  },
  {
    id: 7,
    name: "Party",
    icon: lover,
  },
  {
    id: 8,
    name: "Travel",
    icon: ForAllTheDogs,
  },
  {
    id: 9,
    name: "Family",
    icon: Reputation,
  },
  {
    id: 10,
    name: "Romance",
    icon: Reputation,
  },
  {
    id: 11,
    name: "Sad",
    icon: Reputation,
  },
  {
    id: 12,
    name: "Angry",
    icon: ForAllTheDogs,
  },
  {
    id: 13,
    name: "Happy",
    icon: ForAllTheDogs,
  },
  {
    id: 14,
    name: "Relax",
    icon: ForAllTheDogs,
  },
  {
    id: 15,
    name: "Focus",
    icon: lover,
  },
  {
    id: 16,
    name: "Sleep",
    icon: lover,
  },
  {
    id: 17,
    name: "Party",
    icon: lover,
  },
  {
    id: 18,
    name: "Travel",
    icon: lover,
  },
  {
    id: 19,
    name: "Family",
    icon: ForAllTheDogs,
  },
  {
    id: 20,
    name: "Romance",
    icon: Reputation,
  },
];

const alltoowell = require("../assets/images/songs/alltoowell.png");
const epidemic = require("../assets/images/songs/epidemic.jpeg");
const fn = require("../assets/images/songs/fn.jpeg");
const godsplan = require("../assets/images/songs/godsplan.jpeg");
const inmahead = require("../assets/images/songs/Inmahead.jpeg");
const martinandgina = require("../assets/images/songs/martinandgina.jpeg");
const popout = require("../assets/images/songs/popout.jpeg");
const rapstar = require("../assets/images/songs/Rapstar.jpeg");

export const songs = [
  {
    id: 1,
    title: "All too well",
    artist: "Taylor Swiift",
    coverart: alltoowell,
    url: "https://audio.jukehost.co.uk/vTRYaTEbpaYRCxiWGgL2S91mnOuMKfLw"
  },
  {
    id: 2,
    title: "Epidemic",
    artist: "Polo G",
    coverart: epidemic,
    url: "https://audio.jukehost.co.uk/priWy2vYsWODmQiM6KevNYVLpPJGPZGd"
  },
  {
    id: 3,
    title: "F.N",
    artist: "Lil Tjay",
    coverart: fn,
    url: "https://audio.jukehost.co.uk/rSmGXxf0OJLipPwFRyvoFKodDOj5VuWf"
  },
  {
    id: 4,
    title: "God's Plan",
    artist: "Drake",
    coverart: godsplan,
    url: "https://audio.jukehost.co.uk/ZLdoXNocDAcsgeq6QKtPRHyvlqslNbke"
  },
  {
    id: 5,
    title: "In my head",
    artist: "Lil Tjay",
    coverart: inmahead,
    url: "https://audio.jukehost.co.uk/rZ9sshicVlki8Dnm95ps1eWhK95dYgKF"
  },
  {
    id: 6,
    title: "Martin & Gina",
    artist: "Polo G",
    coverart: martinandgina,
    url: "https://audio.jukehost.co.uk/ZufGK11EtwQWXge8xYo5EQ02RuJqtr4s"
  },
  {
    id: 7,
    title: "Pop Out",
    artist: "Polo G",
    coverart: popout,
    url: "https://audio.jukehost.co.uk/Tn0JjUOFnQXt94p3CQCA4AkB3weF51Yf"
  },
  {
    id: 8,
    title: "Rapstar",
    artist: "Polo G",
    coverart: rapstar,
    url: "https://audio.jukehost.co.uk/yA5v0HqEX7pRLKDkjp3XeFDcksZVv7lr"
  },
];
