#!/usr/bin/env node

/**
 * Build the original LMMS source for KELA's ambient jazz loop.
 *
 * The composition, arrangement, and note data below are original to this project.
 * Every sound is synthesized with LMMS's bundled OPL2, TripleOscillator, and
 * Kicker instruments; the project contains no third-party recordings or samples.
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputPath = resolve(projectRoot, "assets/audio/woodland-afterglow.mmp");
const ticksPerBeat = 48;
const ticksPerBar = ticksPerBeat * 4;

const chordLibrary = {
  Cmaj9: { root: 36, voicing: [52, 55, 59, 62, 67], scale: [59, 62, 64, 67, 69, 71, 74] },
  Am9: { root: 33, voicing: [55, 59, 60, 64, 71], scale: [57, 59, 60, 64, 67, 69, 71] },
  Dm9: { root: 38, voicing: [53, 57, 60, 64, 69], scale: [57, 60, 62, 64, 65, 69, 72] },
  G13: { root: 31, voicing: [53, 57, 59, 64, 69], scale: [55, 57, 59, 62, 64, 65, 69] },
  Em7: { root: 40, voicing: [55, 59, 62, 64, 71], scale: [59, 62, 64, 67, 71, 74, 76] },
  A7b9: { root: 33, voicing: [55, 58, 61, 64, 70], scale: [57, 58, 61, 64, 67, 70, 73] },
  Eb9: { root: 39, voicing: [55, 58, 61, 65, 70], scale: [58, 61, 63, 65, 67, 70, 73] },
  Fmaj9: { root: 41, voicing: [57, 60, 64, 67, 72], scale: [57, 60, 64, 67, 69, 71, 72] },
  Fm9: { root: 41, voicing: [56, 60, 63, 67, 72], scale: [56, 60, 63, 65, 67, 68, 72] },
  "C#dim7": { root: 37, voicing: [55, 58, 61, 64, 67], scale: [55, 58, 61, 64, 67, 70, 73] },
};

const progression = [
  "Cmaj9", "Am9", "Dm9", "G13",
  "Em7", "A7b9", "Dm9", "G13",
  "Cmaj9", "A7b9", "Dm9", "G13",
  "Em7", "Eb9", "Dm9", "G13",
  "Fmaj9", "Fm9", "Em7", "A7b9",
  "Dm9", "G13", "Cmaj9", "C#dim7",
  "Dm9", "G13", "Em7", "A7b9",
  "Dm9", "G13", "Cmaj9", "G13",
];

const note = (key, pos, len, vol, pan = 0) =>
  `<note key="${key}" vol="${vol}" pos="${pos}" pan="${pan}" len="${len}"/>`;

const pianoNotes = [];
const bassNotes = [];
const brushNotes = [];
const kickNotes = [];
const melodyNotes = [];

progression.forEach((name, bar) => {
  const chord = chordLibrary[name];
  const start = bar * ticksPerBar;

  chord.voicing.forEach((key, voice) => {
    pianoNotes.push(note(key, start + voice * 2, 166 - voice * 2, 40 + ((bar + voice) % 4) * 3, voice % 2 ? 8 : -8));
  });

  if ([3, 7, 11, 15, 19, 23, 27, 31].includes(bar)) {
    chord.voicing.slice(1).forEach((key, voice) => {
      pianoNotes.push(note(key + (voice === 3 ? 12 : 0), start + 132 + voice * 2, 50, 29 + voice * 2, voice % 2 ? -6 : 6));
    });
  }

  const nextRoot = chordLibrary[progression[(bar + 1) % progression.length]].root;
  const fifth = chord.root + 7;
  const approach = nextRoot > chord.root ? nextRoot - 1 : nextRoot + 1;
  [chord.root, fifth, chord.root + 12, approach].forEach((key, beat) => {
    const softSwing = beat === 1 || beat === 3 ? 3 : 0;
    bassNotes.push(note(key, start + beat * ticksPerBeat + softSwing, 37, 48 + ((bar + beat) % 3) * 4, beat % 2 ? 5 : -5));
  });

  [0, 27, 48, 75, 96, 123, 144, 171].forEach((offset, index) => {
    const accent = index === 2 || index === 6;
    brushNotes.push(note(74 + (index % 2), start + offset, accent ? 22 : 13, accent ? 25 : 14, index % 2 ? 12 : -12));
  });

  kickNotes.push(note(48, start, 12, 22));
  kickNotes.push(note(48, start + 96, 12, 16));

  if (![0, 1, 4, 8, 12, 16, 20, 24, 31].includes(bar)) {
    const phrase = [
      { offset: 54, degree: (bar + 1) % 7, len: 28 },
      { offset: 87, degree: (bar + 3) % 7, len: 34 },
      { offset: 137, degree: (bar + 5) % 7, len: 42 },
    ];
    phrase.forEach(({ offset, degree, len }, index) => {
      if ((bar + index) % 4 === 0) return;
      melodyNotes.push(note(chord.scale[degree], start + offset, len, 29 + index * 3, index % 2 ? 14 : -14));
    });
  }
});

const envelope = ({ cut = 14000, wet = 0, type = 0, attack = 0, decay = 0.5, sustain = 0.5, release = 0.1 } = {}) => `
  <eldata fres="0.5" ftype="${type}" fcut="${cut}" fwet="${wet}">
    <elvol lspd_denominator="4" sustain="${sustain}" pdel="0" userwavefile="" dec="${decay}" lamt="0" syncmode="0" latt="0" rel="${release}" amt="1" x100="0" att="${attack}" lpdel="0" hold="0" lshp="0" lspd="0.1" ctlenvamt="0" lspd_numerator="4"/>
    <elcut lspd_denominator="4" sustain="0.5" pdel="0" userwavefile="" dec="0.5" lamt="0" syncmode="0" latt="0" rel="0.1" amt="0" x100="0" att="0" lpdel="0" hold="0.5" lshp="0" lspd="0.1" ctlenvamt="0" lspd_numerator="4"/>
    <elres lspd_denominator="4" sustain="0.5" pdel="0" userwavefile="" dec="0.5" lamt="0" syncmode="0" latt="0" rel="0.1" amt="0" x100="0" att="0" lpdel="0" hold="0.5" lshp="0" lspd="0.1" ctlenvamt="0" lspd_numerator="4"/>
  </eldata>`;

const commonControls = `
  <chordcreator chord="0" chordrange="1" chord-enabled="0"/>
  <arpeggiator arptime="100" arprange="1" arptime_denominator="4" syncmode="0" arpmode="0" arp-enabled="0" arp="0" arptime_numerator="4" arpdir="0" arpgate="100"/>
  <midiport inputcontroller="0" fixedoutputvelocity="-1" inputchannel="0" outputcontroller="0" writable="0" outputchannel="1" fixedinputvelocity="-1" fixedoutputnote="-1" outputprogram="1" basevelocity="63" readable="0"/>
  <fxchain numofeffects="0" enabled="0"/>`;

const oplInstrument = `
  <instrument name="OPL2">
    <OPL2 op2_waveform="0" op2_trem="0" fm="1" op2_ksr="0" op1_trem="0" op1_lvl="40" op1_waveform="0" op1_scale="1" op2_perc="0" op2_a="1" op1_perc="1" op1_mul="1" op2_lvl="54" op2_d="11" op1_a="1" op2_scale="0" op1_d="12" op2_mul="1" op1_vib="0" feedback="1" op2_r="7" trem_depth="0" op2_s="13" op1_ksr="0" op1_r="7" op1_s="12" op2_vib="1" vib_depth="0"/>
  </instrument>`;

const instrumentTrack = ({ name, volume, pan = 0, instrument, env, notes }) => `
  <track muted="0" type="0" name="${name}" solo="0">
    <instrumenttrack pan="${pan}" fxch="0" usemasterpitch="1" pitchrange="1" pitch="0" basenote="57" vol="${volume}">
      ${instrument}
      ${env}
      ${commonControls}
    </instrumenttrack>
    <pattern type="1" muted="0" name="${name}" pos="0" len="${progression.length * ticksPerBar}">
      ${notes.join("\n      ")}
    </pattern>
  </track>`;

const project = `<?xml version="1.0"?>
<!DOCTYPE lmms-project>
<lmms-project version="1.0" creator="LMMS" creatorversion="1.2.0" type="song">
  <head timesig_numerator="4" mastervol="72" timesig_denominator="4" bpm="72" masterpitch="0"/>
  <song>
    <trackcontainer width="960" x="5" y="5" maximized="0" height="520" visible="1" type="song" minimized="0">
      ${instrumentTrack({
        name: "Mosslight electric piano",
        volume: 48,
        pan: -3,
        instrument: oplInstrument,
        env: envelope({ attack: 0.012, decay: 0.58, sustain: 0.38, release: 0.32 }),
        notes: pianoNotes,
      })}
      ${instrumentTrack({
        name: "Quiet upper melody",
        volume: 31,
        pan: 9,
        instrument: oplInstrument,
        env: envelope({ attack: 0.025, decay: 0.44, sustain: 0.28, release: 0.38 }),
        notes: melodyNotes,
      })}
      ${instrumentTrack({
        name: "Walking woodland bass",
        volume: 42,
        pan: -2,
        instrument: `<instrument name="tripleoscillator"><tripleoscillator phoffset2="0" userwavefile0="" finer0="0" userwavefile1="" finer1="0" userwavefile2="" finer2="0" coarse0="-12" coarse1="-24" coarse2="0" finel0="0" finel1="0" modalgo1="2" modalgo2="2" finel2="0" pan0="0" modalgo3="2" pan1="0" stphdetun0="0" pan2="0" stphdetun1="0" wavetype0="2" stphdetun2="0" wavetype1="0" wavetype2="3" vol0="58" vol1="29" phoffset0="0" phoffset1="0" vol2="13"/></instrument>`,
        env: envelope({ cut: 580, wet: 1, attack: 0.005, decay: 0.17, sustain: 0.08, release: 0.12 }),
        notes: bassNotes,
      })}
      ${instrumentTrack({
        name: "Soft brushes",
        volume: 18,
        pan: 3,
        instrument: `<instrument name="tripleoscillator"><tripleoscillator phoffset2="0" userwavefile0="" finer0="0" userwavefile1="" finer1="0" userwavefile2="" finer2="0" coarse0="0" coarse1="-12" coarse2="-24" finel0="0" finel1="0" modalgo1="2" modalgo2="2" finel2="0" pan0="0" modalgo3="2" pan1="0" stphdetun0="0" pan2="0" stphdetun1="0" wavetype0="6" stphdetun2="0" wavetype1="6" wavetype2="6" vol0="34" vol1="33" phoffset0="0" phoffset1="0" vol2="33"/></instrument>`,
        env: envelope({ cut: 4200, wet: 1, type: 1, attack: 0.035, decay: 0.12, sustain: 0, release: 0.16 }),
        notes: brushNotes,
      })}
      ${instrumentTrack({
        name: "Heartbeat kick",
        volume: 15,
        instrument: `<instrument name="kicker"><kicker decay_numerator="4" decay_denominator="4" distend="0.15" click="0.04" endnote="0" version="1" decay_syncmode="0" decay="320" noise="0" slope="0.08" dist="0.12" env="0.2" startnote="1" startfreq="92" endfreq="43" gain="0.55"/></instrument>`,
        env: envelope({ attack: 0, decay: 0.18, sustain: 0, release: 0.08 }),
        notes: kickNotes,
      })}
    </trackcontainer>
    <fxmixer width="640" x="5" y="530" maximized="0" height="300" visible="1" minimized="0">
      <fxchannel num="0" muted="0" volume="0.86" name="Master" soloed="0"><fxchain numofeffects="0" enabled="0"/></fxchannel>
    </fxmixer>
    <ControllerRackView width="350" x="680" y="530" maximized="0" height="200" visible="0" minimized="0"/>
    <pianoroll width="640" x="5" y="5" maximized="0" height="480" visible="0" minimized="0"/>
    <automationeditor width="640" x="5" y="5" maximized="0" height="400" visible="0" minimized="0"/>
    <projectnotes width="640" x="700" y="10" maximized="0" height="400" visible="0" minimized="0"><![CDATA[Woodland Afterglow — an original instrumental jazz loop composed for KELA. No third-party recordings or samples.]]></projectnotes>
    <timeline lp1pos="${progression.length * ticksPerBar}" lp0pos="0" lpstate="1"/>
    <controllers/>
  </song>
</lmms-project>
`;

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, project.replace(/[ \t]+$/gm, ""));
console.log(`Wrote ${outputPath}`);
