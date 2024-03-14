This is a  assignment given by `Rigi` i.e `Azalp Technologies Private Limited`

Tech Stack : `React` + `Bootstrap`

## Run Project Locally
First, install packages:

```
npm install
```

And, run the development server:

```bash
npm start
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

Generate build:

```bash
npm run build
```

[View Demo](https://ephemeral-kangaroo-a11665.netlify.app)

## Features the app provides
- Playback Controls: Easily play, pause, skip forward, and skip backward through video content.
- Volume Control: Adjust the volume level using a slider or toggle mute/unmute with a single click.
- Time Tracking: Display the current playback time and total duration of the video, allowing users to track their progress.
- Playback Speed: Change the playback speed of the video to suit individual preferences, offering options such as 0.5x, 1x, 1.5x, and 2x.
- Full Screen Mode: Enable full-screen mode for an immersive viewing experience, maximizing the video display area.
- Picture-in-Picture: Enable picture-in-picture mode, allowing users to watch the video in a small overlay window while navigating other content or applications.
- Keyboard Shortcuts: Provides keyboard shortcuts for common actions like play/pause, volume adjustment, and navigation, enhancing accessibility and user experience.
- Playlist Navigation: Allows users to navigate through a playlist of videos, with options to play the next or previous video.
- Responsive Design: The app is designed to adapt to various screen sizes and orientations, ensuring optimal viewing and usability across devices.
- Drag and Drop Playlist: Users can rearrange the playlist items by dragging and dropping, providing flexibility in organizing their video queue.

 ## File System
  
  Inside `Component` folder

 - `VideoPlayer.js`: The actual VideoPlayer component
 - `Playlist.js`: The playlist component that appears as side widget.
 - `VideoControls/index.js` and `VideoProgressBar/index.js`: Basic `video` controls components. 

 Inside `src` folder:
 - `App.js`: Renders as the `root`. All other components have been consumed here.

 ## Lighthouse Score

 - Performance: 94
 - Accessibility: 85
 - Best Practices: 81
 - SEO: 91
 
 ![lighthouse result img](https://i.postimg.cc/tCY0bBvL/Screenshot-2024-03-14-at-11-54-49-PM.png)

Thanks