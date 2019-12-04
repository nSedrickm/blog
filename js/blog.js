//footer date placement
var date = document.getElementById("date");
date.innerHTML = new Date().getFullYear() + " ";

//controls all blog post placements
$(document).ready(() => {
    mydata('../MOCK_DATA_SMALL.json',
        data => {
            dataholder(data);
        });
});

// AJAX
function getJSON(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        callback(this.responseText)
    };
    xhr.open('GET', url, true);
    xhr.send();
}

function mydata(url, callback) {
    getJSON(url, data => callback(JSON.parse(data)));
}

function dataholder(inputdata) {
    console.log("now logging inputdata");
    console.log(inputdata);
    renderHTML(inputdata);
}

// render HTML
function renderHTML(data) {
    var post_section = document.getElementById('articles-section');
    var recent_post_section = document.getElementById('recent_posts');
    var post = '';
    var recent_posts = '';
    for (let i in data) {
        post += `
            <article class="card my-5 border-0">

                            <div class="card-img-top">
                                <a href="single-blog.html">
                                    <img class="card-img rounded" src="${data[i].postImage}" alt="post photo">
                                </a>
                                <a href="#" class="post_date">
                                    <h3>${data[i].postDate}</h3>
                                    <!-- <p class="text-white my-2">${data[i].postDate[7]}</p> -->
                                </a>
                            </div>

                            <div class="card-body shadow">
                                <a href="single-blog.html">
                                    <h2 class="card-title my-4 calistoga">${data[i].postTitle}</h2>
                                </a>
                                <p class="card-text alata">${data[i].postDetails}</p>
                                <ul class="list-group list-group-horizontal">
                                    <li class="list-group-item border-0 pl-0"><a href=" #"><i
                                                class="far fa-user pr-1"></i>${data[i].postTag}</a></li>
                                    <li class="list-group-item border-0 pl-0"><a href=" #">
                                    <i class="far fa-comments"></i>
                                            03 Comments</a></li>
                                    </li>
                                </ul>
                            </div>

                        </article>
            `;
        recent_posts += `<div class="media mb-2">
            <img src="${data[i].postImage}" class="mr-3" alt="...">
            <div class="media-body">
                <a href="#" class="">
                    <h4 class="mt-0 bree">${data[i].postTitle}</h4>
                </a>
                <p class="montserrat m-0">${data[i].postCaption}</p>
                <ul class="list-group list-group-horizontal  ">
                    <li class="list-group-item border-0 pl-0"><a href=" #"><i
                                class="far fa-clock pr-1"></i>${data[i].postDate}
                        </a></li>
                    </li>
                    <li class="list-group-item border-0 pl-0"><a href=" #">
                            <i class="far fa-user pr-1"></i>${data[i].postTag}</a></li>
                    <li class="list-group-item border-0 pl-0"><a href=" #"><i
                                class="far fa-comments"></i>
                            03</a></li>
                    </li>
                </ul>
            </div>
        </div>
            `
    }
    post_section.innerHTML = post;
    recent_post_section.innerHTML = recent_posts;
};

//blog likes toggle
var likes = document.getElementById("like-icon");
var metrics = document.getElementById("like-metrics");
var stats = 0;
likes.addEventListener("click", () => {
    likes.src = "img/icons/liked.svg";
    stats += 1;
    metrics.innerHTML = stats + "k";
});