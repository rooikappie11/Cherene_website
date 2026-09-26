---
title: "substack"
output: html_document
---


  <!-- <h2 style="
    color: #004f52;
    margin-bottom: 25px;
    text-align: center;
  ">
    Latest from BruynChild
  </h2> -->


  <!-- SUBSTACK POSTS GRID -->
  <div
    id="latest-posts"
    style="
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 24px;
    "
  >
    Loading latest posts...
  </div>


  <script>

    const feedUrl =
      "https://api.rss2json.com/v1/api.json?rss_url=https://cherenedebruyn.substack.com/feed";


    fetch(feedUrl)
      .then(response => response.json())
      .then(data => {

        const container = document.getElementById("latest-posts");


        if (!data.items || data.items.length === 0) {
          container.innerHTML = "<p>No posts found.</p>";
          return;
        }


        container.innerHTML = data.items.map(post => {

          let image = "";


          try {

            /*
             * Get the FIRST image from the post content.
             * This is preferred over the RSS thumbnail.
             */

            const parser = new DOMParser();

            const content =
              post.content ||
              post.description ||
              "";

            const doc = parser.parseFromString(
              content,
              "text/html"
            );

            const firstImage =
              doc.querySelector("img");


            if (firstImage) {

              image =
                firstImage.getAttribute("src") ||
                firstImage.getAttribute("data-src") ||
                "";

            }


            /*
             * If no image was found in the post,
             * fall back to the RSS thumbnail.
             */

            if (!image && post.thumbnail) {
              image = post.thumbnail;
            }


          } catch (err) {

            console.log(err);

            if (post.thumbnail) {
              image = post.thumbnail;
            }

          }


          return `

            <a
              href="${post.link}"
              target="_blank"
              rel="noopener noreferrer"
              style="
                text-decoration: none;
                color: inherit;
                display: block;
              "
            >

              <article style="
                background: white;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 4px 12px rgba(0,0,0,0.08);
                height: 100%;
              ">


                ${
                  image
                    ? `
                      <img
                        src="${image}"
                        alt="${post.title}"
                        style="
                          width: 100%;
                          height: 220px;
                          object-fit: cover;
                          display: block;
                        "
                      >
                    `
                    : ""
                }


                <div style="
                  padding: 18px;
                ">


                  <div style="
                    color: #777;
                    font-size: 12px;
                    margin-bottom: 8px;
                  ">
                    ${new Date(post.pubDate).toLocaleDateString("en-GB")}
                  </div>


                  <h3 style="
                    color: #004f52;
                    margin: 0;
                    line-height: 1.35;
                    font-size: 1.1rem;
                  ">
                    ${post.title}
                  </h3>


                </div>


              </article>

            </a>

          `;

        }).join("");

      })


      .catch(error => {

        console.error(error);

        document.getElementById("latest-posts").innerHTML =
          "<p>Unable to load posts.</p>";

      });

  </script>

</div>


<!-- SIDEBAR (TRUE FAR-RIGHT COLUMN) -->
<div
  class="right-sidebar"
  style="
    position: absolute;
    right: 40px;
    top: 260px;
    width: 280px;
    background: white;
  "
>

  <h2 style="
    font-size: 1.5rem;
    margin-top: 0;
    color: #004f52;
  ">
    Academic & Study Resources
  </h2>


  <p style="
    font-size: 14px;
  ">
    Free templates, study guides, and academic resources I’ve created.
  </p>


  <div
    id="resources-list"
    style="
      margin-top: 20px;
    "
  >
    <!-- Add resources here -->
  </div>

</div>