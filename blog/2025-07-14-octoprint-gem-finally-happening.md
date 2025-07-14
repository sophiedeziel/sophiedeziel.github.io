---
slug: octoprint-gem-finally-happening
title: The Octoprint Gem is Finally Happening (Thanks, AI)
authors: [sophie]
tags: [octoprint, ai, open-source, 3d-printing, development, project-logs]
date: 2025-07-14
---

# The Octoprint Gem is Finally Happening (Thanks, AI)

I started working on the [Octoprint gem](https://github.com/sophiedeziel/octoprint) back in March 2022. The goal was simple: create a Ruby wrapper around the Octoprint REST API so I could interact with multiple 3D printer servers for another project.

Simple, but incredibly boring.

The work was pure drudgery: read an API endpoint's documentation, create classes for models and errors, write tests, document everything, repeat. I implemented just what I needed and then... let it sit. For years. Untouched except for the occasional Dependabot update.

<!-- truncate -->

Fast forward to last month when I realized this project was perfect for experimenting with AI-assisted development. The patterns were already established, the tests were in place, and I even had a checklist of what was done versus what remained. Each endpoint implementation was basically identical—ideal for testing different approaches to vibecoding.

So I started handing off endpoints to Claude Code, one by one.

The result? The gem is now about 50% complete, and I'm confident I can release a first version within the month. Not because I changed my approach or found new motivation—because AI took over the repetitive parts I was dreading.

There are no more big decisions to make. No architectural puzzles to solve. Just implementation work that AI handles while I focus on the parts that actually interest me.

It's wild how a project that felt abandoned suddenly feels inevitable. Sometimes the barrier isn't complexity—it's just boredom.