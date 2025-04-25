# Interactive Background Documentation

## Introduction

This document explains how the interactive, mouse‑responsive background works in my Next.js project. I am a beginner, so I have tried to write each step as simply as possible. This covers:

- Tracking the mouse position  
- Calculating the gradient center  
- Rendering a full‑screen radial gradient that follows the mouse  
- Making the gradient responsive to window size changes  

I also include the link to a YouTube video I used to learn and implement this effect.

---

## Project Structure

Kraftedx/ └── document/ └── interactive-background.md └── public/ └── images/ interactive-bg.jpg └── src/ ├── app/ │ └── interactive/ │ └── page.js 


- **interactive/page.js**  
  The Next.js page that uses the `InteractiveBackground` component.  
- **InteractiveBackground.js**  
  The component that tracks mouse movements and renders the dynamic background.  

---

## 1. Mouse Movement Tracking

- **File**: `src/app/interactive/page.js` (or `InteractiveBackground.js` if separated)  
- We add a browser event listener for `mousemove`.  
- On each mouse move, we update React state with the new `x` and `y` coordinates:

2. Window Resize Handling
Why: We want the gradient to fill the entire screen even if the window size changes.

How: Add a resize event listener:
  window.addEventListener("mousemove", handleMouseMove);

=> handleMouseMove sets

   setCoords({ x: e.clientX, y: e.clientY });

2. Window Resize Handling
Why: We want the gradient to fill the entire screen even if the window size changes.

How: Add a resize event listener:
  window.addEventListener("resize", handleResize);


handleResize updates state:
   setWindowSize({ width: window.innerWidth, height: window.innerHeight });

3. Calculating the Gradient Center

We convert the mouse coordinates into percentages of the viewport:

   const xPercent = (coords.x / windowSize.width) * 100 || 50;
   const yPercent = (coords.y / windowSize.height) * 100 || 50;

If the window size isn’t known yet, we fall back to 50% (center).

 4. Rendering the Radial Gradient

  We build a CSS radial-gradient string using the percentages:

  background: `radial-gradient(
  circle at ${xPercent}% ${yPercent}% #7F00FF 20%, #000000 70% )`;

This gradient:

Starts with purple (#7F00FF) in the inner 20% of the circle

Transitions to black (#000000) by 70% of the radius

We apply it to a full‑screen <div> positioned behind the content:

5. Smooth Transitions
We add a CSS transition so the gradient moves smoothly, not jumpily:

6. Page Content
The interactive background sits behind the page content.

We wrap our content in a <div className="relative z-10"> so it stays on top of the gradient.

Diagram
Interactive Background Flow:- ![Interactive Background Diagram](/images/interactive-bg.jpg)

If image link not work then follow the steps:

        public -> image -> interactive-bg.jpg


(This diagram was hand‑drawn and scanned to show my understanding.)


Reference

I followed this YouTube tutorial to learn how to track mouse movement and create a responsive gradient:

YouTube Video: https://www.youtube.com/watch?v=dQw4w9WgXcQ

AI Promp I used in it:-

=> I have the following raw notes and folder structure for my interactive background feature:
>
> - Kraftedx/document/interactive‑background.md  
> - public/images/interactive‑background.png  
> - src/app/interactive/page.js  
> - src/component/InteractiveBackground.js  
>
> And these bullet‑point descriptions of how it works:
> 1. Mouse movement tracking via mousemove event  
> 2. Window resize handling via resize event  
> 3. Calculating xPercent and yPercent of viewport  
> 4. Rendering a full‑screen radial-gradient based on those percentages  
> 5. Adding a CSS transition for smooth background movement  
> 6. Layering the background behind content with z‑index
>
> Please convert these into a clear, beginner‑friendly documentation (no Markdown needed) that includes:  
> - A brief Introduction  
> - Project Structure overview  
> - Step‑by‑step numbered sections explaining each part in simple terms  
> - A “Diagram” section describing where the hand‑drawn image is stored  
> - A “YouTube Tutorial” section with a placeholder for the video URL
> 
> Use full sentences and avoid technical jargon where possible.

~~ End of documentation 

