<!DOCTYPE html>
<html lang="zh-TW">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>安心通 — 校園霸凌通報系統</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;600;700&family=Noto+Sans+TC:wght@300;400;500;600&display=swap" rel="stylesheet" />
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --red:       #B83232;
  --red-hover: #9A2A2A;
  --red-pale:  #F9EFEF;
  --navy:      #1C2540;
  --navy-mid:  #28345A;
  --gray-50:   #F8F8F7;
  --gray-100:  #F0F0EE;
  --gray-200:  #E2E2DF;
  --gray-400:  #9C9C97;
  --gray-500:  #72726C;
  --gray-700:  #3E3E3A;
  --gray-900:  #1A1A17;
  --white:     #FFFFFF;
  --green:     #1C6B45;
  --green-pale:#EBF5EF;
  --font-serif: 'Noto Serif TC', serif;
  --font-sans:  'Noto Sans TC', sans-serif;
}

html { scroll-behavior: smooth; }

body {
  font-family: var(--font-sans);
  background: var(--white);
  color: var(--gray-900);
  min-height: 100vh;
  font-size: 15px;
  line-height: 1.7;
}

/* NAV */
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 200;
  background: var(--navy);
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 6%;
  height: 60px;
}
.nav-logo {
  font-family: var(--font-serif);
  font-size: 18px; font-weight: 700;
  color: var(--white);
  letter-spacing: 0.06em;
  cursor: pointer;
}
.nav-links { display: flex; gap: 36px; align-items: center; }
.nav-links a {
  color: rgba(255,255,255,0.5);
  text-decoration: none; font-size: 13px; font-weight: 400;
  transition: color 0.2s;
}
.nav-links a:hover { color: rgba(255,255,255,0.9); }
.nav-report-btn {
  background: var(--red);
  color: var(--white);
  border: none; border-radius: 4px;
  padding: 8px 20px;
  font-size: 13px; font-weight: 500;
  font-family: var(--font-sans);
  cursor: pointer;
  transition: background 0.2s;
}
.nav-report-btn:hover { background: var(--red-hover); }

/* PAGE SWITCH */
.page { display: none; }
.page.active { display: block; }

/* HOME */
#home { padding-top: 60px; }

.hero {
  background: var(--navy);
  padding: 120px 6% 100px;
  min-height: 88vh;
  display: flex; flex-direction: column; justify-content: center;
}
.hero-eyebrow {
  font-size: 11px; font-weight: 500;
  letter-spacing: 0.18em; text-transform: uppercase;
  color: rgba(255,255,255,0.3);
  margin-bottom: 28px;
  animation: up 0.5s ease both;
}
.hero h1 {
  font-family: var(--font-serif);
  font-size: clamp(38px, 5.5vw, 70px);
  font-weight: 700; line-height: 1.2;
  color: var(--white);
  margin-bottom: 28px;
  animation: up 0.5s 0.08s ease both;
}
.hero h1 em {
  font-style: normal;
  color: rgba(255,255,255,0.3);
}
.hero-sub {
  font-size: 16px; line-height: 1.85;
  color: rgba(255,255,255,0.45);
  max-width: 480px;
  margin-bottom: 52px;
  font-weight: 300;
  animation: up 0.5s 0.16s ease both;
}
.hero-actions {
  display: flex; gap: 14px;
  animation: up 0.5s 0.24s ease both;
}
.btn-hero-primary {
  background: var(--red);
  color: var(--white);
  border: none; border-radius: 4px;
  padding: 15px 36px;
  font-size: 15px; font-weight: 600;
  font-family: var(--font-sans);
  cursor: pointer;
  transition: background 0.2s;
}
.btn-hero-primary:hover { background: var(--red-hover); }
.btn-hero-ghost {
  background: transparent;
  color: rgba(255,255,255,0.55);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 4px;
  padding: 15px 36px;
  font-size: 15px; font-weight: 400;
  font-family: var(--font-sans);
  cursor: pointer;
  transition: all 0.2s;
}
.btn-hero-ghost:hover { border-color: rgba(255,255,255,0.35); color: rgba(255,255,255,0.85); }

.hero-divider {
  margin-top: 80px;
  border-top: 1px solid rgba(255,255,255,0.07);
  padding-top: 40px;
  display: flex; gap: 60px;
  animation: up 0.5s 0.32s ease both;
}
.hero-stat-num {
  font-family: var(--font-serif);
  font-size: 28px; font-weight: 700;
  color: var(--white);
}
.hero-stat-label { font-size: 12px; color: rgba(255,255,255,0.28); margin-top: 4px; }

@keyframes up {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

.section { padding: 100px 6%; }
.section-alt { background: var(--gray-50); }

.eyebrow {
  font-size: 11px; font-weight: 600;
  letter-spacing: 0.16em; text-transform: uppercase;
  color: var(--red); margin-bottom: 18px;
}
.section-h {
  font-family: var(--font-serif);
  font-size: clamp(26px, 3.5vw, 42px);
  font-weight: 700; line-height: 1.3;
  color: var(--navy); margin-bottom: 18px;
}
.section-lead {
  font-size: 15px; color: var(--gray-500);
  max-width: 500px; line-height: 1.85;
  margin-bottom: 60px; font-weight: 300;
}

.type-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  overflow: hidden;
  background: var(--gray-200);
}
.type-item {
  background: var(--white);
  padding: 32px 28px;
  transition: background 0.2s;
}
.type-item:hover { background: var(--gray-50); }
.type-tag {
  display: inline-block;
  font-size: 10px; font-weight: 600;
  letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--red);
  border: 1px solid rgba(184,50,50,0.25);
  border-radius: 2px;
  padding: 3px 8px;
  margin-bottom: 16px;
}
.type-item h3 { font-size: 15px; font-weight: 600; color: var(--navy); margin-bottom: 8px; }
.type-item p  { font-size: 13px; color: var(--gray-500); line-height: 1.75; }

.process-section { background: var(--navy); padding: 100px 6%; }
.process-section .eyebrow { color: rgba(255,255,255,0.28); }
.process-section .section-h { color: var(--white); }
.process-section .section-lead { color: rgba(255,255,255,0.35); }

.process-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1px;
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 8px;
  overflow: hidden;
  background: rgba(255,255,255,0.07);
}
.process-item { background: var(--navy); padding: 36px 28px; }
.process-num {
  font-family: var(--font-serif);
  font-size: 13px; font-weight: 700;
  color: rgba(255,255,255,0.18);
  letter-spacing: 0.06em; margin-bottom: 20px;
}
.process-item h3 { font-size: 15px; font-weight: 600; color: var(--white); margin-bottom: 10px; }
.process-item p  { font-size: 13px; color: rgba(255,255,255,0.35); line-height: 1.75; }

