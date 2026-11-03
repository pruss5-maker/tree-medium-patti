#!/usr/bin/env node

/**
 * Render "Root Signal", an original ambient loop for the KELA site.
 *
 * Dark, slow synth: a soft low hum, evolving pads, a soft heartbeat pulse, and
 * sparse echoing plucks like signals travelling through roots. Every sound is
 * synthesized here. No samples, loops, recordings, or third-party material.
 *
 * Output: assets/audio/root-signal.wav (encode to .ogg/.mp3 with ffmpeg).
 * The last bars are folded into the start so the file loops seamlessly.
 */

import { writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputPath = resolve(root, "assets/audio/root-signal.wav");
const SR = 44100;
const BPM = 64;
const BEAT = 60 / BPM;
const BARS = 32;                    // 8 chords x 4 bars
const LOOP = BARS * 4 * BEAT;       // seconds in one loop (~2 minutes)
const TAIL = 8;                     // extra seconds rendered, then folded into the start
const N = Math.ceil((LOOP + TAIL) * SR);
const L = new Float32Array(N);
const R = new Float32Array(N);

let seed = 0x4b454c41; // "KELA"
const rand = () => ((seed = (1664525 * seed + 1013904223) >>> 0) / 2 ** 32);
const hz = (m) => 440 * 2 ** ((m - 69) / 12);
const TAU = Math.PI * 2;
const pan = (p) => { const a = ((p + 1) * Math.PI) / 4; return [Math.cos(a), Math.sin(a)]; };

const add = (i, l, r) => { if (i >= 0 && i < N) { L[i] += l; R[i] += r; } };

// D minor world: Dm9, Bbmaj7, Gm9, A7sus, Dm9, Fmaj7, Gm9, Asus.
const CHORDS = [
  [50, 57, 60, 64, 65], [46, 53, 57, 62, 65], [43, 50, 53, 57, 62], [45, 52, 55, 59, 62],
  [50, 57, 60, 64, 65], [41, 48, 53, 57, 60], [43, 50, 53, 57, 62], [45, 52, 57, 59, 64],
];
const BARS_PER_CHORD = 4;
const chordAt = (bar) => CHORDS[Math.floor(bar / BARS_PER_CHORD) % CHORDS.length];

// 1) Drone: a steady, soft hum. Pure sines on D1 and A1 (plus a quiet octave) with a
//    very slow, tiny level drift. No filter sweep and no noise (those read as a passing jet).
{
  const voices = [[38, -0.2, 0.09], [38.03, 0.2, 0.09], [45, -0.1, 0.05], [45.02, 0.1, 0.05], [50, 0, 0.02]];
  for (const [m, p, g] of voices) {
    const f = hz(m); const [gl, gr] = pan(p);
    let ph = rand();
    for (let i = 0; i < N; i++) {
      const t = i / SR;
      ph += f / SR;
      const breathe = 0.85 + 0.15 * Math.sin((TAU * t) / 30);
      const v = Math.sin(TAU * ph) * g * breathe;
      add(i, v * gl, v * gr);
    }
  }
}

// 2) Pads: each chord swells in and out, soft triangle + sine, wide stereo, slow vibrato.
for (let bar = 0; bar < BARS + Math.ceil(TAIL / (4 * BEAT)); bar += BARS_PER_CHORD) {
  const chord = chordAt(bar);
  const start = bar * 4 * BEAT - 1.5;
  const dur = BARS_PER_CHORD * 4 * BEAT + 3;
  chord.forEach((m, k) => {
    const f = hz(m + 12 * (k === 0 ? 0 : 0)); const [gl, gr] = pan(-0.7 + (1.4 * k) / (chord.length - 1));
    const i0 = Math.max(0, Math.floor(start * SR)); const i1 = Math.min(N, Math.floor((start + dur) * SR));
    let ph = rand(), ph2 = rand();
    for (let i = i0; i < i1; i++) {
      const t = i / SR - start;
      const env = Math.sin(Math.PI * Math.min(1, t / dur)) ** 1.6;
      const vib = 1 + 0.0025 * Math.sin(TAU * 0.21 * t + k);
      ph += (f * vib) / SR; ph2 += (f * 1.003) / SR;
      const tri = 1 - 4 * Math.abs((ph % 1) - 0.5);
      const v = (0.6 * tri + 0.4 * Math.sin(TAU * ph2)) * env * (k === 0 ? 0.05 : 0.032);
      add(i, v * gl, v * gr);
    }
  });
}

// 3) Heartbeat: a soft sub thump on beats 1 and 1.75 of every bar (lub-dub).
for (let bar = 0; bar * 4 * BEAT < LOOP + TAIL; bar++) {
  for (const [off, g] of [[0, 1], [0.75, 0.6]]) {
    const s = (bar * 4 + off) * BEAT; const i0 = Math.floor(s * SR);
    let ph = 0;
    for (let j = 0; j < SR * 0.5; j++) {
      const t = j / SR; const f = 48 + 40 * Math.exp(-t * 30);
      ph += f / SR;
      const v = Math.sin(TAU * ph) * Math.exp(-t * 9) * 0.16 * g;
      add(i0 + j, v, v);
    }
  }
}

// 4) Root signals: sparse plucks from the current chord, with a ping-pong echo.
const plucks = [];
for (let step = 0; step * 0.5 * BEAT < LOOP + TAIL; step++) {
  const bar = Math.floor(step / 8);
  if (rand() > 0.28) continue;
  const chord = chordAt(bar);
  plucks.push({ s: step * 0.5 * BEAT, m: chord[1 + Math.floor(rand() * 4)] + 12, p: rand() * 1.4 - 0.7 });
}
for (const { s, m, p } of plucks) {
  const f = hz(m);
  for (let e = 0; e < 5; e++) {
    const s2 = s + e * BEAT * 0.75; const g = 0.075 * 0.5 ** e;
    const [gl, gr] = pan(e % 2 ? -p : p);
    const i0 = Math.floor(s2 * SR);
    let ph = 0;
    for (let j = 0; j < SR * 1.6; j++) {
      const t = j / SR;
      ph += f / SR;
      const v = (Math.sin(TAU * ph) + 0.25 * Math.sin(2 * TAU * ph)) * Math.exp(-t * 3.2) * g * (e ? 0.8 : 1);
      add(i0 + j, v * gl, v * gr);
    }
  }
}

// Fold the tail onto the start (crossfade) so the loop is seamless.
const loopN = Math.floor(LOOP * SR);
const tailN = N - loopN;
for (let j = 0; j < tailN; j++) {
  const fade = j / tailN;                 // tail fades out as it overlaps the start
  L[j] = L[j] * fade + L[loopN + j] * (1 - fade);
  R[j] = R[j] * fade + R[loopN + j] * (1 - fade);
}

// Gentle soft-clip and normalise to -3 dBFS.
let peak = 0;
for (let i = 0; i < loopN; i++) { L[i] = Math.tanh(L[i] * 1.2); R[i] = Math.tanh(R[i] * 1.2); peak = Math.max(peak, Math.abs(L[i]), Math.abs(R[i])); }
const norm = 0.707 / (peak || 1);

const buf = Buffer.alloc(44 + loopN * 4);
buf.write("RIFF", 0); buf.writeUInt32LE(36 + loopN * 4, 4); buf.write("WAVE", 8);
buf.write("fmt ", 12); buf.writeUInt32LE(16, 16); buf.writeUInt16LE(1, 20); buf.writeUInt16LE(2, 22);
buf.writeUInt32LE(SR, 24); buf.writeUInt32LE(SR * 4, 28); buf.writeUInt16LE(4, 32); buf.writeUInt16LE(16, 34);
buf.write("data", 36); buf.writeUInt32LE(loopN * 4, 40);
for (let i = 0; i < loopN; i++) {
  buf.writeInt16LE(Math.round(Math.max(-1, Math.min(1, L[i] * norm)) * 32767), 44 + i * 4);
  buf.writeInt16LE(Math.round(Math.max(-1, Math.min(1, R[i] * norm)) * 32767), 46 + i * 4);
}
writeFileSync(outputPath, buf);
console.log(`Rendered ${outputPath} (${LOOP.toFixed(1)}s loop)`);
