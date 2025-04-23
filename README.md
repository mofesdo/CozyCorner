# Cozy Corner is an interactive, ambient web application designed to create a calm, cozy digital space with a peaceful aesthetic. Visitors can interact with various elements in a room like turning on a TV, listening to waterfall sounds or background music, planting flowers, and engaging in guided breathing exercises.

Live Preview Link : https://mofesdo.github.io/CozyCorner/

Features
1. Window Relaxation Module
Click the window to open a breathing exercise module.
"Inhale - Hold - Exhale" guided sequence with animated expanding/contracting circle and gradient.
Helps users calm their breathing and relax.

2. Planting Modal
Click the plant to open a flower customization modal.
Choose flower/plant thumbnails to spawn random flowers in the modal space.
Flower positions are randomly generated within safe visual bounds.

3. TV Toggle
Click the TV to turn it on/off and view a relaxing waterfall GIF.
Includes waterfall ambient sound via the WaterfallSound module.

4. Lamp Toggle
Click the lamp to illuminate the room with light overlay.

5. Radio & Background Music
Click the radio to start/stop ambient music.
Volume is set to 75% by default.

6. Theater Mode
Click the couch/seating area to open a YouTube video theater.
10 relaxing video thumbnails.
One main video in center (dominant visual).
Clicking any thumbnail loads and plays the video.

Technical Highlights:
Event-driven interactivity with clean separation of UI elements.
Smooth CSS transitions and responsive animations.
Usage of YouTube thumbnails and embedded iframe for video gallery.
Flower positioning logic includes getBoundingClientRect() for boundary-safe random placement.
Clip Path CSS allows accurate clickable object boxes. Helpful site to create complex clip paths: [https://bennettfeely.com/clippy/]

Setup & Run
Clone the repo:
git clone https://mofesdo.github.io/CozyCorner/
cd cozy-corner
Make sure all assets (audio, images, fonts) are correctly placed.

Open index.html in a modern browser.
