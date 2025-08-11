# Orientation Video Page

## Overview
This page detects mobile device orientation (portrait vs landscape) and displays appropriate videos fullscreen. When the video finishes or is skipped, it automatically navigates to the dashboard.

## Features
- **Orientation Detection**: Automatically detects if the device is in portrait (height > width) or landscape (width > height) mode
- **Dynamic Video Selection**: Shows different videos based on orientation
- **Fullscreen Experience**: Videos play fullscreen for immersive viewing
- **Skip Functionality**: Videos can be skipped with any click or keypress
- **Auto Navigation**: Automatically redirects to dashboard when video ends
- **Error Handling**: Graceful fallback if videos fail to load

## How to Access
1. Navigate to the main page (`/`)
2. In the "Welcome" section, find and click on "Orientation Test"
3. The orientation page will open and immediately detect your device orientation
4. The appropriate video will start playing fullscreen

## How to Use Your Own Videos

### Local Videos
1. Add your video files to `/static/videos/`
2. Update the video paths in `/src/routes/orientation/+page.svelte`:
   ```javascript
   const landscapeVideoSrc = '/videos/your-landscape-video.mp4';
   const portraitVideoSrc = '/videos/your-portrait-video.mp4';
   ```

### Remote Videos
You can also use URLs to remote videos (as currently configured):
```javascript
const landscapeVideoSrc = 'https://example.com/landscape.mp4';
const portraitVideoSrc = 'https://example.com/portrait.mp4';
```

## Video Requirements
- **Format**: MP4, WebM, or other web-compatible formats
- **Size**: Optimized for mobile viewing
- **Orientation**: 
  - Landscape videos: 16:9 or similar wide aspect ratios
  - Portrait videos: 9:16 or similar tall aspect ratios

## Controls
- **Click anywhere**: Skip video and go to dashboard
- **Press any key**: Skip video and go to dashboard
- **Wait**: Video will play through and automatically go to dashboard

## Technical Implementation
- Uses `window.innerHeight` vs `window.innerWidth` to detect orientation
- Listens for `resize` and `orientationchange` events for real-time updates
- Utilizes SvelteKit's `goto()` function for navigation
- Handles video loading states and errors gracefully

## Customization
You can customize the orientation detection logic in the `checkOrientation()` function if needed, for example to add specific breakpoints or different criteria for orientation detection.
