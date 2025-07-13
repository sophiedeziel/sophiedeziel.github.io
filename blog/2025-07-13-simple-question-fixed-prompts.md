---
slug: simple-question-fixed-prompts
title: The Simple Question That Fixed My Prompts
authors: [sophie]
tags: [ai, prompts, collaboration]
date: 2025-07-13
---

import CodeBlock from '@theme/CodeBlock';
import PromptTemplate from '!!raw-loader!@site/src/prompts/prompt-improvement-template.md';

# The Simple Question That Fixed My Prompts

I was getting bored writing the CLAUDE.md file for my Ruby project. The usual drill: "Use RSpec for testing. Use Rubocop for linting." You know the type: bullet points that technically cover the basics but somehow miss the mark.

So I handed it off to Claude with a simple request: "Can you document conventions and commonly agreed-on best practices for this Rails project?"

What came back surprised me. Claude didn't just reformat my scattered notes; it completely restructured them. My lazy bullet points became a comprehensive guide with clear sections, context, and actionable details. The output felt more... intentional. Like it was designed to actually help someone succeed, not just check a documentation box.

But then, I realized Claude had essentially shown me how to write for its own "neurons."

That moment got me thinking. If Claude could improve my documentation, could it improve my prompts?

<!-- truncate -->

## The Question That Changed Everything

Instead of guessing what would make my prompts better, I decided to ask directly. I developed what I now call my "improvement prompt" and it starts with this simple question:

**"What information do you need from me to improve this prompt?"**

Who's better positioned to answer that question than the AI itself?

## The Process That Actually Works

The key insight is that you don't start with a perfect prompt. You start by learning the workflow together, like pairing with a new colleague on an unfamiliar task. You experiment, take notes on what works, and gradually build up to something reliable.

My typical workflow looks like this:

1. **Start simple**: Create a basic prompt through conversation and feedback (like pairing with a new colleague)
2. **Take notes**: Track what works and what doesn't through multiple iterations
3. **Ask for help**: Use the improvement prompt template once I like the general workflow
4. **Iterate together**: Usually takes 4-5 rounds of questions and answers
5. **Get the rewrite**: Claude incorporates everything we've discussed into a polished, reusable prompt

The magic happens in step 4. Claude asks questions I wouldn't have thought to ask myself. Some feel irrelevant (like "How does this connect to your mentoring philosophy?"—which I ignore). But others reveal blind spots in my thinking or assumptions I didn't know I was making.

This approach works because you're not trying to guess what makes a good prompt from scratch. You're building understanding through actual use, then asking your AI collaborator to help you codify what you've learned together.

## The Unexpected Side Effect

Here's what I didn't see coming: this habit of asking "What do you need from me to succeed?" started bleeding into my human interactions.

I caught myself writing GitHub issues differently. Instead of assuming the next developer would have all the context I had, I started including more background. I explained the "why" behind requests, not just the "what."

Take this issue I recently wrote for an [open-source project](https://github.com/sophiedeziel/octoprint/issues/157): instead of just saying "Add printer profiles support," I included acceptance criteria and implementation notes. It's written for both AI and human collaborators because good communication works for everyone.

My task definitions got clearer. My assumptions got smaller. I started realizing that some of the task definitions I'd written before were actually misleading. Not intentionally, but because I hadn't asked what information the reader needed to succeed.

## The Real Insight

The technique is useful, but the real revelation is bigger: **Feedback is a gift, and the best feedback comes from the people you're directly working with.**

Whether that's Claude helping me improve a prompt, or a junior developer telling me my GitHub issue lacks context, or a colleague pointing out an assumption I'm making—the pattern is the same. The people doing the work know what they need better than I do.

This simple question—"What do you need from me?"—has transformed how I approach every collaborative relationship. It shifts the dynamic from me guessing what others need to them telling me directly. It's more humble, more effective, and builds better working relationships.

## Try It Yourself

Next time you're working with AI on a repeated task, try asking "What information do you need from me to improve this prompt?" and see what happens. But more importantly, try the mindset shift. Instead of assuming you know what your collaborators (AI or human) need, ask them.

You might be surprised by what they tell you. And you might find yourself becoming a better collaborator in the process.

What would happen if you asked this question in your next code review, project kickoff, or one-on-one meeting?

### The Improvement Prompt Template

If you've made it this far and want to try this technique, here's the full template I use:

<CodeBlock language="markdown" title="prompt-improvement-template.md">
{PromptTemplate}
</CodeBlock>