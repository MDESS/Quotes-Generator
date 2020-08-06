/* generate button event */
document.querySelector('button').addEventListener('click', () => {
    /* bringing the json file i did that to make the generator work smoother then before, 
    because i was fetching from website directly and i was look a bit slow */
    fetch("quotes.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            /* using math method to pick a random number */
            let num = Math.floor(Math.random() * Math.floor(data.length));
            /* put the random number into data and manipulate through text and author */
            let quote = data[num].text;
            let nameOfAuthor = data[num].author;
            /* using DOM to reach the paragraph sections */
            let txt = document.querySelector('.quote');
            let by = document.querySelector('.author');
            /* Finaly put data into paragraph sections */
            txt.textContent = quote;
            by.textContent = `by ${ nameOfAuthor}`;
        });
})