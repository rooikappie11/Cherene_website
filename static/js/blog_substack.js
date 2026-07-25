console.log("BLOG SUBSTACK SCRIPT IS RUNNING");

const feedUrl = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fcherenedebruyn.substack.com%2Ffeed`;

async function fetchLatestPosts() {
  try {
    const response = await fetch(feedUrl);
    const data = await response.json();

    const latestItems = (data.items || []).slice(0, 10);

    if (!latestItems.length) {
      document.getElementById('latest-posts').textContent = 'No posts available.';
      return;
    }

    const postsHTML = latestItems.map(item => {
      const imageUrlMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
      const imageUrl = imageUrlMatch ? imageUrlMatch[1] : '';

      const date = new Date(item.pubDate).toLocaleDateString("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });

      return `
        <a href="${item.link}" target="_blank" style="text-decoration:none; color:inherit;">
          <div style="
            width: 100%;
            max-width: 550px;
            margin: 0 auto 40px auto;
            border-radius: 12px;
            overflow: hidden;
            background: #ffffff;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          ">

            <!-- PERFECTLY UNIFORM IMAGE SHAPE -->
            <div style="
              width: 100%;
              aspect-ratio: 16 / 9;   /* THIS makes all images identical */
              overflow: hidden;
              background: #eee;
            ">
              ${imageUrl ? `
                <img src="${imageUrl}" alt="${item.title}" style="
                  width: 100%;
                  height: 100%;
                  object-fit: cover;   /* fills the 16:9 box perfectly */
                ">
              ` : ''}
            </div>

            <!-- TEXT AREA -->
            <div style="padding: 20px;">
              <h3 style="margin: 0 0 10px 0; font-size: 1.4rem; color:#004f52;">
                ${item.title}
              </h3>
              <p style="margin: 0; font-size: 0.9rem; color:#555;">
                ${date}
              </p>
            </div>

          </div>
        </a>
      `;
    }).join('');

    document.getElementById('latest-posts').innerHTML = postsHTML;

  } catch (error) {
    document.getElementById('latest-posts').textContent = 'Failed to load the latest posts.';
    console.error('Error fetching the RSS feed:', error);
  }
}

fetchLatestPosts();
