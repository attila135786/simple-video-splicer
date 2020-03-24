# simple-video-splicer
Many of these things can be done automatically, but I don't have the time, even though it isn't difficult to accomplish.

Splices videos together into a single video.

# Dependencies
- Install `ffmpeg`
- Install `fluent-ffmpeg`
- run `yarn` in the root directory

# Running the app
- Create directory named imagesAndVideos in the root directory.
- Place your video files into the imagesAndVideos directory.
- Rename them such that the directory order is the order in which you want to splice the videos. Example: 1_video.mov, 2_video.mov, 3_video.mov. These should live inside of imagesAndVideos. Make sure you create back-ups just in case something crazy happens (the script should not modify videos, but better to be safe than sorry when copying them to the project).
- Create an output file named output.mov
- run `yarn start`
