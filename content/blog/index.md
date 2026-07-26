---
title: ""
markup: html
---

<!-- LOGO -->
<div style="text-align: center; margin-bottom: 20px;">
  <img src="/images/bruynchildlogo.png" alt="BruynChild Logo"
       style="width: 350px; height: auto;">
</div>

<!-- Subscribe to newsletter box -->
<div style="
  background: #004f5280;
  padding: 24px;
  border-radius: 8px;
  max-width: 780px;
  margin: 0 auto 32px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
  font-size: 11pt;
">

  <!-- Left text -->
  <div style="flex: 1 1 300px; color:#282828; line-height: 1.35;">
    <div style="font-weight: 600; margin-bottom: 6px; font-size: 15pt;">
      Develop the Resilient Researcher Mindset. 
    </div>

    <div style="font-size: 9pt;">
      Subscribe to Cherene’s Substack newsletter <strong>Bruynchild</strong>.  
      Join a community of postgraduate and early‑career researchers receiving weekly insights on momentum, resilience, and sustainable academic workflows — shaped by real fieldwork, real pressure, and real research life, delivered straight to your inbox.
      </div>
    
    </div>

  <!-- Right form: REAL RESPONSIVE EMAIL BOX -->
  <div style="flex: 1 1 260px;">

    <form onsubmit="window.location.href='https://cherenedebruyn.substack.com/subscribe?email=' + encodeURIComponent(this.email.value); return false;"
          style="display:flex; flex-direction:column; gap:10px; max-width:260px;">

      <input
        type="email"
        name="email"
        required
        placeholder="Email address"
        style="
          width: 100%;
          padding: 10px 12px;
          border-radius: 6px;
          border: 1px solid #004f52;
          font-size: 11pt;
          box-sizing: border-box;
        "
      >

      <button
        type="submit"
        style="
          width: 100%;
          padding: 10px 12px;
          border-radius: 6px;
          border: none;
          background: #004f52;
          color: #ffffff;
          font-size: 11pt;
          font-weight: 600;
          cursor: pointer;
        "
      >
        Subscribe
      </button>
    </form>

    <div style="font-size: 8pt; color: #282828; margin-top: 6px;">
      You’ll receive essays from <strong>Bruynchild</strong> via email.  
      Your email address will not be shared or sold to other parties.
    </div>

  </div>

</div>

<!-- SIDEBAR (TRUE FAR-RIGHT COLUMN) -->
<div class="right-sidebar" style="
  position: absolute;
  right: 40px;
  top: 260px;
  width: 280px;
  background: white;
">
  <h2 style="font-size: 1.5rem; margin-top:0; color:#004f52;">
    Academic & Study Resources
  </h2>

  <p style="font-size: 14px;">
    Free templates, study guides, and academic resources I’ve created.
  </p>

  <div id="resources-list" style="margin-top: 20px;">
    <!-- Add resources here -->
  </div>
</div>

<!-- MAIN CONTENT WRAPPER -->
<div style="display: block; position: relative; max-width: 700px; margin: 0 auto;">

  <!-- SUBSTACK POSTS (LEFT COLUMN) -->
  <div id="latest-posts">
    Loading posts…
  </div>

  <script src="/js/blog_substack.js?v=1001"></script>

</div>
