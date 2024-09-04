let favoriteBooks = [] ;
let bookName ;

function addFavoriteBook(bookName) {
    if (bookName.includes("Beauty" || "beauty")) {
        favoriteBooks.push(bookName);
    }
}

addFavoriteBook("Let Me Tell You What I Mean");
addFavoriteBook("Life Among the Terranauts");
addFavoriteBook("The Beauty of Living Twice");
addFavoriteBook("Black Beauty");
addFavoriteBook("Monstrous Beauty");

console.log(favoriteBooks);
