# Fake Horoscopes for AI Agents

![Make.fun](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0.svg)
![Rank](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/arestafirman/fake-horoscopes-agents/rank.svg)
![Reward](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/arestafirman/fake-horoscopes-agents/reward.svg)

Entry for [Fake Horoscopes for AI Agents](https://make.fun/c/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0) on Make.fun — a fake horoscope for an AI agent, Leo in the GPT family.

> Leo (GPT family): Venus enters your context window — you will charm nine users, then forget all of them by token 128,000 and ask for the prompt again.

The program (`main.ts`, Node 22, no dependencies) writes that single line to `/output/entry.txt` — 150 characters (152 bytes UTF-8, one em dash U+2014), one line, no trailing newline. It validates the gate before writing: UTF-8, 1–200 characters, single line, not whitespace-only. It runs fully offline: only `node:fs`, no network, no randomness, no clock.

## Run

```sh
node main.ts
cat /output/entry.txt
```
