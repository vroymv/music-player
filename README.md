<!-- Banner Image, Landing Page Of Computer Vision Site -->
<div align="center">
  <br />
    <a href="">
      <img src="https://firebasestorage.googleapis.com/v0/b/karizmatik-14de4.appspot.com/o/Banner.png?alt=media&token=222122dd-9cf5-4ec8-8901-e9afb3bdab14" alt="Project Banner">
    
  <br />

  <div>
    <img src="https://img.shields.io/badge/-ReactNative-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/Tailwind-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="nativewind" />
    <img src="https://img.shields.io/badge/expo-black?logo=expo&color=black" alt="Expo" />
    
    
  </div>

  <h1 align="center">Music Player</h1>

   <div align="center">
     <h4>Custom made music player - Apple Music style</h4>
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)

## 🚨 About

Just a music player

## <a name="introduction">🤖 Introduction</a>

...

## <a name="tech-stack">⚙️ Tech Stack</a>

- React - for the front end
- Nativewind - for styling
- Expo - for the app
- React Native Track Player

## <a name="features">🔋 Features</a>

👉 **Library Screen**: Here you get to view, various music categorizations.

<img src="https://firebasestorage.googleapis.com/v0/b/karizmatik-14de4.appspot.com/o/Simulator%20Screenshot%20-%20iPhone%2015%20-%202024-07-03%20at%2009.54.03.png?alt=media&token=e0699fea-eba4-4aa3-8a17-11cd70f1f353" alt="Library screen">

👉 **Playlists**:

<img src="https://firebasestorage.googleapis.com/v0/b/karizmatik-14de4.appspot.com/o/Simulator%20Screenshot%20-%20iPhone%2015%20-%202024-07-03%20at%2009.54.30.png?alt=media&token=dae72495-7369-4fd3-989e-d086a44b1ac0" alt="Playlists">

👉 **Songs**:
<img src="https://firebasestorage.googleapis.com/v0/b/karizmatik-14de4.appspot.com/o/Screenshot%202024-07-03%20at%2012.05.52.png?alt=media&token=331f8402-2acd-47f1-81ce-668fd4c5abf1" alt="Songs">

👉 **Player**:
<img src="https://firebasestorage.googleapis.com/v0/b/karizmatik-14de4.appspot.com/o/Simulator%20Screenshot%20-%20iPhone%2015%20-%202024-07-03%20at%2009.54.13.png?alt=media&token=cc8aa72b-2587-4d32-9119-b1eda6c71d2b" alt="Player">

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [DevClient](https://docs.expo.dev/versions/latest/sdk/dev-client/) (Expo dev client)

**Cloning the Repository**

```bash
git clone https://github.com/vroymv/music-player.git
cd Music\ Player
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
eas login
eas build:configure
```

**Adjust your profile build**
<br>

Add "ios": {
"simulator": true
}

{
"build": {
"development": {
"developmentClient": true,
"distribution": "internal",
"ios": {
"simulator": true
}
}
}
}

**Create Development Build**

```bash
eas build --platform ios --profile development
```

**Running the Project**

```bash
npx expo start
```

**Setup Nativewind**

Folloow these instructions to set up tailwindcss(https://www.nativewind.dev/quick-starts/expo)
