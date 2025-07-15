---
slug: til-claude-code-hooks-rubocop
title: "TIL: Claude Code Hooks Can Auto-Fix RuboCop Violations"
authors: [sophie]
tags: [today-i-learned, claude, ai, productivity, development-tools, ruby]
date: 2025-07-15
---

# TIL: Claude Code Hooks Can Auto-Fix RuboCop Violations

Today I learned Claude Code has **hooks**! These let you automatically run commands when certain events happen. I'm using this to auto-fix RuboCop violations every time Claude edits a Ruby file, and it's making my development flow so much smoother.

<!-- truncate -->

Working on my [OctoPrint gem](https://github.com/sophiedeziel/octoprint), Claude was inconsistent about running RuboCop after making changes. Sometimes it would run, sometimes it wouldn't, and it often decided to manually fix style violations instead of using the autocorrections.

While reading the [Claude Code hooks documentation](https://docs.anthropic.com/en/docs/claude-code/hooks), I realized I could automate this completely. Hooks execute shell commands in response to events like file edits, tool usage, or when Claude finishes responding.

## Example

I added this hook to my `~/.claude/settings.json`:

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|MultiEdit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "file_path=$(echo '$TOOL_PARAMETERS' | jq -r '.file_path // empty'); if [[ $file_path == *.rb ]] && [[ -f $file_path ]]; then rubocop \"$file_path\" -a; fi"
          }
        ]
      }
    ]
  }
}
```
