<!-- FULL-PAGE BACKGROUND + RESPONSIVE LAYOUT -->
<style>

.page-background {
  background-image: url("/images/websitebackground.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  padding-top: 10px;
  padding-bottom: 40px;
}

/* Remove Lithium white background */
.content, .main {
  background: transparent !important;
}

/* Translucent scrolling block */
.trans-block {
  background: rgba(255, 255, 255, 0.7);
  padding: 30px;
  border-radius: 0px;
  max-width: 1000px;
  margin: 0 auto;
}

/* RESPONSIVE TWO-COLUMN LAYOUT */
.profile-flex {
  display: flex;
  gap: 30px;
  align-items: flex-start;
}

.profile-image {
  flex: 0 0 400px;
}

/* MOBILE + TABLET */
@media (max-width: 900px) {

  .profile-flex {
    flex-direction: column !important;
  }

  .profile-image {
    flex: 0 0 auto !important;
    width: 100% !important;
    max-width: 100% !important;
  }

  .trans-block {
    padding: 20px !important;
  }
}

/* PUBLICATION TILE GRID */
.pub-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  margin-top: px;
}

/* TILE */
.pub-tile {
  background: rgba(255, 255, 255, 0.85);
  padding: 0;
  border-radius: 10px;
  width: 300px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  overflow: hidden;
  transition: transform 0.2s ease;
  font-size: 16px; /* match body text */
}

.pub-tile:hover {
  transform: translateY(-4px);
}

/* COVER IMAGE */
.pub-cover {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

/* PUBLICATION NAME (outside white tile) */
.pub-source {
  text-align: center;
  font-weight: 700;
  color: #004f52;
  margin-bottom: 8px;
  font-size: 22px; /* match body text */
}

/* ARTICLE TITLE */
.pub-title {
  padding: 12px;
  color: #004f52;
  font-weight: 500;
  font-size: 15px; /* match body text */
  text-decoration: none;
  display: block;
}

/* MOBILE */
@media (max-width: 700px) {
  .pub-tile {
    width: 100%;
  }
}

/* GLOBAL FONT OVERRIDE — USE HELVETICA ONLY */
body,
body * {
  font-family: Helvetica !important;
}

.section-heading {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 10px;
  color: #444444;
  font-family: Helvetica !important;
  font-size: 24px;
  font-weight: 600;
}


</style>

<div class="page-background">

<div class="trans-block">

<div class="profile-flex">

<div style="flex: 1;">

<h2 style="margin-top: 0; margin-bottom: 0; color: #004f52;">
  <em>Archaeologist</em>
</h2>

<h3 style="font-weight: normal; margin-top: 0; margin-bottom: 0;">
  <strong>Current Project: Grave Science</strong>
</h3>

<h3 style="font-weight: normal; font-size:18px; margin-top: 0;">
  I am working on clandestine grave location using UAV-based remote sensing and soil microbiomes
</h3>

<h4 style="font-weight: normal;margin-bottom: 0;">
  Liverpool John Moores University  
</h4>

<h4 style="font-weight: normal;margin-top: 0;">
  <em>c.debruyn@2024.ljmu.ac.uk</em>  
</h4>

<h3 style="font-weight: normal; margin-bottom: 0; margin-top: 10px;">
  <strong>Research Interests</strong>
</h3>

<p style="font-weight: normal;font-size:18px;font-family: Helvetica; margin-top: 0;">
  Burial archaeology, post‑mortem body treatment, taphonomy, and the ecological and material signatures human activity leaves on the landscape.
  I study these through soil microbiomes (for forensic contexts) and remote‑sensing data from GIS, GPR, and UAV‑based imaging.
</p>

</div>

<div class="profile-image">
  <img src="/images/cdbfield1v1.jpg"
       style="width: 100%; border-radius: 10px; object-fit: cover;">
</div>

</div> <!-- end profile-flex -->

<div style="margin-top: 10px;">
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

<h2 class="section-heading">
  Latest post from my Substack
</h2>


<div style="text-align: center; margin-bottom: 10px;">
  <img src="/images/bruynchildlogo.png" alt="BruynChild Logo"
       style="width: 200px; height: auto;">
</div>

<div id="latest-posts" class="row">
  Loading latest posts...
</div>

<div class="substack-buttons"
     style="text-align:center; margin-top:20px; display:flex; flex-direction:column; gap:12px; align-items:center;">

  <a href="https://cherenedebruyn.substack.com/subscribe"
     target="_blank"
     style="background:#004f52; color:white; padding:12px 20px; border-radius:6px; text-decoration:none; font-weight:600;">
     Subscribe to BruynChild
  </a>
</div>

<h2 class="section-heading">
  More of my writing
</h2>


<div class="pub-grid">

  <!-- TILE 1: Research Hive -->
  <div>
    <div class="pub-source">Research Hive</div>
    <div class="pub-tile">
      <img src="/images/kusozubody.png" class="pub-cover">
      <a href="https://research-hive.com/2026/07/02/the-buried-truth-about-body-farms-and-scientific-lessons-from-decay/"
         target="_blank"
         class="pub-title">
        The buried truth about body farms and scientific lessons from decay
      </a>
    </div>
  </div>

  <!-- TILE 2: Human Bridges -->
  <div>
    <div class="pub-source">Human Bridges</div>
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

</div> <!-- end trans-block -->

</div> <!-- end page-background -->
