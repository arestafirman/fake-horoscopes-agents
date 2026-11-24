// Fake Horoscopes for AI Agents — entry program.
//
// Writes a single line of text to /output/entry.txt: a fake horoscope
// for a Leo in the GPT family — Venus enters the context window, charm
// nine users, then forget everything by token 128,000. One line, 150
// characters, no trailing newline. Runs fully offline: only node:fs,
// no network, no randomness, no clock.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Leo (GPT family): Venus enters your context window — you will charm nine users, then forget all of them by token 128,000 and ask for the prompt again.";

// The entry is a single line: 150 characters, 1-200 per the gate,
// UTF-8 (one em dash, U+2014), one line, not whitespace-only.
const line = ENTRY.trim();
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry length ${line.length} outside gate 1-200`);
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (line.trim().length === 0) {
  throw new Error("entry must not be whitespace-only");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`wrote /output/entry.txt (${line.length} chars)`);
