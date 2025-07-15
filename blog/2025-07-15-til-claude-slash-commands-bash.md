---
slug: til-claude-slash-commands-bash
title: "TIL: Claude Code Can Run Bash Commands in Slash Commands"
authors: [sophie]
tags: [today-i-learned, claude, ai, productivity, development-tools]
date: 2025-07-15
---

# TIL: Claude Code Can Run Bash Commands in Slash Commands

Today I discovered that Claude Code's slash commands can execute bash commands before running, capturing their output as context. This is making me so excited! When you have a bunch of commands to run, Claude is not always reliable for running the all, or running them in the right order.

<!-- truncate -->

## The Feature

According to the [Claude Code documentation](https://docs.anthropic.com/en/docs/claude-code/slash-commands#bash-command-execution), you can prefix bash commands with `!` in your slash command templates to execute them and include their output.

## Example: Smart Git Commits

This is the example they provide in the documentation so you can try it now:

```yaml
---
allowed-tools: Bash(git add:*), Bash(git status:*), Bash(git commit:*)
description: Create a git commit
---

## Context

- Current git status: !`git status`
- Current git diff (staged and unstaged changes): !`git diff HEAD`
- Current branch: !`git branch --show-current`
- Recent commits: !`git log --oneline -10`

## Your task

Based on the above changes, create a single git commit.
```
