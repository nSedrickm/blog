//controls all blog post placements

var post_section = document.getElementById("articles-section");
console.log(post_section);

post_section.append(`<article class="card my-5 border-0">

<div class="card-img-top">
    <a href="single-blog.html">
        <img class="card-img rounded-0" src="img/blog/single_blog_2.png" alt="post photo">
    </a>
    <a href="#" class="post_date">
        <h3>15</h3>
        <p class="text-white my-2">Jan</p>
    </a>
</div>

<div class="card-body shadow">
    <a href="single-blog.html">
        <h2 class="card-title my-4 calistoga">Google inks pact for new 35-storey office
        </h2>
    </a>
    <p class="card-text alata"> That dominion stars lights dominion divide years for
        fourth
        have
        don't stars is
        that
        he earth it first without heaven in place seed it second morning saying.</p>
    <ul class="list-group list-group-horizontal">
        <li class="list-group-item border-0 pl-0"><a href=" #"><i
                    class="far fa-user"></i>Travel,
                Lifestyle</a></li>
        <li class="list-group-item border-0 pl-0"><a href=" #"><i
                    class="far fa-comments"></i>
                03 Comments</a></li>
        </li>
    </ul>
</div>

</article>`);