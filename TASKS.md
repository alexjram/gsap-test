# Project ideas

## Level 1 The Foundations
Focus `gsap.to()`, `gsap.from()`, `stagger`, and the basic `eases`

- **Animated Feature Cards:** Create a grid of 3 or 4 cards. When the page loads, make them "pop" into view using a staggered effect
- **Micro-Interaction Button:** Design a "Submit" button that, when clicked transforms into a loading spinner and then into a "Success" checkmark
- **Image Gallery Reveal:** Build a simple gallery where images slide into view with a "curtain" effect (a colored div that slides across the image and reveals it underneath)

## Level 2 Timeline Mastery
Focus `gsap.timeline()`, sequencing, and the `position.parameter`

- **Storytelling Hero Section:** Instead of everything appearing at once, create a sequence: the logo fades in, then the main heading slides down, then the subtext fades in, and finally, a "Scroll Down" arrow starts bouncing.
- **Animated Explainer Infographic:** Create an SVG of a process (like how a solar panel works). Use a timeline to highlight different parts of the SVG in order, adding text descriptions that appear and disappear as the "story" progresses.
- **Character "Walk" Cycle:** Use a simple SVG character and animate its limbs in a loop. Use a timeline to coordinate the legs and arms so they move in sync.

## Level 3 Scroll-Triggered Effects
Focus `ScrollTrigger` plugin, pinning and "scrubbing"

- **Horizontal Scroll Section:** Create a long webpage where one specific section scrolls horizontally instead of vertically as the user continues to scroll down.
- **Parallax Landing Page:** Build a site where background elements move at different speeds than foreground elements, creating a sense of 3D depth.
- **The "Pinned" Sidebar:** Design a layout where a piece of content (like an image or a call-to-action) stays "stuck" (pinned) on the left side of the screen while the text on the right side continues to scroll past it.

## Level 4 Creative & complex
Focus `SplitText`, `DrawSVG`, `MorphSVG` and `Draggable`

- **Text Reveal Reveal:** Use the SplitText plugin to make a large heading shatter into individual letters that fly away when hovered over, or "type" themselves in word-by-word.
- **SVG Path Drawing:** Take a handwritten signature or a line-art illustration and use DrawSVG to make it look like it's being "drawn" onto the screen in real-time.
- **Interactive Draggable Dashboard:** Create a set of "widgets" or windows that the user can click and drag around the screen. Add Inertia so they have a bit of weight and "slide" to a stop when thrown.
- **Morphing Icon Toggle:** Create a "Play" button icon that smoothly morphs its shape into a "Pause" or "Stop" square using MorphSVG.

## Level 5 Canvas & GSAP
Focus combining GSAP with the HTML5 Canvas API for high-performance animations

- **Particle System:** Create a canvas particle system (confetti, fireflies, or bubbles) where GSAP controls each particle's movement, opacity, and scale properties
- **Animated Data Visualization:** Build an animated bar chart or line graph using Canvas API, with GSAP tweening the data values and drawing animations
- **Canvas Sprite Animation:** Load a sprite sheet onto canvas and use GSAP to control frame-by-frame animation timing (great for game characters)
- **Interactive Drawing Playback:** Users draw on canvas, then GSAP animates the strokes with replay, morph, or dissolve effects
- **Physics-Based Animation:** Canvas-drawn objects with GSAP-controlled physics (bounce, gravity, collision detection)
- **Generative Art Animation:** Procedurally generate shapes on canvas and animate them into patterns or mandalas using GSAP
- **Canvas Text Scramble:** Render text on canvas and use GSAP to animate a "decode" or "scramble" effect character by character
