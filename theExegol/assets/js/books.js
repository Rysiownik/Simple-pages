const books = document.querySelectorAll('.book');
books.forEach((book) => {
    book.addEventListener('click', () => {
        const a = document.createElement('a');
        a.href = book.querySelector('a').href;
        book.appendChild(a);
        a.click();
    });
});
