document.addEventListener('DOMContentLoaded', function() {
    // Code to dynamically load blog posts
});
// document.querySelectorAll('.social a').forEach(link => {
//     link.addEventListener('click', function(e) {
//         e.preventDefault();
//         window.open(this.href, '_blank', 'width=600,height=400');
//     });
// });
// Sample data (this could come from an API or a JSON file)
const blogPosts = [
    {
        id: 1,
        title: "Shubman Gill keen to improve his T20I performance",
        content: "Shubman Gill, India's vice-captain in ODIs and T20Is, has said he aims to improve his performance in the shortest format, as the team begins to build towards defending their T20 World Cup title in 2026.My performance in T20Is before the World Cup this year wasn't how I had expected it to be, Gill said ahead of the series opener against Sri Lanka in Pallekele. Hopefully, going forward, in the upcoming cycle - I think we play 30-40 T20Is [before the next T20 World Cup] - I can improve my performance when it comes to batting, and also [we can improve] as a team.Gill was a reserve player and not part of the squad that just won the T20 World Cup 2024 in the USA and West Indies, where India opened with Rohit Sharma and Virat Kohli. With both senior batters now retired from T20Is, Gill and Yashasvi Jaiswal, who was the back-up opener at the World Cup, are now first choice for India at the top of the order We really enjoy batting with each other. Especially the kind of shots we play, we kind of complement each other, Gill said of his partnership with Jaiswal. Being a right-left combination, we have had good partnerships in whatever T20Is we have played before; two partnerships have been 150-plus [too]. So we have    agreat understanding and communication between us, and I have fun batting with him.",
        author: "ESPN Cricinfo",
        date: "2024-07-22",
        tags: ["tag1", "tag2"],
        category: "sports"
    },
   
      
    ];
    // Add more posts as needed
const politics=[
    {
        id: 2,
        title: "4 ideas have won the election",
        content: "The 2024 general election is going to be an important event for two reasons. First, the outcome of this electoral battle will decide the political destiny of two powerful coalitions – BJP-led NDA and Congress dominated INDIA bloc. BJP has so far relied heavily on Modi. It will be interesting to observe how this Modicentric campaign helps the party retain its electoral hegemony.On the other hand, Opposition, especially Congress, has been successful so far in establishing itself as a serious challenger. This is certainly a new development. BJP’s electoral success has played a significant role in the political marginalisation of Opposition in the last 10 years. This time, however, Opposition is much more active in pursuing an aggressive electoral campaign. This aggressive politics will certainly have an impact on the electoral outcome.",
        author: "hilal ahmad",
        date: "2024-07-21",
        tags: ["tag2", "tag3"],
        category: "politics"
    }
]

// Function to display blog posts on the homepage
function displayPosts() {
    const postsContainer = document.querySelector('.recent-posts');
    blogPosts.forEach(post => {
        const postElement = document.createElement('article');
        postElement.className = 'post';
        postElement.innerHTML = `
            <h3><a href="post${post.id}.html">${post.title}</a></h3>
            <p>${post.content.substring(0, 20)}...</p>
            <p class="meta">By ${post.author} on ${post.date}</p>
        `;
        postsContainer.appendChild(postElement);
    });
}
function displayPosts2() {
    const postsContainer2 = document.querySelector('.full');
    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'p';
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content.substring(0, 100)}...</p>
            <p class="meta">By ${post.author} on ${post.date}</p>
            <button class="btn"><a href="post${post.id}.html">Read More</a></button>
        `;
        postsContainer2.appendChild(postElement);
    });
}

function displayPosts3() {
    const postsContainer2 = document.querySelector('.fullp');
   politics.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'p';
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content.substring(0, 100)}...</p>
            <p class="meta">By ${post.author} on ${post.date}</p>
            <button class="btn"><a href="post${post.id}.html">Read More</a></button>
        `;
        postsContainer2.appendChild(postElement);
    });
}



// Call the function to display posts
document.addEventListener('DOMContentLoaded', displayPosts);
document.addEventListener('DOMContentLoaded', displayPosts2);
document.addEventListener('DOMContentLoaded', displayPosts3);



document.addEventListener('DOMContentLoaded', function() {
    const shareButtons = document.querySelectorAll('.social a');

    shareButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const url = window.location.href;
            const title = document.title;
            let shareUrl = '';

            switch (this.getAttribute('href')) {
                case '#facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                    break;
                case '#twitter':
                    shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
                    break;
                // Add more platforms as needed
            }

            window.open(shareUrl, '_blank', 'width=600,height=400');
        });
    });
});

