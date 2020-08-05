document.querySelector('button').addEventListener('click', () => {
    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let num = Math.floor(Math.random() * Math.floor(data.length));
            let quote = data[num].text;
            let nameOfAuthor = data[num].author;
            let txt = document.querySelector('.quote');
            let by = document.querySelector('.author');
            txt.textContent = quote;
            by.textContent = `by ${ nameOfAuthor}`;
            console.log(num);
        });
})