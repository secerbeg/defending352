# 3-5-2 Center Back Defensive Guide

A simple static website built for GitHub Pages. It includes:

- Intro and back-three role expectations
- Tactical decision diagrams for tackle, dribble/carry, long pass, and wide pass
- Two defensive shifting guide images
- Clearing and communication teaching points
- Expandable/filterable video library
- Mobile responsive layout
- No framework, no build step, no database

## Publish on GitHub Pages

1. Create a new GitHub repository, for example `defensive-guide`.
2. Upload every file and folder from this package to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder.
6. Click **Save**.
7. GitHub will provide a URL similar to:
   `https://YOUR-USERNAME.github.io/defensive-guide/`

## Add a video

1. Copy the MP4 file into:
   `assets/videos/`

2. Open `script.js`.

3. Add a new object inside the `videos` array:

```js
{
  title: "Part 5 — Shift Left and Cover",
  category: "Shifting",
  part: "Part 5 / Clip 01",
  file: "assets/videos/part-5-clip-01.mp4",
  whatHappened: "The ball moved left and the back three shifted together.",
  cbAction: "LCB stepped wider while CB and RCB tucked across to protect the middle.",
  tip: "Start the movement as the pass travels so the line arrives connected."
}
```

The card and category filter are generated automatically.

## Suggested video categories

- Shifting
- Clearing
- Communication
- 1v1 Defending
- Recovery Runs
- Build-Up
- Playing Wide
- Playing Long

## Important GitHub video note

GitHub repositories are not ideal for a very large library of MP4 files. For a small number of short compressed clips this setup is fine. If the video library grows, keep this same GitHub Pages site and move the MP4 files to a video/storage host, then replace `file:` with the public media URL.

## Included match library
This package now includes 29 Inter vs Milan defensive teaching clips in `assets/videos/`, grouped by Parts 2–8. The website supports filtering by defensive pattern and match segment. Six clips that were specifically selected as strong examples are marked **Coach Pick**.

Each video card consistently contains:
- What the sequence shows
- What the defenders did well
- What could be better / next focus
- A short coaching cue
