# ryanyearsley.github.io

Source for my game dev portfolio, built with [Jekyll](https://jekyllrb.com) and hosted on GitHub Pages.

## Structure

| Path | Purpose |
| --- | --- |
| `_layouts/default.html` | Base page shell (head, nav, footer) |
| `_layouts/project.html` | Project page: hero with metadata, media, prose, "next project" pager |
| `_includes/` | `nav`, `footer`, `youtube`, `vimeo` partials |
| `assets/css/main.css` | The single stylesheet for the whole site |
| `assets/js/main.js` | Mobile nav toggle + reveal-on-scroll |
| `index.md` | Homepage: hero, project cards, reel, about |
| `games/*.md` | One file per project; front matter drives the hero (`role`, `tools`, `links`, `youtube`/`vimeo`/`image`, `order`) |
| `Resume.md`, `Contact.md` | Standalone pages |
| `docs/assets/` | Images and the PDF resume |

## Adding a project

Create `games/My-Game.md`:

```yaml
---
layout: project
title: My Game
subtitle: One-line pitch.
kind: Genre · context
year: 2026
role: What I did
team: Solo
platform: PC
tools: [Unity, C#]
youtube: VIDEO_ID        # or vimeo: ID, or image: /docs/assets/images/foo.png
order: 4                 # controls "next project" ordering
links:
  - label: Play on itch.io
    url: https://...
---
Body copy in Markdown.
```

Then add a card for it in `index.md` under `#work`.

## Local preview

```bash
bundle exec jekyll serve
```
