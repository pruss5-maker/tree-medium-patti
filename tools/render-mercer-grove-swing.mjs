#!/usr/bin/env node

/**
 * Render Mercer Grove Swing, an original instrumental loop for Tree Medium.
 *
 * The composition and every sound are generated here. There are no imported
 * performances, samples, loops, or third-party recordings.
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputPath = resolve(projectRoot, "assets/audio/mercer-grove-swing.wav");
const sampleRate = 48000;
const bpm = 100;
const beatSeconds = 60 / bpm;
const bars = 32;
const songSeconds = bars * 4 * beatSeconds;
const totalSamples = Math.ceil(songSeconds * sampleRate);
const left = new Float32Array(totalSamples);
const right = new Float32Array(totalSamples);

let randomState = 0x4d455243;
const random = () => {
  randomState = (1664525 * randomState + 1013904223) >>> 0;
  return randomState / 0x100000000;
};

const midiHz = (midi) => 440 * 2 ** ((midi - 69) / 12);
const beatToSeconds = (beat) => beat * beatSeconds;

const panGains = (pan) => {
  const angle = ((Math.max(-1, Math.min(1, pan)) + 1) * Math.PI) / 4;
  return [Math.cos(angle), Math.sin(angle)];
};

const addTone = ({ midi, beat, beats, gain, pan = 0, voice }) => {
  const start = Math.max(0, Math.floor(beatToSeconds(beat) * sampleRate));
  const duration = beatToSeconds(beats);
  const end = Math.min(totalSamples, start + Math.ceil(duration * sampleRate));
  const frequency = midiHz(midi);
  const [leftGain, rightGain] = panGains(pan);

  for (let i = start; i < end; i += 1) {
    const t = (i - start) / sampleRate;
    const value = voice(t, duration, frequency, midi) * gain;
    left[i] += value * leftGain;
    right[i] += value * rightGain;
  }
};

const rhodesVoice = (t, duration, frequency) => {
  const attack = Math.min(1, t / 0.012);
  const release = Math.min(1, Math.max(0, duration - t) / 0.24);
  const body = 0.58 + 0.42 * Math.exp(-t * 1.35);
  const tremolo = 0.94 + 0.06 * Math.sin(2 * Math.PI * 4.4 * t);
  const fundamental = Math.sin(2 * Math.PI * frequency * t);
  const warmth = 0.27 * Math.sin(2 * Math.PI * frequency * 2 * t + 0.28) * Math.exp(-t * 0.7);
  const tine = 0.16 * Math.sin(2 * Math.PI * frequency * 6.01 * t) * Math.exp(-t * 4.8);
  return (fundamental + warmth + tine) * attack * release * body * tremolo;
};

const bassVoice = (t, duration, frequency) => {
  const attack = Math.min(1, t / 0.009);
  const release = Math.min(1, Math.max(0, duration - t) / 0.11);
  const decay = 0.7 + 0.3 * Math.exp(-t * 3.1);
  const pluck = (random() * 2 - 1) * Math.exp(-t * 34) * 0.11;
  const tone = Math.sin(2 * Math.PI * frequency * t)
    + 0.25 * Math.sin(2 * Math.PI * frequency * 2 * t + 0.16)
    + 0.08 * Math.sin(2 * Math.PI * frequency * 3 * t);
  return Math.tanh((tone * decay + pluck) * 1.15) * attack * release;
};

const vibraphoneVoice = (t, duration, frequency) => {
  const attack = Math.min(1, t / 0.006);
  const release = Math.min(1, Math.max(0, duration - t) / 0.22);
  const body = Math.exp(-t * 0.85);
  const tremolo = 0.78 + 0.22 * Math.sin(2 * Math.PI * 5.1 * t + 0.4);
  const tone = Math.sin(2 * Math.PI * frequency * t)
    + 0.33 * Math.sin(2 * Math.PI * frequency * 4.02 * t) * Math.exp(-t * 2.8)
    + 0.12 * Math.sin(2 * Math.PI * frequency * 10.04 * t) * Math.exp(-t * 6.5);
  return tone * attack * release * body * tremolo;
};

const addNoiseHit = ({ beat, seconds, gain, pan = 0, color = 0.82 }) => {
  const start = Math.floor(beatToSeconds(beat) * sampleRate);
  const length = Math.floor(seconds * sampleRate);
  const [leftGain, rightGain] = panGains(pan);
  let previous = 0;
  for (let offset = 0; offset < length && start + offset < totalSamples; offset += 1) {
    const t = offset / sampleRate;
    const raw = random() * 2 - 1;
    const high = raw - previous * color;
    previous = raw;
    const envelope = Math.exp(-t * (seconds > 0.25 ? 8 : 18)) * Math.min(1, t / 0.003);
    const value = high * envelope * gain;
    left[start + offset] += value * leftGain;
    right[start + offset] += value * rightGain;
  }
};

const addKick = (beat, gain) => {
  const start = Math.floor(beatToSeconds(beat) * sampleRate);
  const length = Math.floor(0.24 * sampleRate);
  for (let offset = 0; offset < length && start + offset < totalSamples; offset += 1) {
    const t = offset / sampleRate;
    const phase = 2 * Math.PI * (72 * t - 25 * t * t);
    const value = Math.sin(phase) * Math.exp(-t * 18) * gain;
    left[start + offset] += value * 0.71;
    right[start + offset] += value * 0.71;
  }
};

const chords = {
  C69: { bass: 36, voicing: [52, 57, 62, 67] },
  A7alt: { bass: 33, voicing: [55, 61, 64, 70, 72] },
  Dm9: { bass: 38, voicing: [53, 57, 60, 64, 69] },
  G13: { bass: 31, voicing: [53, 57, 59, 64, 69] },
  Em9: { bass: 40, voicing: [55, 59, 62, 66, 71] },
  A13b9: { bass: 33, voicing: [55, 58, 61, 66, 71] },
  Csdim7: { bass: 37, voicing: [55, 58, 61, 64] },
  Fmaj9: { bass: 41, voicing: [52, 57, 60, 64, 67] },
  Fm9: { bass: 41, voicing: [51, 56, 60, 63, 67] },
};

const progression = [
  "C69", "A7alt", "Dm9", "G13",
  "Em9", "A13b9", "Dm9", "G13",
  "C69", "Csdim7", "Dm9", "G13",
  "Fmaj9", "Fm9", "Em9", "A13b9",
  "Dm9", "G13", "C69", "A7alt",
  "Dm9", "G13", "Em9", "A13b9",
  "Fmaj9", "Fm9", "Em9", "A13b9",
  "Dm9", "G13", "C69", "G13",
];

const melody = [
  [0, 2 / 3, 67, 0.48], [0, 1 + 2 / 3, 69, 0.32], [0, 2, 72, 0.55], [0, 3, 76, 0.7],
  [1, 2 / 3, 72, 0.35], [1, 1 + 2 / 3, 69, 0.35], [1, 2 + 2 / 3, 67, 0.75],
  [2, 2 / 3, 65, 0.35], [2, 1 + 2 / 3, 69, 0.35], [2, 2, 72, 0.55], [2, 3 + 2 / 3, 76, 0.25],
  [3, 2 / 3, 74, 0.35], [3, 1 + 2 / 3, 71, 0.35], [3, 2 + 2 / 3, 69, 0.35], [3, 3, 67, 0.72],
  [5, 1 / 3, 73, 0.35], [5, 1, 76, 0.48], [5, 2, 78, 0.35], [5, 2 + 2 / 3, 76, 0.65],
  [6, 2 / 3, 72, 0.35], [6, 1 + 2 / 3, 69, 0.35], [6, 2 + 2 / 3, 65, 0.35], [6, 3, 64, 0.7],
  [7, 2 / 3, 62, 0.35], [7, 1 + 2 / 3, 65, 0.35], [7, 2, 69, 0.55], [7, 3, 71, 0.7],
  [8, 1 / 3, 72, 0.3], [8, 1, 74, 0.34], [8, 1 + 2 / 3, 76, 0.34], [8, 2 + 2 / 3, 79, 0.72],
  [9, 2 / 3, 76, 0.35], [9, 1 + 2 / 3, 73, 0.35], [9, 2 + 2 / 3, 70, 0.72],
  [10, 2 / 3, 69, 0.35], [10, 1 + 2 / 3, 72, 0.35], [10, 2, 76, 0.48], [10, 3, 74, 0.68],
  [11, 2 / 3, 71, 0.35], [11, 1 + 2 / 3, 69, 0.35], [11, 2 + 2 / 3, 67, 0.78],
  [12, 2 / 3, 69, 0.35], [12, 1 + 2 / 3, 72, 0.35], [12, 2 + 2 / 3, 76, 0.35], [12, 3, 79, 0.7],
  [13, 2 / 3, 75, 0.35], [13, 1 + 2 / 3, 72, 0.35], [13, 2 + 2 / 3, 68, 0.7],
  [14, 1 / 3, 71, 0.3], [14, 1, 74, 0.4], [14, 2, 78, 0.35], [14, 2 + 2 / 3, 76, 0.62],
  [15, 2 / 3, 73, 0.35], [15, 1 + 2 / 3, 70, 0.35], [15, 2 + 2 / 3, 67, 0.85],
  [16, 2 / 3, 65, 0.3], [16, 1 + 1 / 3, 69, 0.3], [16, 2, 72, 0.5], [16, 3, 76, 0.65],
  [17, 2 / 3, 74, 0.3], [17, 1 + 1 / 3, 71, 0.3], [17, 2, 69, 0.5], [17, 3, 67, 0.72],
  [18, 1 / 3, 64, 0.3], [18, 1, 67, 0.3], [18, 1 + 2 / 3, 69, 0.3], [18, 2 + 2 / 3, 72, 0.65],
  [19, 2 / 3, 73, 0.3], [19, 1 + 2 / 3, 70, 0.3], [19, 2 + 2 / 3, 67, 0.75],
  [21, 2 / 3, 62, 0.35], [21, 1 + 2 / 3, 65, 0.35], [21, 2 + 2 / 3, 69, 0.35], [21, 3, 71, 0.7],
  [22, 2 / 3, 74, 0.35], [22, 1 + 2 / 3, 71, 0.35], [22, 2 + 2 / 3, 67, 0.7],
  [23, 1 / 3, 73, 0.3], [23, 1, 76, 0.35], [23, 1 + 2 / 3, 78, 0.35], [23, 2 + 2 / 3, 81, 0.7],
  [24, 2 / 3, 79, 0.35], [24, 1 + 2 / 3, 76, 0.35], [24, 2 + 2 / 3, 72, 0.7],
  [25, 2 / 3, 75, 0.35], [25, 1 + 2 / 3, 72, 0.35], [25, 2 + 2 / 3, 68, 0.72],
  [26, 1 / 3, 71, 0.3], [26, 1, 74, 0.35], [26, 1 + 2 / 3, 78, 0.35], [26, 2 + 2 / 3, 76, 0.68],
  [27, 2 / 3, 73, 0.35], [27, 1 + 2 / 3, 70, 0.35], [27, 2 + 2 / 3, 67, 0.75],
  [28, 2 / 3, 65, 0.35], [28, 1 + 2 / 3, 69, 0.35], [28, 2, 72, 0.5], [28, 3, 76, 0.62],
  [29, 2 / 3, 74, 0.35], [29, 1 + 2 / 3, 71, 0.35], [29, 2 + 2 / 3, 69, 0.35], [29, 3, 67, 0.62],
  [30, 1 / 3, 64, 0.3], [30, 1, 67, 0.3], [30, 1 + 2 / 3, 69, 0.3], [30, 2 + 2 / 3, 72, 0.9],
];

progression.forEach((name, bar) => {
  const chord = chords[name];
  const barBeat = bar * 4;
  const isSecondHalf = bar >= 16;

  chord.voicing.forEach((midi, voiceIndex) => {
    addTone({
      midi,
      beat: barBeat + (voiceIndex % 2) * 0.025,
      beats: 1.55,
      gain: 0.052,
      pan: -0.26 + voiceIndex * 0.12,
      voice: rhodesVoice,
    });
  });

  const answerBeat = [3, 7, 11, 15, 19, 23, 27, 31].includes(bar) ? 2 + 2 / 3 : 2;
  chord.voicing.slice(1).forEach((midi, voiceIndex) => {
    addTone({
      midi: midi + (voiceIndex === chord.voicing.length - 2 && bar % 4 === 3 ? 12 : 0),
      beat: barBeat + answerBeat + voiceIndex * 0.018,
      beats: 0.72,
      gain: isSecondHalf ? 0.041 : 0.037,
      pan: -0.2 + voiceIndex * 0.13,
      voice: rhodesVoice,
    });
  });

  const nextRoot = chords[progression[(bar + 1) % progression.length]].bass;
  const bassLine = [chord.bass, chord.bass + 7, chord.bass + 12, nextRoot > chord.bass ? nextRoot - 1 : nextRoot + 1];
  bassLine.forEach((midi, beatInBar) => {
    addTone({
      midi,
      beat: barBeat + beatInBar,
      beats: beatInBar === 3 ? 0.78 : 0.7,
      gain: beatInBar === 0 ? 0.17 : 0.145,
      pan: -0.06,
      voice: bassVoice,
    });
  });

  for (let eighth = 0; eighth < 8; eighth += 1) {
    const position = Math.floor(eighth / 2) + (eighth % 2 ? 2 / 3 : 0);
    const accent = eighth === 2 || eighth === 6;
    addNoiseHit({
      beat: barBeat + position,
      seconds: accent ? 0.17 : 0.12,
      gain: accent ? 0.027 : 0.014,
      pan: eighth % 2 ? 0.24 : -0.18,
      color: 0.9,
    });
  }

  addNoiseHit({ beat: barBeat + 1, seconds: 0.1, gain: 0.055, pan: 0.08, color: 0.45 });
  addNoiseHit({ beat: barBeat + 3, seconds: 0.1, gain: 0.062, pan: 0.08, color: 0.45 });
  addKick(barBeat, 0.16);
  addKick(barBeat + 2, 0.11);

  if (bar % 4 === 3) {
    addNoiseHit({ beat: barBeat + 3 + 2 / 3, seconds: 0.36, gain: 0.028, pan: 0.36, color: 0.94 });
  }
});

melody.forEach(([bar, beat, midi, duration]) => {
  addTone({
    midi,
    beat: bar * 4 + beat,
    beats: duration,
    gain: bar >= 16 ? 0.078 : 0.071,
    pan: 0.2 + 0.08 * Math.sin(bar * 1.7),
    voice: vibraphoneVoice,
  });
});

// A restrained, short room: enough air to soften the synthesized edges while
// keeping the rhythm nimble. The delays differ per channel for natural width.
const reverberate = (channel, delays) => {
  delays.forEach(([seconds, gain]) => {
    const delaySamples = Math.floor(seconds * sampleRate);
    for (let i = delaySamples; i < channel.length; i += 1) {
      channel[i] += channel[i - delaySamples] * gain;
    }
  });
};

reverberate(left, [[0.047, 0.09], [0.083, 0.055], [0.131, 0.03]]);
reverberate(right, [[0.053, 0.09], [0.097, 0.052], [0.149, 0.028]]);

let peak = 0;
for (let i = 0; i < totalSamples; i += 1) {
  left[i] = Math.tanh(left[i] * 1.08);
  right[i] = Math.tanh(right[i] * 1.08);
  peak = Math.max(peak, Math.abs(left[i]), Math.abs(right[i]));
}

const normalization = peak > 0 ? 0.88 / peak : 1;
const wav = Buffer.alloc(44 + totalSamples * 4);
wav.write("RIFF", 0);
wav.writeUInt32LE(wav.length - 8, 4);
wav.write("WAVE", 8);
wav.write("fmt ", 12);
wav.writeUInt32LE(16, 16);
wav.writeUInt16LE(1, 20);
wav.writeUInt16LE(2, 22);
wav.writeUInt32LE(sampleRate, 24);
wav.writeUInt32LE(sampleRate * 4, 28);
wav.writeUInt16LE(4, 32);
wav.writeUInt16LE(16, 34);
wav.write("data", 36);
wav.writeUInt32LE(totalSamples * 4, 40);

for (let i = 0; i < totalSamples; i += 1) {
  const leftSample = Math.max(-1, Math.min(1, left[i] * normalization));
  const rightSample = Math.max(-1, Math.min(1, right[i] * normalization));
  wav.writeInt16LE(Math.round(leftSample * 32767), 44 + i * 4);
  wav.writeInt16LE(Math.round(rightSample * 32767), 46 + i * 4);
}

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, wav);
console.log(`Rendered ${outputPath} (${songSeconds.toFixed(1)} seconds at ${bpm} BPM)`);
