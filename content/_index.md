---
title: ""
markup: html
---

<style>
body, body * {
  font-family: Helvetica, Arial, sans-serif !important;
}

.main, .content, .page, .wrapper {
  padding-top: 0 !important;
  margin-top: 0 !important;
}

.site-header, nav.navbar, .navbar {
  margin-bottom: 0 !important;
  padding-bottom: 0 !important;
}

.top-background {
  background-image: url("/images/websitebackground.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  
  /* Full-bleed viewport width breaking out of page containers */
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  padding-top: 40px;
  padding-bottom: 60px;
  box-sizing: border-radius;
}

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

.white-section {
  background: #ffffff;
  padding: 40px 30px;
  max-width: 1000px;
  margin: 0 auto;
}

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

.pub-title {
  padding: 12px;
  color: #004f52;
  font-weight: 500;
  font-size: 15px;
  text-decoration: none;
  display: block;
  font-family: Helvetica, Arial, sans-serif !important;
}

@media (max-width: 700px) {
  .pub-tile {
    width: 100%;
  }
}

.small-icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
  vertical-align: middle;
  margin-right: 10px;
}

.inline-diamonds .diamond {
  display: inline-block;
  width: 8px;
  height: 8px;
  background: #004f52;
  transform: rotate(45deg);
  margin: 0 10px;
  position: relative;
  top: -1px;
}

.centred-line {
  text-align: center;
}
</style>

<!-- TOP SECTION WITH BACKGROUND IMAGE -->
<div class="top-background">
  <div class="top-content">
    <div class="profile-flex">
      <div style="flex: 1;">
        <h3 style="margin: 0; color: #282828; font-size:22px; font-weight: 600;">
          Meet Cherene de Bruyn
        </h3>
        <h2 style="margin: 0; color: #3C1414; font-size:25px; font-weight: 700;">
          Archaeologist • Grave Scientist • Research Resilience Writer
        </h2>
        <h3 style="font-weight: normal; font-size:20px; color: #1a1a1a; margin-top: 10px; line-height: 1.35;">
          Cherene is an international PhD researcher. Her current project focuses on clandestine grave location through UAV‑based remote sensing and soil microbiome analysis. 
          Alongside her scientific work, she writes about academic life, research culture, and the evidence‑based systems that shape the <em>Resilient Researcher Mindset</em>, helping postgraduate scholars and early‑career academics build momentum, prevent burnout, and sustain intentional research workflows.
        </h3>
      </div>

      <div class="profile-image">
        <img src="/images/cdbheadshot.png" alt="Cherene de Bruyn Headshot" style="width: 100%; border-radius: 10px; object-fit: cover;">
      </div>
    </div>
  </div>
</div>

<!-- CHERENE THE ACADEMIC -->
<div class="white-section">
  <h2 style="margin-top: 0; margin-bottom: 10px; color: #004f52; font-size: 24px; display: flex; align-items: center; gap: 10px;">
    <img src="/images/academic.png" class="small-icon" alt="Academic Icon">
    Cherene the Academic
  </h2>

  <h4 style="margin-bottom: 0; font-size: 16px;">
    Liverpool John Moores University
  </h4>

  <h4 style="margin-top: 0; font-size: 16px;">
    <em>c.debruyn@2024.ljmu.ac.uk</em>
  </h4>

  <h3 style="margin-top: 10px; font-size: 18px;">
    Research Interests
  </h3>

  <div class="research-section" style="font-size:16px;">
    <p class="inline-diamonds" style="margin-top:0;">
      <span class="diamond"></span> Bioarchaeology
      <span class="diamond"></span> Burial archaeology
      <span class="diamond"></span> Post‑mortem body treatment
      <span class="diamond"></span> Taphonomy <br>
      <span class="diamond"></span> Remote Sensing
      <span class="diamond"></span> Ecological and material signatures of human activity
      <span class="diamond"></span> Forensic Archaeology
    </p>
  </div>

  <div class="social-icons centred-line" style="margin-top: 20px;">
    <a href="https://www.linkedin.com/in/cherenedebruyn/" target="_blank">
      <img src="/images/LI-In-Bug.png" alt="LinkedIn" style="width: 32px; margin-right: 10px;">
    </a>
    <a href="https://orcid.org/0000-0002-2979-2289" target="_blank">
      <img src="/images/ORCID_iD.svg.png" alt="ORCID" style="width: 32px; margin-right: 10px;">
    </a>
    <a href="https://scholar.google.com/citations?user=lJ8DcqwAAAAJ&hl=en" target="_blank">
      <img src="/images/Google_Scholar_logo.svg.png" alt="Google Scholar" style="width: 32px; margin-right: 10px;">
    </a>
    <a href="https://ljmu.academia.edu/CherenedeBruyn" target="_blank">
      <img src="/images/academialogo.png" alt="Academia" style="width: 32px; margin-right: 10px;">
    </a>
    <a href="https://profiles.ljmu.ac.uk/19117-cherene-de-bruyn" target="_blank">
      <img src="/images/ljmu.png" alt="LJMU Profile" style="width: 32px; margin-right: 10px;">
    </a>
  </div>
</div>

<!-- CHERENE THE WRITER -->
<div class="white-section">
  <h2 style="margin-top: 0; margin-bottom: 10px; color: #004f52; font-size: 24px; display: flex; align-items: center; gap: 10px;">
    <img src="/images/writer.png" class="small-icon" alt="Writer Icon">
    Cherene the Writer
  </h2>

  <div class="pub-grid">
    <div class="pub-tile">
      <img src="/images/thenodestudent.jpg" class="pub-cover" alt="The Node Article">
      <a href="https://thenode.biologists.com/the-final-stretch-that-tests-every-phd-student/education/" target="_blank" class="pub-title">
        The final stretch that tests every PhD student <br>
        <b>The Node</b> <i>(Sept 2026)</i>
      </a>
    </div>

    <div class="pub-tile">
      <img src="/images/kusozubody.png" class="pub-cover" alt="Research Hive Article">
      <a href="https://research-hive.com/2026/07/02/the-buried-truth-about-body-farms-and-scientific-lessons-from-decay/" target="_blank" class="pub-title">
        The buried truth about body farms and scientific lessons from decay <br>
        <b>Research Hive</b> <i>(July 2026)</i>
      </a>
    </div>

    <div class="pub-tile">
      <img src="/images/humanbridges2.png" class="pub-cover" alt="Human Bridges Article">
      <a href="https://observatory.wiki/Parameters_of_Animal_Self-Medication_Behavior" target="_blank" class="pub-title">
        Parameters of Animal Self‑Medication Behaviour <br>
        <b>Human Bridges</b> <i>(June 2026)</i>
      </a>
    </div>

    <div class="pub-tile">
      <img src="/images/big_elephant.jpg" class="pub-cover" alt="Human Bridges Article">
      <a href="https://observatory.wiki/Parameters_of_Animal_Mortuary_Behavior" target="_blank" class="pub-title">
        Parameters of Animal Mortuary Behaviour <br>
        <b>Human Bridges</b> <i>(Dec 2025)</i>
      </a>
    </div>

    <div class="pub-tile">
      <img src="/images/crucible.jpg" class="pub-cover" alt="Research Hive Article">
      <a href="https://research-hive.com/2025/08/26/the-phd-confirmation-process-is-not-a-hurdle-its-a-crucible/" target="_blank" class="pub-title">
        The PhD confirmation process is not a hurdle — it’s a crucible <br>
        <b>Research Hive</b> <i>(Aug 2025)</i>
      </a>
    </div>
  </div>
</div>