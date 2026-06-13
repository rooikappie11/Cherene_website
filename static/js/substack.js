const feedUrl = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fcherenedebruyn.substack.com%2Ffeed`;

async function fetchLatestPosts() {
  try {
    const response = await fetch(feedUrl);
    const data = await response.json();

    const latestItems = (data.items || []).slice(0, 3);

    if (latestItems.length > 0) {
      const postsHTML = latestItems.map(item => {
        const imageUrlMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
        const imageUrl = imageUrlMatch ? imageUrlMatch[1] : '';

        const title = item.title;
        const subtitle = item.description || '';

        return `
  <div class="post">
    <a href="${item.link}" class="link_with_image" target="_blank">
      <div class="post_image_wrapper">
        ${imageUrl ? `<img src="${imageUrl}" alt="${title}" class="featured-image">` : ''}
      </div>
      <div class="post_meta_data">
        <h3>${title}</h3>
      </div>
    </a>
  </div>
`;


      }).join('');

      document.getElementById('latest-posts').innerHTML = postsHTML;
    } else {
      document.getElementById('latest-posts').textContent = 'No posts available.';
    }
  } catch (error) {
    document.getElementById('latest-posts').textContent = 'Failed to load the latest posts.';
    console.error('Error fetching the RSS feed:', error);
  }
}

fetchLatestPosts();
