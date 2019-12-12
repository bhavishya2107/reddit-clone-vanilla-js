let div = document.querySelector('.main-content-div')
let title = document.querySelector('span')

fetch('https://www.reddit.com/r/Nike.json')
    .then(res => res.json())
    .then(resp => {
        resp.data.children.map((e) => {
            const html = `<div class="cards">
            <aside class="cards-aside">
                    <i class="fas fa-arrow-up"></i>
                    <span class="upvote-count">${e.data.ups}</span>
                    <i class="fas fa-arrow-down"></i>
            </aside>
            <div class="cards-content">
                <span class="posted-by">Posted By ${e.data.author_fullname}</span>
                <span class="title">${e.data.title}</span>
                <p>${e.data.selftext}</p>
            </div>
            </div>`
            div.innerHTML += html;
        })
    })

