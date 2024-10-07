document.addEventListener("DOMContentLoaded", function() {
    const feedUrl = "https://feeds.bbci.co.uk/news/world/rss.xml";
    const rssToJsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=${feedUrl}`;

    fetch(rssToJsonUrl)
        .then(response => response.json())
        .then(data => {
            let htmlContent = '';
            data.items.forEach(item => {
                htmlContent += `
                    <div class="feed-item">
                        <h3><a href="${item.link}" target="_blank">${item.title}</a></h3>
                        <p>${item.description}</p>
                    </div>
                `;
            });
            document.getElementById('feedControl').innerHTML = htmlContent;
        })
        .catch(error => {
            document.getElementById('feedControl').innerHTML = 'Failed to load feed';
            console.error('Error fetching the RSS feed:', error);
        });
});
