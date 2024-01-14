
const author = document.getElementsByClassName("author")[0];
const title = document.getElementsByClassName("title")[0];
const verses = document.getElementsByClassName("verses")[0];
author.innerHTML = '<i class="fa-solid fa-scroll fa-2xl fa-fade"></i>'

getPoem()
    .then(poem => {

        var lines = poem.content.split("\n");
        lines = addBreaks(lines);

        author.innerHTML = poem.author;
        title.innerHTML = poem.title;
        typing(lines, verses);

    })
    .catch(err => console.log(err.message))
