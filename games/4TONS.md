---
layout: project
title: 4TONS
subtitle: A 2D rogue-like bullet hell with puzzle elements — four towers, an arsenal of staves and spell gems, and a run that can go sour at any moment.
description: 4TONS is a rogue-like bullet hell built solo in Unity, featuring procedural dungeons, a modular AI system, and online leaderboards.
kind: Rogue-like bullet hell
year: 2017 – 2022
role: Design, programming, pixel art, audio
team: Solo
platform: PC (Windows)
tools: [Unity, C#, Aseprite, Audacity, JSON]
youtube: LKsWd3aCDi0
image: /docs/assets/images/4TONS_TitleScreen.png
order: 1
links:
  - label: Play on itch.io
    url: https://crooked-studio.itch.io/4tons
  - label: Source on GitHub
    url: https://github.com/ryanyearsley/4TONS
---

4TONS (4 Towers of NerdStorm) is a 2D rogue-like bullet hell with puzzle elements, inspired heavily by games such as Nuclear Throne, Enter the Gungeon, and Wizard of Legend. Players take on the role of a wizard trapped in a mysterious dimension by the evil Lord NerdStorm, where they must fight their way through four towers. Along the way, players collect an arsenal of magical staves and powerful spell gems that will be vital to overthrowing Lord NerdStorm and returning to their homeland.

4TONS started life as my senior capstone project, but has since morphed into a testing ground where I've learned many core game programming concepts. After my experience in enterprise software engineering, I revisited and rewrote this project from scratch, adhering to SOLID programming principles and industry-standard best practices.

<div class="callout" markdown="1">
<p class="eyebrow">What's under the hood</p>

- Procedural dungeon generation
- Modular AI system
- A* pathfinding algorithm
- Diverse array of spells
- Advanced puzzle / inventory systems
- Save system utilizing JSON serialization / deserialization
- Online leaderboards
</div>

## Design

Fine-tuning the design of 4TONS has been a balancing act between the puzzle mechanics and combat to offer a unique tempo to the core game loop, forcing players to think on their feet and equip spell gems under the looming threat of enemies.

Another driving design principle was a healthy element of luck. Some runs provide great drops and enemy spawns, and others do not. A great run can quickly go sour. This presents the illusion that 4TONS is a sporadic and unforgiving world, and encourages the player to roll the dice again.