.cta-section {
  padding: 100px 6%;
  border-top: 1px solid var(--gray-200);
  display: flex; justify-content: space-between; align-items: center;
  gap: 40px; flex-wrap: wrap;
}
.cta-left .section-h { margin-bottom: 10px; }
.cta-left p { font-size: 15px; color: var(--gray-500); font-weight: 300; }
.btn-cta {
  background: var(--navy); color: var(--white);
  border: none; border-radius: 4px;
  padding: 16px 44px;
  font-size: 15px; font-weight: 600;
  font-family: var(--font-sans);
  cursor: pointer; white-space: nowrap;
  transition: background 0.2s;
}
.btn-cta:hover { background: var(--navy-mid); }

footer {
  background: var(--gray-100);
  border-top: 1px solid var(--gray-200);
  padding: 32px 6%;
  display: flex; justify-content: space-between; align-items: center;
  flex-wrap: wrap; gap: 12px;
}
.footer-logo { font-family: var(--font-serif); font-size: 15px; font-weight: 700; color: var(--navy); }
.footer-right { font-size: 12px; color: var(--gray-400); text-align: right; line-height: 1.8; }

/* REPORT PAGE */
#report { padding-top: 60px; min-height: 100vh; background: var(--gray-50); }

.report-header {
  background: var(--white);
  border-bottom: 1px solid var(--gray-200);
  padding: 40px 6%;
}
.back-link {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 13px; color: var(--gray-400);
  cursor: pointer; background: none; border: none;
  font-family: var(--font-sans);
  transition: color 0.2s; margin-bottom: 20px;
}
.back-link:hover { color: var(--gray-700); }
.report-header h1 {
  font-family: var(--font-serif);
  font-size: 26px; font-weight: 700;
  color: var(--navy); margin-bottom: 6px;
}
.report-header p { font-size: 13px; color: var(--gray-400); }

.report-container { max-width: 720px; margin: 0 auto; padding: 48px 5% 100px; }

.step-bar { display: flex; align-items: flex-start; margin-bottom: 48px; }
.sbi { flex: 1; position: relative; }
.sbi:not(:last-child)::after {
  content: '';
  position: absolute;
  top: 5px; left: calc(50% + 14px); right: calc(-50% + 14px);
  height: 1px; background: var(--gray-200); transition: background 0.3s;
}
.sbi.done:not(:last-child)::after { background: var(--green); }
.sbi-dot {
  width: 10px; height: 10px; border-radius: 50%;
  background: var(--gray-200);
  margin: 0 auto 8px;
  transition: background 0.3s; position: relative; z-index: 1;
}
.sbi.active .sbi-dot { background: var(--red); }
.sbi.done .sbi-dot   { background: var(--green); }
.sbi-label { display: block; text-align: center; font-size: 11px; color: var(--gray-400); font-weight: 500; }
.sbi.active .sbi-label { color: var(--red); }
.sbi.done .sbi-label   { color: var(--green); }

.fp { display: none; }
.fp.active { display: block; }

.block-title {
  font-size: 11px; font-weight: 600;
  letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--gray-400);
  padding-bottom: 12px;
  border-bottom: 1px solid var(--gray-200);
  margin-bottom: 20px;
}
.card {
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  padding: 28px; margin-bottom: 20px;
}
.row2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.field { margin-bottom: 20px; }
.field:last-child { margin-bottom: 0; }

label { display: block; font-size: 12px; font-weight: 600; letter-spacing: 0.04em; color: var(--gray-500); margin-bottom: 8px; }
.req { color: var(--red); margin-left: 2px; }

input[type="text"], input[type="date"], input[type="tel"], textarea {
  width: 100%;
  font-family: var(--font-sans);
  font-size: 14px; color: var(--gray-900);
  background: var(--gray-50);
  border: 1px solid var(--gray-200);
  border-radius: 5px; padding: 11px 14px;
  outline: none; transition: border-color 0.15s, background 0.15s;
}
input:focus, textarea:focus { border-color: var(--navy-mid); background: var(--white); }
textarea { min-height: 110px; resize: vertical; line-height: 1.7; }
.hint { font-size: 11px; color: var(--gray-400); margin-top: 5px; }

.chips { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 6px; }
.chip {
  padding: 7px 16px; border-radius: 3px;
  font-size: 13px; font-weight: 400;
  border: 1px solid var(--gray-200);
  background: var(--white); color: var(--gray-500);
  cursor: pointer; transition: all 0.15s; user-select: none;
}
.chip:hover { border-color: var(--gray-400); color: var(--gray-700); }
.chip.on { border-color: var(--navy); background: var(--navy); color: var(--white); }

