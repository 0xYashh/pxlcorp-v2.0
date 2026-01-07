# pxlcorp — design + build guide (final)

this document defines the design language, layout rules, interaction logic, and responsive behavior for the pxlcorp website.
follow this strictly. minimal > clever.

---

## 1. core idea

pxlcorp is not a startup.
it is a creative lab you stumble upon.

the site should feel:
- discovered, not marketed
- like folders on a desktop at night
- unfinished but intentional

---

## 2. background assets (MANDATORY)

all background visuals must be loaded ONLY from the local `/images` folder.

assume this structure:

/public  
  /images  
    bg-main.png  
    bg-films.png  
    bg-experiments.png  
    bg-reads.png  

rules:
- homepage → bg-main.png
- /films → bg-films.png
- /experiments → bg-experiments.png
- /reads → bg-reads.png
- if missing → fallback to bg-main.png
- use CSS background-image
- background-size: cover
- background-position: center
- background must NEVER overpower text

the background is part of the story. treat it like a film frame.

---

## 3. color system (STRICT)

use only:
- #F0FF7B → primary accent
- #EF4562 → rare emotional emphasis
- #FFFFFF → text
- near-black / deep navy → overlays only

rules:
- yellow = default interaction color
- red = rare, intentional
- no gradients
- no neon
- no unnecessary shadows

---

## 4. typography

fonts:
- bytsized → logo, section titles, UI markers
- jersey 10 → playful accents, numbers, subtle labels

rules:
- lowercase everywhere
- generous spacing
- short lines
- text should feel like UI, not marketing copy

examples:
- / films.
- / experiments.
- founders-note.txt

---

## 5. navigation system (DESKTOP)

### folder-style navigation (VERY IMPORTANT)

navigation items are **folders**, not buttons.

each navigation item consists of:
- a folder icon (square / minimal / pixel-style)
- text label UNDER the icon
- the ENTIRE block is clickable

structure:
[ folder icon ]
films

[ folder icon ]
experiments

[ folder icon ]
reads

rules:
- icon sits above text
- text centered
- hover = subtle glow or opacity increase
- cursor pointer on entire block
- no traditional navbar

navigation should feel like a desktop or file explorer.

---

## 6. homepage layout (DESKTOP)

left side:
- pxlcorp logo
- short line:
  creative lab for stories, products & experiments
- file-style text links:
  - curious about us?
  - founders-note.txt

right side:
- background dominates
- floating folder navigation (films / experiments / reads)

spacing is intentional. do not fill empty space just because you can.

---

## 7. section pages

background stays consistent per section.

### /films
- title: `/ films.`
- grid of film cards
- cards are semi-transparent
- hover = slight opacity or glow
- minimal text only

### /experiments
- title: `/ experiments.`
- imperfect grid allowed
- some items marked “under construction”
- feels raw, alive

### /reads
- title: `/ reads.`
- vertical list
- terminal / log-like feeling
- repetition is allowed

---

## 8. RESPONSIVE DESIGN (CRITICAL)

the site MUST adapt intelligently to mobile screens.

### mobile rules (phones)

- switch to **single-column layout**
- background still visible but darker overlay allowed
- folder navigation becomes:
  - grid of 2 columns OR
  - vertical stack (depending on screen width)

folder navigation on mobile:
- folder icon on top
- text below
- entire card remains clickable
- larger tap targets
- increased spacing between items

text rules on mobile:
- reduce font size slightly
- keep line-height generous
- do not overcrowd

DO NOT:
- hide navigation behind hamburger menus
- remove background entirely
- change the identity

the mobile version should feel like a **compact operating system**, not a stripped-down site.

---

## 9. interactions

- no heavy animations
- hover effects on desktop only
- tap feedback on mobile (opacity change)
- micro-interactions > motion

no scroll hijacking.
no autoplay.
no sound.

---

## 10. things to avoid (NON-NEGOTIABLE)

do NOT:
- add CTAs like “get started”
- add startup buzzwords
- add testimonials
- add gradients
- explain too much

silence is part of the design.

---

## 11. final check before shipping

ask:
- does this feel like folders, not pages?
- does it feel calm?
- does it feel discovered?
- does mobile still feel intentional?

if yes → ship.

pxlcorp is a world.
this site is just the door.
