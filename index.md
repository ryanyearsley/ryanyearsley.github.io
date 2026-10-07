---
layout: default
body_class: home
---

<section class="hero">
  <div class="wrap hero-grid">
    <div>
      <span class="chip">Open to game dev &amp; Unity roles</span>
      <h1>Hi, I'm Ryan.<br>I build <span class="accent">games</span> and the systems behind them.</h1>
      <p class="hero-lede">Software engineer turned game developer. I've shipped enterprise back-ends, a VR hearing test used in clinical trials, and a rogue-like bullet hell built from scratch in Unity.</p>
      <div class="btn-row" style="margin-top:0">
        <a class="btn btn-primary" href="#work">See my work <span aria-hidden="true">&darr;</span></a>
        <a class="btn btn-ghost" href="{{ '/Resume.html' | relative_url }}">Resume</a>
        <a class="btn btn-ghost" href="{{ '/Contact.html' | relative_url }}">Get in touch</a>
      </div>
      <div class="hero-stats">
        <div class="stat"><b>8+</b><span>Years in software</span></div>
        <div class="stat"><b>4</b><span>Featured projects</span></div>
        <div class="stat"><b>PC &middot; VR</b><span>Platforms shipped</span></div>
      </div>
    </div>
    <div class="hero-visual">
      <div class="portrait-frame">
        <img src="{{ '/docs/assets/images/Yearsley_ProfilePic_Cropped.png' | relative_url }}" alt="Portrait of Ryan Yearsley" width="320" height="320">
      </div>
    </div>
  </div>
</section>

<section id="work" class="section">
  <div class="wrap">
    <div class="section-head reveal">
      <div>
        <p class="eyebrow">Selected work</p>
        <h2>Projects</h2>
      </div>
      <p>Games and interactive software I've designed, built, and shipped &mdash; from senior capstone to clinical VR.</p>
    </div>

    <div class="card-grid">
      <a class="card card-featured reveal" href="{{ '/games/4TONS.html' | relative_url }}">
        <div class="card-media">
          <img src="{{ '/docs/assets/images/4TONS_TitleScreen.png' | relative_url }}" alt="4TONS title screen: isometric pixel-art letters" loading="lazy">
        </div>
        <div class="card-body">
          <span class="card-kind">Rogue-like bullet hell &middot; Solo project</span>
          <h3>4TONS <span class="arrow" aria-hidden="true">&nearr;</span></h3>
          <p>A 2D rogue-like with puzzle elements. Procedural dungeons, a modular AI system, A* pathfinding, and online leaderboards &mdash; rewritten from the ground up with SOLID principles after my time in enterprise software.</p>
          <div class="tag-row"><span class="tag">Unity</span><span class="tag">C#</span><span class="tag">Aseprite</span><span class="tag">Procedural gen</span></div>
        </div>
      </a>

      <a class="card reveal" href="{{ '/games/HELIX.html' | relative_url }}">
        <div class="card-media">
          <img src="{{ '/docs/assets/images/HELIX_EscapeRoom1.png' | relative_url }}" alt="HELIX escape room: floating low-poly islands in space" loading="lazy">
        </div>
        <div class="card-body">
          <span class="card-kind">VR &middot; Games for health</span>
          <h3>HELIX Project <span class="arrow" aria-hidden="true">&nearr;</span></h3>
          <p>A VR hearing test on Meta Quest 2 that turns pure-tone and digits-in-noise assessments into a rhythm game and an escape room. Built with audiologists; now through its first trials.</p>
          <div class="tag-row"><span class="tag">Unity</span><span class="tag">Meta Quest 2</span><span class="tag">Editor tools</span></div>
        </div>
      </a>

      <a class="card reveal" href="{{ '/games/Drift-Space-Zero.html' | relative_url }}">
        <div class="card-media">
          <img src="https://img.youtube.com/vi/gUc-AgZ5AaM/maxresdefault.jpg" alt="Drift Space Zero title screen: a ship racing through a fractal tunnel" loading="lazy">
        </div>
        <div class="card-body">
          <span class="card-kind">6DoF racing &middot; Two-person team</span>
          <h3>Drift Space Zero <span class="arrow" aria-hidden="true">&nearr;</span></h3>
          <p>A zero-gravity racer through shuffling fractal tunnels. I built the rigidbody vehicle controller, the track generation system, and the ships.</p>
          <div class="tag-row"><span class="tag">Unity</span><span class="tag">Maya</span><span class="tag">Physics</span></div>
        </div>
      </a>
    </div>
  </div>
</section>

<hr class="hr">

<section id="reel" class="section">
  <div class="wrap">
    <div class="section-head reveal">
      <div>
        <p class="eyebrow">In motion</p>
        <h2>Reel &amp; latest</h2>
      </div>
      <p>Gameplay from across the projects, plus whatever I'm building right now.</p>
    </div>
    <div class="media-grid">
      <figure class="reveal">
        {% include youtube.html id="Kho_AvY_vMk" title="Ryan Yearsley demo reel" %}
        <figcaption><b>Demo reel</b>Highlights from 4TONS, HELIX, and Drift Space Zero.</figcaption>
      </figure>
      <figure class="reveal">
        {% include vimeo.html id="1067402398" title="Latest project" %}
        <figcaption><b>Latest project</b>A first look at what's currently on the workbench.</figcaption>
      </figure>
    </div>
  </div>
</section>

<hr class="hr">

<section id="about" class="section">
  <div class="wrap about-grid">
    <div class="reveal">
      <p class="eyebrow">About</p>
      <h2>Engineer's discipline, designer's instincts.</h2>
      <div class="prose">
        <p>Hello, world! I'm a software engineer with a focus on game development. My background is unusually wide &mdash; from enterprise integration services at QVC, to a clinical VR hearing test at Luna Wolf Studios, to designing, coding, and drawing every pixel of my own rogue-like.</p>
        <p>That mix shapes how I work: I care about clean architecture, testable systems, and tooling that lets a team move fast &mdash; and I care just as much about game feel, tempo, and the moment a player decides to roll the dice one more time.</p>
        <p>I believe in the power of games to entertain, educate, and inspire, and I'm dedicated to contributing my skills and creativity to the ever-evolving industry of technology.</p>
      </div>
      <div class="btn-row">
        <a class="btn btn-ghost" href="{{ '/Resume.html' | relative_url }}">Full resume</a>
        <a class="btn btn-ghost" href="https://github.com/ryanyearsley" target="_blank" rel="noopener">GitHub <span aria-hidden="true">&nearr;</span></a>
      </div>
    </div>
    <aside class="skill-panel reveal">
      <h3>Engines &amp; languages</h3>
      <div class="tag-row"><span class="tag hi">Unity</span><span class="tag hi">C#</span><span class="tag">Java</span><span class="tag">Spring</span></div>
      <h3>Systems I've built</h3>
      <div class="tag-row"><span class="tag">Procedural generation</span><span class="tag">AI &amp; pathfinding</span><span class="tag">Save / serialization</span><span class="tag">Vehicle physics</span><span class="tag">Editor tooling</span><span class="tag">Unit tests</span></div>
      <h3>Platforms &amp; pipeline</h3>
      <div class="tag-row"><span class="tag">Meta Quest 2</span><span class="tag">PC</span><span class="tag">Git</span><span class="tag">CI/CD</span><span class="tag">Docker</span></div>
      <h3>Art &amp; audio</h3>
      <div class="tag-row"><span class="tag">Aseprite</span><span class="tag">Maya</span><span class="tag">Audacity</span></div>
    </aside>
  </div>
</section>
