---
title: ""
markup: html
---

<style>

/* GLOBAL FONT */
body, body * {
  font-family: Helvetica !important;
}

/* Remove theme spacing */
.main, .content, .page, .wrapper {
  padding-top: 0 !important;
  margin-top: 0 !important;
}

.site-header, nav.navbar, .navbar {
  margin-bottom: 0 !important;
  padding-bottom: 0 !important;
}

/* FULL-PAGE BACKGROUND AT TOP */
.top-background {
  background-image: url("/images/websitebackground.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  padding-top: 40px;
  padding-bottom: 60px;
  position: relative;
}

/* 50% white overlay */
.top-background::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(255,255,255,0.5);
  pointer-events: none;
}

.top-content {
  position: relative;
  z-index: 2;
  max-width: 1000px;
  margin: 0 auto;
  padding: 30px;
}

/* TWO-COLUMN HEADSHOT SECTION */
.profile-flex {
  display: flex;
  gap: 30px;
  align-items: center;
}

.profile-image {
  flex: 0 0 350px;
}

@media (max-width: 900px) {
  .profile-flex {
    flex-direction: column !important;
    text-align: center;
  }
  .profile-image {
    width: 100% !important;
    max-width: 100% !important;
  }
}

/* WHITE SECTIONS BELOW */
.white-section {
  background: white;
  padding: 40px 30px;
  max-width: 1000px;
  margin: 0 auto;
}

/* PUBLICATION GRID */
.pub-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}

.pub-tile {
  background: rgba(255, 255, 255, 0.85);
  border-radius: 10px;
  width: 300px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  overflow: hidden;
  transition: transform 0.2s ease;
}

.pub-tile:hover {
  transform: translateY(-4px);
}

.pub-cover {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.pub-source {
  text-align: center;
  font-weight: 700;
  color: #004f52;
  margin-bottom: 8px;
  font-size: 20px;
  font-family: Helvetica !important; /* unified */
}

.pub-title {
  padding: 12px;
  color: #004f52;
  font-weight: 500;
  font-size: 15px;
  text-decoration: none;
  display: block;
  font-family: Helvetica !important; /* unified */
}

@media (max-width: 700px) {
  .pub-tile {
    width: 100%;
  }
}

/* SMALL ICONS */
.small-icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
  vertical-align: middle;
  margin-right: 10px;
}

</style>


<!-- TOP SECTION WITH BACKGROUND IMAGE -->
<div class="top-background">
  <div class="top-content">

    <div class="profile-flex">

      <!-- LEFT COLUMN -->
      <div style="flex: 1;">

        <!-- Heading 1 -->
        <h3 style="
          margin: 0;
          color: #282828;
          font-size:22px;
          font-weight: 600;
          font-family: Helvetica !important;
        ">
          Meet Cherene de Bruyn
        </h3>

        <!-- Heading 2 -->
        <h2 style="
          margin: 0;
          color: #3C1414;
          font-size:25px;
          font-weight: 700;
          font-family: Helvetica !important;
        ">
          Archaeologist • Grave Scientist • Research Resilience Writer
        </h2>

        <!-- Bio -->
        <h3 style="
          font-weight: normal;
          font-size:20px;
          color: #1a1a1a;
          margin-top: 0;
          line-height: 1.35;
          font-family: Helvetica !important;
        ">
         Cherene is an international PhD researcher studying clandestine grave location through UAV‑based remote sensing and soil microbiome analysis. 
         Alongside her scientific work, she writes about academic life, research culture, and the evidence‑based systems that shape the <em>Resilient Researcher Mindset</em>, helping postgraduate scholars and early‑career academics build momentum, prevent burnout, and sustain intentional research workflows.
         </h3>

      </div>

      <!-- RIGHT COLUMN: HEADSHOT -->
      <div class="profile-image">
        <img src="/images/cdbheadshot.png"
             style="width: 100%; border-radius: 10px; object-fit: cover;">
      </div>

    </div>

  </div>
</div>


<!-- CHERENE THE ACADEMIC -->
<div class="white-section">

  <h2 style="
    margin-top: 0;
    margin-bottom: 10px;
    color: #004f52;
    font-size: 24px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: Helvetica !important;
  ">
    <img src="/images/academic.png" class="small-icon">
    Cherene the Academic
  </h2>

  <h4 style="margin-bottom: 0;font-size: 16px; font-family: Helvetica !important;">
    Liverpool John Moores University
  </h4>

  <h4 style="margin-top: 0;font-size: 16px; font-family: Helvetica !important;">
    <em>c.debruyn@2024.ljmu.ac.uk</em>
  </h4>

  <h3 style="margin-top: 10px;font-size: 18px; font-family: Helvetica !important;">
   Research Interests
  </h3>

  <p style="font-size:16px; margin-top: 0; font-family: Helvetica !important;">
    Burial archaeology, post‑mortem body treatment, taphonomy, and the ecological and material signatures human activity leaves on the landscape.
    I study these through soil microbiomes (for forensic contexts) and remote‑sensing data from GIS, GPR, and UAV‑based imaging.
  </p>

  <div style="margin-top: 20px;">
    <a href="https://www.linkedin.com/in/cherenedebruyn/" target="_blank">
      <img src="/images/LI-In-Bug.png" style="width: 32px; margin-right: 10px;">
    </a>
    <a href="https://orcid.org/0000-0002-2979-2289" target="_blank">
      <img src="/images/ORCID_iD.svg.png" style="width: 32px; margin-right: 10px;">
    </a>
    <a href="https://scholar.google.com/citations?user=lJ8DcqwAAAAJ&hl=en" target="_blank">
      <img src="/images/Google_Scholar_logo.svg.png" style="width: 32px; margin-right: 10px;">
    </a>
    <a href="https://profiles.ljmu.ac.uk/19117-cherene-de-bruyn" target="_blank">
      <img src="/images/ljmu.png" style="width: 32px; margin-right: 10px;">
    </a>
  </div>

</div>


<!-- CHERENE THE WRITER -->
<div class="white-section">

  <h2 style="
    margin-top: 0;
    margin-bottom: 10px;
    color: #004f52;
    font-size: 24px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: Helvetica !important;
  ">
    <img src="/images/writer.png" class="small-icon">
    Cherene the Writer
  </h2>

  <div class="pub-grid">

    <div>
      <div class="pub-source" style="color:#282828; font-size:18px; font-family:Helvetica !important;">
        Research Hive
      </div>
      <div class="pub-tile">
        <img src="/images/kusozubody.png" class="pub-cover">
        <a href="https://research-hive.com/2026/07/02/the-buried-truth-about-body-farms-and-scientific-lessons-from-decay/"
           target="_blank"
           class="pub-title">
          The buried truth about body farms and scientific lessons from decay
        </a>
      </div>
    </div>

    <div>
      <div class="pub-source" style="color:#282828; font-size:18px; font-family:Helvetica !important;">
        Human Bridges
      </div>
      <div class="pub-tile">
        <img src="/images/humanbridges2.png" class="pub-cover">
        <a href="https://observatory.wiki/Parameters_of_Animal_Self-Medication_Behavior"
           target="_blank"
           class="pub-title">
          Parameters of Animal Self‑Medication Behaviour
        </a>
      </div>
    </div>

  </div>

</div>
