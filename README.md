This is a  assignment given by Rigi i.e Azalp Technologies Private Limited
Tech Stack : Next.js & styled components

## Run Project Locally
First, install packages:

```bash
yarn install
```

And, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployed Version

And here's the deployed version: https://rigi-assignment-player.vercel.app

## Features the app provides
- Playback Controls: Easily play, pause, skip forward, and skip backward through video content.
- Volume Control: Adjust the volume level using a slider or toggle mute/unmute with a single click.
- Time Tracking: Display the current playback time and total duration of the video, allowing users to track their progress.
- Playback Speed: Change the playback speed of the video to suit individual preferences, offering options such as 0.5x, 1x, 1.5x, and 2x.
-Full Screen Mode: Enable full-screen mode for an immersive viewing experience, maximizing the video display area.
-Picture-in-Picture: Enable picture-in-picture mode, allowing users to watch the video in a small overlay window while navigating other content or applications.
-Keyboard Shortcuts: Provides keyboard shortcuts for common actions like play/pause, volume adjustment, and navigation, enhancing accessibility and user experience.
-Playlist Navigation: Allows users to navigate through a playlist of videos, with options to play the next or previous video.
-Responsive Design: The app is designed to adapt to various screen sizes and orientations, ensuring optimal viewing and usability across devices.
-Drag and Drop Playlist: Users can rearrange the playlist items by dragging and dropping, providing flexibility in organizing their video queue.

 ## File System
  
  inside components folder

 -player.js: exporting Player component and related features
 -playlist.js : exporting Playlist component and related features
 -home.js: HomePage, importing Player and Playlist component to export them together

 inside app folder 
 -page.js : Calling Home component and context provider to provide context
 -store.js : Code for react context (store management) and exporting relevant modules

 ## Lighthouse Score

 -Performance: 93
 -Accessbility: 97
 -Best Practices: 100
 -SEO: 100
 
 ![lighthouse result img](https://i.postimg.cc/VLbDJH66/Screenshot-2024-02-18-184246.png)

Thanks