.sev-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 6px; }
.sev {
  border: 1px solid var(--gray-200); border-radius: 5px;
  padding: 16px 18px; cursor: pointer; transition: all 0.15s; background: var(--white);
}
.sev:hover { border-color: var(--gray-400); background: var(--gray-50); }
.sev-head { font-size: 14px; font-weight: 600; margin-bottom: 4px; color: var(--gray-700); }
.sev-sub  { font-size: 12px; color: var(--gray-400); }
.sev.s-low  { border-color: #1C6B45; background: #EBF5EF; }
.sev.s-low  .sev-head { color: #1C6B45; }
.sev.s-mid  { border-color: #946010; background: #FEF3E2; }
.sev.s-mid  .sev-head { color: #946010; }
.sev.s-high { border-color: var(--red); background: var(--red-pale); }
.sev.s-high .sev-head { color: var(--red); }
.sev.s-crit { border-color: #6B2080; background: #F6EFF9; }
.sev.s-crit .sev-head { color: #6B2080; }

.notice {
  border-left: 3px solid var(--navy-mid);
  background: var(--gray-50);
  padding: 14px 18px;
  border-radius: 0 5px 5px 0;
  margin-bottom: 24px;
  font-size: 13px; color: var(--gray-500); line-height: 1.75;
}

.actions { display: flex; gap: 12px; margin-top: 36px; }
.btn-next {
  flex: 1; background: var(--navy); color: var(--white);
  border: none; border-radius: 4px;
  padding: 14px; font-size: 14px; font-weight: 600;
  font-family: var(--font-sans); cursor: pointer; transition: background 0.2s;
}
.btn-next:hover { background: var(--navy-mid); }
.btn-back {
  background: var(--white); color: var(--gray-500);
  border: 1px solid var(--gray-200); border-radius: 4px;
  padding: 14px 24px; font-size: 14px; font-weight: 500;
  font-family: var(--font-sans); cursor: pointer; transition: all 0.2s;
}
.btn-back:hover { background: var(--gray-50); border-color: var(--gray-400); }

.sum-table { width: 100%; border-collapse: collapse; }
.sum-table td { padding: 11px 0; font-size: 13px; border-bottom: 1px solid var(--gray-100); vertical-align: top; }
.sum-table td:first-child { color: var(--gray-400); width: 38%; font-weight: 500; }
.sum-table td:last-child  { color: var(--gray-900); }
.sum-group td {
  padding-top: 20px;
  font-size: 10px; font-weight: 700;
  letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--gray-400); border-bottom: none;
}

.success { padding: 60px 20px; text-align: center; }
.success-mark {
  width: 64px; height: 64px; border-radius: 50%;
  background: var(--green-pale);
  margin: 0 auto 28px;
  display: flex; align-items: center; justify-content: center;
}
.success-mark svg { width: 28px; height: 28px; stroke: var(--green); stroke-width: 2.5; fill: none; }
.success h2 { font-family: var(--font-serif); font-size: 24px; font-weight: 700; color: var(--navy); margin-bottom: 12px; }
.success p  { font-size: 14px; color: var(--gray-500); line-height: 1.85; margin-bottom: 32px; }
.case-pill {
  display: inline-block;
  background: var(--gray-100); border: 1px solid var(--gray-200);
  border-radius: 4px; padding: 10px 24px;
  font-size: 13px; color: var(--gray-500); margin-bottom: 40px;
}
.case-pill strong { color: var(--navy); font-weight: 600; }
.success-btns { display: flex; gap: 12px; justify-content: center; }

/* ── VOICE + AI ── */
.desc-label-row {
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 8px;
}
.desc-label-row label { margin-bottom: 0; }

.mic-btn {
  display: inline-flex; align-items: center; gap: 6px;
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 4px;
  padding: 6px 14px;
  font-size: 12px; font-weight: 500;
  color: var(--gray-500);
  font-family: var(--font-sans);
  cursor: pointer; transition: all 0.2s;
}
.mic-btn:hover { border-color: var(--gray-400); color: var(--gray-700); }
.mic-btn.recording {
  border-color: var(--red); background: var(--red-pale); color: var(--red);
}

.mic-status {
  display: flex; align-items: center; gap: 8px;
  font-size: 12px; color: var(--red);
  margin-bottom: 8px;
}
.mic-pulse {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--red);
  animation: blink 1s infinite;
}
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.2} }

.ai-bar {
  display: flex; align-items: center; justify-content: space-between;
  gap: 16px;
  background: var(--gray-50);
  border: 1px solid var(--gray-200);
  border-radius: 6px;
  padding: 14px 18px;
}
.ai-bar-left { display: flex; flex-direction: column; gap: 2px; }
.ai-label { font-size: 13px; font-weight: 600; color: var(--navy); }
.ai-desc  { font-size: 12px; color: var(--gray-400); }
.ai-btn {
  background: var(--navy); color: var(--white);
  border: none; border-radius: 4px;
  padding: 9px 20px; font-size: 13px; font-weight: 600;
  font-family: var(--font-sans); cursor: pointer; white-space: nowrap;
  transition: background 0.2s;
}
.ai-btn:hover { background: var(--navy-mid); }
.ai-btn:disabled { background: var(--gray-200); color: var(--gray-400); cursor: not-allowed; }

.compare-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 1px; background: var(--gray-200);
  border: 1px solid var(--gray-200);
  border-radius: 6px; overflow: hidden;
  margin-bottom: 12px;
}
.compare-col { background: var(--white); padding: 0; }
.compare-head {
  font-size: 11px; font-weight: 600; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--gray-400);
  padding: 12px 16px;
  border-bottom: 1px solid var(--gray-200);
  background: var(--gray-50);
}
.ai-head { color: var(--navy); }
.compare-body {
  font-size: 13px; color: var(--gray-700);
  line-height: 1.8; padding: 16px;
  min-height: 100px; white-space: pre-wrap;
}
.compare-col-right .compare-body { color: var(--navy); }
.ai-loading { color: var(--gray-400); font-style: italic; }

.ai-tags-row { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px; }
.ai-tag {
  display: inline-block;
  font-size: 11px; font-weight: 600; letter-spacing: 0.06em;
  padding: 4px 10px; border-radius: 3px;
  border: 1px solid rgba(184,50,50,0.25);
  color: var(--red); background: var(--red-pale);
}

.ai-notice {
  font-size: 11px; color: var(--gray-400);
  margin-bottom: 12px; padding-left: 2px;
}
.ai-use-row { display: flex; gap: 10px; margin-bottom: 20px; }
.ai-use-btn {
  background: var(--navy); color: var(--white);
  border: none; border-radius: 4px;
  padding: 9px 20px; font-size: 13px; font-weight: 600;
  font-family: var(--font-sans); cursor: pointer; transition: background 0.2s;
}
.ai-use-btn:hover { background: var(--navy-mid); }
.ai-discard-btn {
  background: var(--white); color: var(--gray-500);
  border: 1px solid var(--gray-200); border-radius: 4px;
  padding: 9px 20px; font-size: 13px; font-weight: 500;
  font-family: var(--font-sans); cursor: pointer; transition: all 0.2s;
}
.ai-discard-btn:hover { background: var(--gray-50); border-color: var(--gray-400); }

/* ── ANON TOGGLE ── */
.anon-toggle {
  display: flex; align-items: center; justify-content: space-between;
  background: var(--gray-50); border: 1px solid var(--gray-200);
  border-radius: 6px; padding: 14px 16px;
  cursor: pointer; transition: background 0.15s;
}
.anon-toggle:hover { background: var(--gray-100); }
.anon-toggle-title { font-size: 13px; font-weight: 600; color: var(--navy); }
.anon-toggle-desc  { font-size: 12px; color: var(--gray-400); margin-top: 2px; }
.anon-switch {
  width: 36px; height: 20px; border-radius: 10px;
  background: var(--gray-200); position: relative;
  flex-shrink: 0; transition: background 0.2s;
}
.anon-switch::after {
  content: ''; position: absolute;
  width: 14px; height: 14px; border-radius: 50%;
  background: var(--white); top: 3px; left: 3px;
  transition: left 0.2s;
}
.anon-switch.on { background: var(--navy); }
.anon-switch.on::after { left: 19px; }

