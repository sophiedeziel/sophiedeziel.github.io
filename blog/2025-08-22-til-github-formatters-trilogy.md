---
slug: til-github-formatters-trilogy
title: "TIL: RSpec, RuboCop, AND Cucumber Can All Annotate Your PRs"
authors: [sophie]
tags: [today-i-learned, rspec, rubocop, cucumber, github-actions, testing, ruby, ci-cd]
date: 2025-08-22
---

# TIL: RSpec, RuboCop, AND Cucumber Can All Annotate Your PRs

I just discovered the holy trinity of GitHub formatters and I'm having a moment. You know that annoying workflow where tests fail in CI and you have to click through Actions logs like you're on a treasure hunt? There are formatters that fix this for RSpec, RuboCop, AND Cucumber. All of them. Creating inline annotations right in your PR.

<!-- truncate -->

## The Discovery

I found [rspec-github](https://drieam.github.io/rspec-github/) first and my mind was blown. Failed specs show up as annotations directly on your PR files. No more clicking through to Actions, no more scrolling through walls of output. The failures come to you, right where you're already looking.

Then I searched for [rubocop-github-annotations-formatter](https://github.com/colby-swandale/rubocop-github-annotations-formatter). Same magic, but for linting violations. That missing frozen string literal? Annotated. That line that's too long? Right there in your diff.

And to complete the trilogy: [cucumber_github_formatter](https://github.com/duderman/cucumber_github_formatter). Your acceptance test failures, also annotated.

## Why This Changes Everything

Before: push code → something fails → click through to Actions → expand the right job → scroll forever → find the problem → context switch back to code.

Now: push code → failures appear as comments exactly where they happened.

It's wild how something this simple—just formatting output differently—completely transforms the CI experience. Your test suite, linter, and acceptance tests all become part of the PR conversation instead of separate reports hidden three clicks away.

These aren't making your tests run faster or your code better. They're just putting information where you need it, when you need it. And honestly? After discovering all three in one day, I'm questioning every other tool in my stack. What else have I been doing the hard way?

If you're running Ruby tests in GitHub Actions without these formatters, you're living in the past. Your future self will thank you.