/* ── ANALYZE LOADING ── */
.analyze-loading {
  display: flex; flex-direction: column; align-items: center;
  justify-content: center; padding: 80px 20px; gap: 20px;
}
.analyze-spinner {
  width: 36px; height: 36px; border-radius: 50%;
  border: 3px solid var(--gray-200);
  border-top-color: var(--navy);
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
.analyze-loading-text {
  font-size: 13px; color: var(--gray-400); letter-spacing: 0.06em;
}

/* ── EMOTION TAGS ── */
.ar-emotion-desc {
  font-size: 13px; color: var(--gray-500); margin-bottom: 12px; line-height: 1.7;
}
.emotion-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.emotion-tag {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 13px; font-weight: 500;
  padding: 6px 14px; border-radius: 4px;
  border: 1px solid var(--gray-200);
  color: var(--gray-700); background: var(--white);
}
.emotion-tag.fear    { border-color: #7B2D8B; color: #7B2D8B; background: #F6EFF9; }
.emotion-tag.anxiety { border-color: #946010; color: #946010; background: #FEF3E2; }
.emotion-tag.sadness { border-color: #1A5276; color: #1A5276; background: #EBF5FB; }
.emotion-tag.anger   { border-color: var(--red); color: var(--red); background: var(--red-pale); }
.emotion-tag.shame   { border-color: #636363; color: #636363; background: var(--gray-100); }

/* ── SEV RESULT ── */
.sev-result {
  font-size: 16px; font-weight: 700; margin-bottom: 6px;
}
.sev-result-desc { font-size: 13px; color: var(--gray-500); line-height: 1.7; }
.sev-result.r-low  { color: var(--green); }
.sev-result.r-mid  { color: #946010; }
.sev-result.r-high { color: var(--red); }
.sev-result.r-crit { color: #7B2D8B; }

/* ── SUGGESTION LIST ── */
.suggestion-list {
  list-style: none; display: flex; flex-direction: column; gap: 10px;
}
.suggestion-list li {
  display: flex; align-items: flex-start; gap: 10px;
  font-size: 13px; color: var(--gray-700); line-height: 1.7;
}
.suggestion-list li::before {
  content: '';
  width: 4px; height: 4px; border-radius: 50%;
  background: var(--navy); flex-shrink: 0; margin-top: 8px;
}

/* ── CHECK ROWS ── */
.check-row {
  display: flex; align-items: flex-start; gap: 14px;
  padding: 16px 0; cursor: pointer;
}
.check-box {
  width: 18px; height: 18px; border-radius: 4px;
  border: 1.5px solid var(--gray-300, #ccc);
  flex-shrink: 0; margin-top: 2px;
  transition: all 0.15s; background: var(--white);
  position: relative;
}
.check-box.checked {
  background: var(--navy); border-color: var(--navy);
}
.check-box.checked::after {
  content: '';
  position: absolute; top: 3px; left: 6px;
  width: 4px; height: 8px;
  border: 2px solid white; border-top: none; border-left: none;
  transform: rotate(45deg);
}
.check-label { font-size: 13px; font-weight: 600; color: var(--navy); }
.check-desc  { font-size: 12px; color: var(--gray-400); margin-top: 2px; }
</style>
</head>
<body>

<nav>
  <div class="nav-logo" onclick="showPage('home')">安心通</div>
  <div class="nav-links">
    <a href="#" onclick="showPage('home'); return false;">首頁</a>
    <a href="#" onclick="scroll2('types'); return false;">霸凌類型</a>
    <a href="#" onclick="scroll2('process'); return false;">處理流程</a>
    <button class="nav-report-btn" onclick="showPage('report')">立即通報</button>
  </div>
</nav>

<!-- HOME -->
<div id="home" class="page active">

  <section class="hero">
    <div class="hero-eyebrow">校園安全守護平台</div>
    <h1>每個聲音<br/><em>都值得被聽見</em></h1>
    <p class="hero-sub">安心通為學生、家長與師長設計。<br/>您的通報，將由輔導老師保密處理。</p>
    <div class="hero-actions">
      <button class="btn-hero-primary" onclick="showPage('report')">填寫通報表單</button>
      <button class="btn-hero-ghost" onclick="scroll2('types')">了解霸凌類型</button>
    </div>
    <div class="hero-divider">
      <div>
        <div class="hero-stat-num">24h</div>
        <div class="hero-stat-label">輔導老師回覆時間</div>
      </div>
      <div>
        <div class="hero-stat-num">保密</div>
        <div class="hero-stat-label">加密儲存，全程保密</div>
      </div>
      <div>
        <div class="hero-stat-num">全年</div>
        <div class="hero-stat-label">線上通報不中斷</div>
      </div>
    </div>
  </section>

  <section class="section" id="types">
    <div class="eyebrow">認識霸凌</div>
    <div class="section-h">霸凌的樣態多元<br/>每一種都不應被忽視</div>
    <p class="section-lead">霸凌不只是肢體衝突，也可能是無聲的排擠、網路上的攻擊，或日復一日的言語傷害。</p>
    <div class="type-list">
      <div class="type-item"><div class="type-tag">肢體</div><h3>肢體霸凌</h3><p>打、踢、推、搶奪財物，造成身體傷害或恐懼感。</p></div>
      <div class="type-item"><div class="type-tag">言語</div><h3>言語霸凌</h3><p>嘲笑外貌或家庭、取侮辱性綽號，或持續言語威脅。</p></div>
      <div class="type-item"><div class="type-tag">網路</div><h3>網路霸凌</h3><p>透過社群媒體或通訊軟體散播謠言、惡意留言或截圖。</p></div>
      <div class="type-item"><div class="type-tag">關係</div><h3>關係霸凌</h3><p>故意孤立、散布流言、操控人際關係讓某人被排擠。</p></div>
      <div class="type-item"><div class="type-tag">財物</div><h3>財物霸凌</h3><p>強迫繳交保護費、索取金錢，或故意破壞他人財物。</p></div>
      <div class="type-item"><div class="type-tag">其他</div><h3>其他類型</h3><p>任何讓人感到不安全或受傷害的行為，都可以通報。</p></div>
    </div>
  </section>

  <section class="process-section" id="process">
    <div class="eyebrow">通報流程</div>
    <div class="section-h">送出通報之後，我們如何處理</div>
    <p class="section-lead">我們有標準化的處理程序，確保每一份通報都受到重視。</p>
    <div class="process-grid">
      <div class="process-item"><div class="process-num">01</div><h3>填寫通報表單</h3><p>完整填寫事件資料，描述越詳細，處理越有效率。</p></div>
      <div class="process-item"><div class="process-num">02</div><h3>輔導老師審閱</h3><p>1 個工作天內，輔導老師將審閱通報並進行初步評估。</p></div>
      <div class="process-item"><div class="process-num">03</div><h3>聯繫通報人</h3><p>輔導老師將與您聯繫，確認細節並說明後續處理方式。</p></div>
      <div class="process-item"><div class="process-num">04</div><h3>介入與追蹤</h3><p>依嚴重程度啟動校方介入機制，並持續追蹤改善狀況。</p></div>
    </div>
  </section>

  <section class="cta-section">
    <div class="cta-left">
      <div class="section-h">每一份通報<br/>都是改變的開始</div>
      <p>填寫通報只需要幾分鐘。你的勇敢，可以讓霸凌停下來。</p>
    </div>
    <button class="btn-cta" onclick="showPage('report')">填寫通報表單</button>
  </section>

  <footer>
    <div class="footer-logo">安心通</div>
    <div class="footer-right">
      緊急狀況請直接前往輔導室或撥打 110<br/>
      所有通報資料均依個人資料保護法加密保存
    </div>
  </footer>
</div>

<!-- REPORT -->
<div id="report" class="page">
  <div class="report-header">
    <button class="back-link" onclick="showPage('home')">← 返回首頁</button>
    <h1>霸凌通報表單</h1>
    <p>所有資料將加密保存，您的身份不會讓加害者知道。</p>
  </div>

  <div class="report-container">
    <div class="step-bar">
      <div class="sbi active" id="sb1"><div class="sbi-dot"></div><span class="sbi-label">通報人資料</span></div>
      <div class="sbi" id="sb2"><div class="sbi-dot"></div><span class="sbi-label">事件描述</span></div>
      <div class="sbi" id="sb3"><div class="sbi-dot"></div><span class="sbi-label">AI 分析</span></div>
      <div class="sbi" id="sb4"><div class="sbi-dot"></div><span class="sbi-label">確認送出</span></div>
    </div>

    <!-- STEP 1 -->
    <div id="fp1" class="fp active">
      <div class="notice">您的個人資料受到保護，輔導老師將保密處理，不會讓加害者知道是誰通報的。</div>

      <div class="block-title">通報人資料</div>
      <div class="card">
        <div class="row2">
          <div class="field"><label>姓名<span class="req"> *</span></label><input type="text" id="rName" placeholder="您的真實姓名" /></div>
          <div class="field"><label>班級<span class="req"> *</span></label><input type="text" id="rClass" placeholder="例：三年甲班" /></div>
        </div>
        <div class="field">
          <label>聯絡電話（選填）</label>
          <input type="tel" id="rPhone" placeholder="方便輔導老師致電確認" />
          <div class="hint">填寫後輔導老師可以直接電話聯繫您</div>
        </div>
        <div class="field">
          <label>與被害者關係<span class="req"> *</span></label>
          <div class="chips" id="relChips">
            <div class="chip" onclick="one(this,'relChips');checkAnon()">本人</div>
            <div class="chip" onclick="one(this,'relChips');checkAnon()">同班同學</div>
            <div class="chip" onclick="one(this,'relChips');checkAnon()">朋友</div>
            <div class="chip" onclick="one(this,'relChips');checkAnon()">師長</div>
            <div class="chip" onclick="one(this,'relChips');checkAnon()">家長</div>
            <div class="chip" onclick="one(this,'relChips');checkAnon()">目擊者</div>
          </div>
        </div>
        <!-- 匿名選項：只有目擊者才顯示 -->
        <div class="field" id="anonField" style="display:none;margin-bottom:0">
          <div class="anon-toggle" id="anonToggle" onclick="toggleAnon()">
            <div class="anon-toggle-left">
              <div class="anon-toggle-title">匿名通報</div>
              <div class="anon-toggle-desc">開啟後不會記錄您的姓名與班級</div>
            </div>
            <div class="anon-switch" id="anonSwitch"></div>
          </div>
        </div>
      </div>

      <div class="block-title" style="margin-top:32px;">事件基本資料</div>
      <div class="card">
        <div class="row2">
          <div class="field"><label>事發日期<span class="req"> *</span></label><input type="date" id="iDate" /></div>
          <div class="field"><label>事發地點<span class="req"> *</span></label><input type="text" id="iLoc" placeholder="例：操場、走廊、Line群組" /></div>
        </div>
      </div>

      <div class="block-title" style="margin-top:32px;">霸凌類型（可複選）</div>
      <div class="chips" id="typeChips">
        <div class="chip" onclick="tog(this)">肢體霸凌</div>
        <div class="chip" onclick="tog(this)">言語霸凌</div>
        <div class="chip" onclick="tog(this)">網路霸凌</div>
        <div class="chip" onclick="tog(this)">關係霸凌</div>
        <div class="chip" onclick="tog(this)">財物勒索</div>
        <div class="chip" onclick="tog(this)">其他</div>
      </div>

      <div class="actions"><button class="btn-next" onclick="go(2)">下一步</button></div>
    </div>

    <!-- STEP 2 -->
    <div id="fp2" class="fp">
      <div class="block-title">被害者資料</div>
      <div class="card">
        <div class="row2">
          <div class="field"><label>姓名<span class="req"> *</span></label><input type="text" id="vName" placeholder="被害者姓名" /></div>
          <div class="field"><label>班級</label><input type="text" id="vClass" placeholder="例：三年甲班" /></div>
        </div>
      </div>

      <div class="block-title" style="margin-top:32px;">加害者資料</div>
      <div class="card">
        <div class="row2">
          <div class="field"><label>姓名或描述</label><input type="text" id="pName" placeholder="可填外觀特徵或班級" /></div>
          <div class="field"><label>班級</label><input type="text" id="pClass" placeholder="例：三年乙班" /></div>
        </div>
        <div class="field">
          <label>人數</label>
          <div class="chips" id="numChips">
            <div class="chip" onclick="one(this,'numChips')">1 人</div>
            <div class="chip" onclick="one(this,'numChips')">2–3 人</div>
            <div class="chip" onclick="one(this,'numChips')">4 人以上</div>
            <div class="chip" onclick="one(this,'numChips')">不確定</div>
          </div>
        </div>
      </div>

      <div class="block-title" style="margin-top:32px;">事件描述</div>
      <div class="card">
        <div class="field">
          <div class="desc-label-row">
            <label>詳細描述<span class="req"> *</span></label>
            <button class="mic-btn" id="micBtn" onclick="toggleMic()" type="button">
              <span class="mic-icon" id="micIcon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="8" y1="22" x2="16" y2="22"/>
                </svg>
              </span>
              <span id="micLabel">語音輸入</span>
            </button>
          </div>
          <div id="micStatus" class="mic-status" style="display:none;">
            <span class="mic-pulse"></span> 錄音中，請說話…
          </div>
          <textarea id="desc" placeholder="請描述發生的事情、時間順序、對話內容、旁觀者等。描述越詳細，輔導老師越能有效介入。&#10;&#10;也可以點右上角「語音輸入」直接說出來。"></textarea>
        </div>

        <!-- AI organize button -->
        <div class="field" id="aiOrgField" style="display:none;">
          <div class="ai-bar">
            <div class="ai-bar-left">
              <span class="ai-label">AI 協助整理</span>
              <span class="ai-desc">將口語描述轉為正式敘述，並分析事件類型</span>
            </div>
            <button class="ai-btn" id="aiBtn" onclick="aiOrganize()" type="button">整理內容</button>
          </div>
        </div>

        <!-- AI result: side by side -->
        <div id="aiResult" style="display:none;">
          <div class="compare-grid">
            <div class="compare-col">
              <div class="compare-head">原始描述</div>
              <div class="compare-body" id="origText"></div>
            </div>
            <div class="compare-col compare-col-right">
              <div class="compare-head ai-head">AI 整理後</div>
              <div class="compare-body" id="aiText"><span class="ai-loading">整理中…</span></div>
            </div>
          </div>
          <div id="aiTags" class="ai-tags-row"></div>
          <div class="ai-notice">AI 整理內容僅供參考，請確認正確後再送出。</div>
          <div class="ai-use-row">
            <button class="ai-use-btn" onclick="useAiText()" type="button">採用 AI 版本</button>
            <button class="ai-discard-btn" onclick="discardAi()" type="button">保留原始版本</button>
          </div>
        </div>

        <div class="field" style="margin-bottom:0">
          <label>是否為持續性事件？</label>
          <div class="chips" id="ongoingChips">
            <div class="chip" onclick="one(this,'ongoingChips')">這是首次發生</div>
            <div class="chip" onclick="one(this,'ongoingChips')">已發生多次</div>
            <div class="chip" onclick="one(this,'ongoingChips')">長期持續</div>
          </div>
        </div>
      </div>

      <div class="block-title" style="margin-top:32px;">嚴重程度<span class="req"> *</span></div>
      <div class="sev-grid">
        <div class="sev" onclick="pickSev(this,'low')"><div class="sev-head">輕微</div><div class="sev-sub">偶發的嘲諷或排擠</div></div>
        <div class="sev" onclick="pickSev(this,'mid')"><div class="sev-head">中度</div><div class="sev-sub">持續言語或網路攻擊</div></div>
        <div class="sev" onclick="pickSev(this,'high')"><div class="sev-head">嚴重</div><div class="sev-sub">肢體傷害或財物損失</div></div>
        <div class="sev" onclick="pickSev(this,'crit')"><div class="sev-head">緊急</div><div class="sev-sub">立即人身安全威脅</div></div>
      </div>

      <div class="actions">
        <button class="btn-back" onclick="go(1)">上一步</button>
        <button class="btn-next" onclick="goAnalyze()">下一步，AI 分析</button>
      </div>
    </div>

    <!-- STEP 3: AI 分析結果 -->
    <div id="fp3" class="fp">
      <div class="notice" id="analyzeNotice">AI 正在分析您的通報內容，請稍候…</div>

      <!-- 載入中 -->
      <div id="analyzeLoading" class="analyze-loading">
        <div class="analyze-spinner"></div>
        <div class="analyze-loading-text">分析中</div>
      </div>

      <!-- 結果 -->
      <div id="analyzeResult" style="display:none;">

        <!-- 左右對比 -->
        <div class="block-title">描述整理</div>
        <div class="compare-grid" style="margin-bottom:24px;">
          <div class="compare-col">
            <div class="compare-head">原始描述</div>
            <div class="compare-body" id="ar-orig"></div>
          </div>
          <div class="compare-col compare-col-right">
            <div class="compare-head ai-head">AI 正式版本</div>
            <div class="compare-body" id="ar-formal"></div>
          </div>
        </div>

        <!-- 事件類型 -->
        <div class="block-title">事件類型</div>
        <div class="card" style="margin-bottom:20px;">
          <div id="ar-types" class="ai-tags-row" style="margin-bottom:0;"></div>
        </div>

        <!-- 情緒分析 -->
        <div class="block-title">情緒分析</div>
        <div class="card" style="margin-bottom:20px;">
          <div class="ar-emotion-desc" id="ar-emotionDesc"></div>
          <div id="ar-emotions" class="emotion-tags"></div>
        </div>

        <!-- 嚴重程度 -->
        <div class="block-title">嚴重程度判斷</div>
        <div class="card" style="margin-bottom:20px;">
          <div class="sev-result" id="ar-sev-display"></div>
          <div class="sev-result-desc" id="ar-sev-desc"></div>
        </div>

        <!-- 建議欄 -->
        <div class="block-title">處理建議</div>
        <div class="card" style="margin-bottom:20px;">
          <ul id="ar-suggestions" class="suggestion-list"></ul>
        </div>

        <div class="ai-notice">以上為 AI 輔助分析結果，僅供輔導老師參考，最終判斷仍由專業人員負責。</div>
      </div>

      <div class="actions" id="analyzeActions" style="display:none;">
        <button class="btn-back" onclick="go(2)">上一步</button>
        <button class="btn-next" onclick="go(4)">確認，前往送出</button>
      </div>
    </div>

    <!-- STEP 4: 確認送出 -->
    <div id="fp4" class="fp">
      <div class="notice">請確認以下資料正確後再送出。</div>
      <div class="card">
        <table class="sum-table">
          <tr class="sum-group"><td colspan="2">通報人</td></tr>
          <tr><td>姓名</td><td id="s-rName">—</td></tr>
          <tr><td>班級</td><td id="s-rClass">—</td></tr>
          <tr><td>與被害者關係</td><td id="s-rel">—</td></tr>
          <tr class="sum-group"><td colspan="2">事件</td></tr>
          <tr><td>事發日期</td><td id="s-date">—</td></tr>
          <tr><td>事發地點</td><td id="s-loc">—</td></tr>
          <tr><td>霸凌類型</td><td id="s-types">—</td></tr>
          <tr><td>嚴重程度</td><td id="s-sev">—</td></tr>
          <tr class="sum-group"><td colspan="2">當事人</td></tr>
          <tr><td>被害者</td><td id="s-vName">—</td></tr>
          <tr><td>加害者</td><td id="s-pName">—</td></tr>
          <tr><td>描述摘要</td><td id="s-desc" style="word-break:break-all">—</td></tr>
        </table>
      </div>

      <!-- 聯絡意願 -->
      <div class="block-title" style="margin-top:24px;">後續聯絡</div>
      <div class="card">
        <div class="check-row" onclick="toggleCheck('chkContact')">
          <div class="check-box" id="chkContact"></div>
          <div class="check-info">
            <div class="check-label">我願意接受輔導老師聯絡</div>
            <div class="check-desc">輔導老師將在 1 個工作天內與您聯繫確認細節</div>
          </div>
        </div>
        <div class="check-row" id="anonConfirmRow" onclick="toggleCheck('chkAnon')" style="display:none;margin-top:1px;border-top:1px solid var(--gray-100);padding-top:16px;">
          <div class="check-box" id="chkAnon"></div>
          <div class="check-info">
            <div class="check-label">以匿名方式送出</div>
            <div class="check-desc">通報人姓名與班級將不會記錄在案</div>
          </div>
        </div>
      </div>

      <div class="actions">
        <button class="btn-back" onclick="go(3)">上一步</button>
        <button class="btn-next" onclick="submit()">確認送出</button>
      </div>
    </div>

    <!-- STEP 5: 成功 -->
    <div id="fp5" class="fp">
      <div class="success">
        <div class="success-mark">
          <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h2>通報已成功送出</h2>
        <p>感謝您的勇敢。<br/>輔導老師將在 1 個工作天內與您聯繫。<br/>如有緊急狀況，請立即前往輔導室或撥打 110。</p>
        <div class="case-pill">
          案件編號：<strong id="caseNum">—</strong><br/>
          <span style="font-size:12px;color:var(--gray-400)" id="caseTime"></span>
        </div>
        <div class="success-btns">
          <button class="btn-back" onclick="showPage('home')">返回首頁</button>
          <button class="btn-next" style="flex:none;padding:14px 32px;" onclick="resetForm()">再次通報</button>
        </div>
      </div>
    </div>

  </div>
</div>

<script>
let curSev = null;
let isAnon = false;
let aiData = null;

function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}
function scroll2(id) {
  showPage('home');
  setTimeout(() => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 50);
}
function tog(el) { el.classList.toggle('on'); }
function one(el, g) {
  document.querySelectorAll('#' + g + ' .chip').forEach(c => c.classList.remove('on'));
  el.classList.add('on');
}
function pickSev(el, level) {
  document.querySelectorAll('.sev').forEach(s => s.className = 'sev');
  el.classList.add('s-' + level);
  curSev = level;
}

// anon logic — only for 目擊者
function checkAnon() {
  const rel = document.querySelector('#relChips .chip.on')?.textContent.trim();
  const anonField = document.getElementById('anonField');
  if (rel === '目擊者') {
    anonField.style.display = 'block';
  } else {
    anonField.style.display = 'none';
    isAnon = false;
    document.getElementById('anonSwitch').classList.remove('on');
  }
}
function toggleAnon() {
  isAnon = !isAnon;
  document.getElementById('anonSwitch').classList.toggle('on', isAnon);
  const nameField = document.getElementById('rName').closest('.field');
  const classField = document.getElementById('rClass').closest('.field');
  if (isAnon) {
    nameField.style.opacity = '0.4'; classField.style.opacity = '0.4';
  } else {
    nameField.style.opacity = '1'; classField.style.opacity = '1';
  }
}

function setBar(n) {
  [1,2,3,4].forEach(i => {
    const el = document.getElementById('sb' + i);
    if (!el) return;
    el.className = 'sbi' + (i < n ? ' done' : i === n ? ' active' : '');
  });
}

function go(n) {
  if (n === 4) buildSummary();
  document.querySelectorAll('.fp').forEach(p => p.classList.remove('active'));
  document.getElementById('fp' + n).classList.add('active');
  setBar(n);
  document.querySelector('.report-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function v(id) { return document.getElementById(id)?.value || ''; }

// Step 2 → Step 3: trigger AI analysis
async function goAnalyze() {
  document.querySelectorAll('.fp').forEach(p => p.classList.remove('active'));
  document.getElementById('fp3').classList.add('active');
  setBar(3);
  document.querySelector('.report-container').scrollIntoView({ behavior: 'smooth', block: 'start' });

  const rawText = v('desc').trim();
  document.getElementById('analyzeLoading').style.display = 'flex';
  document.getElementById('analyzeResult').style.display = 'none';
  document.getElementById('analyzeActions').style.display = 'none';
  document.getElementById('analyzeNotice').textContent = 'AI 正在分析您的通報內容，請稍候…';

  try {
    const res = await fetch('/api/ai-organize', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: rawText, full: true })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'API 錯誤');
    aiData = data;
    renderAnalysis(rawText, data);
  } catch (err) {
    document.getElementById('analyzeLoading').style.display = 'none';
    document.getElementById('analyzeNotice').textContent = 'AI 分析失敗，您仍可繼續送出通報。';
    document.getElementById('analyzeActions').style.display = 'flex';
  }
}

function renderAnalysis(raw, d) {
  document.getElementById('analyzeLoading').style.display = 'none';
  document.getElementById('analyzeNotice').textContent = '以下為 AI 分析結果，請確認後繼續。';

  // 描述對比
  document.getElementById('ar-orig').textContent = raw;
  document.getElementById('ar-formal').textContent = d.formal || '—';

  // 事件類型
  const typesEl = document.getElementById('ar-types');
  typesEl.innerHTML = '';
  (d.types || []).forEach(t => {
    const span = document.createElement('span');
    span.className = 'ai-tag'; span.textContent = t;
    typesEl.appendChild(span);
  });

  // 情緒分析
  document.getElementById('ar-emotionDesc').textContent = d.emotionDesc || '';
  const emotionsEl = document.getElementById('ar-emotions');
  emotionsEl.innerHTML = '';
  const emotionMap = { '害怕':'fear', '恐懼':'fear', '焦慮':'anxiety', '緊張':'anxiety', '難過':'sadness', '悲傷':'sadness', '憤怒':'anger', '生氣':'anger', '羞恥':'shame', '尷尬':'shame' };
  (d.emotions || []).forEach(e => {
    const span = document.createElement('span');
    const key = Object.keys(emotionMap).find(k => e.includes(k));
    span.className = 'emotion-tag ' + (key ? emotionMap[key] : '');
    span.textContent = e;
    emotionsEl.appendChild(span);
  });

  // 嚴重程度
  const sevMap = { low:'輕微', mid:'中度', high:'嚴重', crit:'緊急' };
  const sevEl = document.getElementById('ar-sev-display');
  sevEl.className = 'sev-result r-' + (d.severity || 'mid');
  sevEl.textContent = sevMap[d.severity] || '中度';
  document.getElementById('ar-sev-desc').textContent = d.severityDesc || '';

  // 建議
  const sugEl = document.getElementById('ar-suggestions');
  sugEl.innerHTML = '';
  (d.suggestions || []).forEach(s => {
    const li = document.createElement('li');
    li.textContent = s;
    sugEl.appendChild(li);
  });

  document.getElementById('analyzeResult').style.display = 'block';
  document.getElementById('analyzeActions').style.display = 'flex';

  // 如果 AI 判斷了嚴重程度，同步更新 curSev
  if (d.severity) curSev = d.severity;
}

function buildSummary() {
  const types = [...document.querySelectorAll('#typeChips .chip.on')].map(c => c.textContent.trim()).join('、') || '未選擇';
  const rel   = document.querySelector('#relChips .chip.on')?.textContent.trim() || '未填';
  const sevMap = { low:'輕微', mid:'中度', high:'嚴重', crit:'緊急' };
  const desc = v('desc');
  document.getElementById('s-rName').textContent  = isAnon ? '（匿名）' : (v('rName') || '未填');
  document.getElementById('s-rClass').textContent = isAnon ? '（匿名）' : (v('rClass') || '未填');
  document.getElementById('s-rel').textContent    = rel;
  document.getElementById('s-date').textContent   = v('iDate') || '未填';
  document.getElementById('s-loc').textContent    = v('iLoc') || '未填';
  document.getElementById('s-types').textContent  = types;
  document.getElementById('s-sev').textContent    = curSev ? sevMap[curSev] : '未選擇';
  document.getElementById('s-vName').textContent  = (v('vName') || '未填') + (v('vClass') ? '（' + v('vClass') + '）' : '');
  document.getElementById('s-pName').textContent  = v('pName') || '未填';
  document.getElementById('s-desc').textContent   = desc.length > 60 ? desc.slice(0,60) + '…' : (desc || '未填');

  // 目擊者才顯示匿名確認
  const rel2 = document.querySelector('#relChips .chip.on')?.textContent.trim();
  document.getElementById('anonConfirmRow').style.display = rel2 === '目擊者' ? 'block' : 'none';
}

function toggleCheck(id) {
  document.getElementById(id).classList.toggle('checked');
}

function submit() {
  const now = new Date();
  const id = 'RPT-' + now.getFullYear() + '-' + Math.floor(Math.random() * 90000 + 10000);
  const timeStr = now.toLocaleDateString('zh-TW') + ' ' + now.toLocaleTimeString('zh-TW', { hour:'2-digit', minute:'2-digit' });
  document.getElementById('caseNum').textContent = id;
  document.getElementById('caseTime').textContent = '送出時間：' + timeStr;
  document.querySelectorAll('.fp').forEach(p => p.classList.remove('active'));
  document.getElementById('fp5').classList.add('active');
  document.querySelector('.report-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function resetForm() {
  ['rName','rClass','rPhone','iLoc','vName','vClass','pName','pClass','desc'].forEach(id => {
    const el = document.getElementById(id); if (el) el.value = '';
  });
  document.querySelectorAll('.chip.on').forEach(c => c.classList.remove('on'));
  document.querySelectorAll('.sev').forEach(s => s.className = 'sev');
  document.querySelectorAll('.check-box.checked').forEach(c => c.classList.remove('checked'));
  document.getElementById('anonField').style.display = 'none';
  document.getElementById('aiOrgField').style.display = 'none';
  document.getElementById('aiResult').style.display = 'none';
  curSev = null; isAnon = false; aiData = null;
  go(1);
}

document.getElementById('iDate').valueAsDate = new Date();

// ── VOICE INPUT ──
let recognition = null;
let isRecording = false;

function toggleMic() {
  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    alert('您的瀏覽器不支援語音輸入，請使用 Chrome 瀏覽器。');
    return;
  }
  if (isRecording) { recognition.stop(); return; }

  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SR();
  recognition.lang = 'zh-TW';
  recognition.continuous = true;
  recognition.interimResults = true;

  const textarea = document.getElementById('desc');
  const statusEl = document.getElementById('micStatus');
  const micBtn   = document.getElementById('micBtn');
  const micLabel = document.getElementById('micLabel');
  let baseText = textarea.value;

  recognition.onstart = () => {
    isRecording = true;
    micBtn.classList.add('recording');
    micLabel.textContent = '停止錄音';
    statusEl.style.display = 'flex';
  };
  recognition.onresult = (e) => {
    let interim = '', final = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      if (e.results[i].isFinal) final += e.results[i][0].transcript;
      else interim += e.results[i][0].transcript;
    }
    baseText += final;
    textarea.value = baseText + interim;
    checkShowAiBtn();
  };
  recognition.onend = () => {
    isRecording = false;
    micBtn.classList.remove('recording');
    micLabel.textContent = '語音輸入';
    statusEl.style.display = 'none';
    baseText = textarea.value;
    checkShowAiBtn();
  };
  recognition.onerror = () => {
    isRecording = false;
    micBtn.classList.remove('recording');
    micLabel.textContent = '語音輸入';
    statusEl.style.display = 'none';
  };
  recognition.start();
}

document.getElementById('desc').addEventListener('input', checkShowAiBtn);

function checkShowAiBtn() {
  const val = document.getElementById('desc').value.trim();
  document.getElementById('aiOrgField').style.display = val.length > 10 ? 'block' : 'none';
}

// ── AI ORGANIZE (in-page preview, optional) ──
async function aiOrganize() {
  const rawText = document.getElementById('desc').value.trim();
  if (!rawText) return;
  document.getElementById('aiResult').style.display = 'block';
  document.getElementById('origText').textContent = rawText;
  document.getElementById('aiText').innerHTML = '<span class="ai-loading">整理中，請稍候…</span>';
  document.getElementById('aiTags').innerHTML = '';
  document.getElementById('aiBtn').disabled = true;
  document.getElementById('aiResult').scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  try {
    const res = await fetch('/api/ai-organize', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: rawText, full: false })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'API 錯誤');
    document.getElementById('aiText').textContent = data.formal || '（整理失敗）';
    (data.types || []).forEach(t => {
      const tag = document.createElement('span');
      tag.className = 'ai-tag'; tag.textContent = t;
      document.getElementById('aiTags').appendChild(tag);
    });
  } catch (err) {
    document.getElementById('aiText').textContent = '整理失敗，請稍後再試。';
  }
  document.getElementById('aiBtn').disabled = false;
}

function useAiText() {
  const c = document.getElementById('aiText').textContent;
  if (c && !c.includes('整理失敗') && !c.includes('整理中')) {
    document.getElementById('desc').value = c;
  }
  document.getElementById('aiResult').style.display = 'none';
}
function discardAi() { document.getElementById('aiResult').style.display = 'none'; }
</script>
</body>
</html>
