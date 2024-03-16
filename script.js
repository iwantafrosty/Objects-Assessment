// Array of favorite movies
const favoriteMovies = [
    {
        name: "Spirited Away",
        year: 2001,
        director: "Hayao Miyazaki",
        picture: "https://www.insidejapantours.com/blog/2015/12/01/5-anime-films-for-people-who-dont-like-anime/0dcfe3c2c4aac937273d5563ca9a029753f1acb6/"
    },
    {
        name: "I Want to Eat Your Pancreas",
        year: 2018,
        director: "Shinichiro Ushijima",
        picture: "https://qph.cf2.quoracdn.net/main-qimg-7dfe783ef20101c963020e17afbd8ea7-lq"
    },
    {
        name: "Wolf Children",
        year: 2012,
        director: "Mamoru Hosoda",
        picture: "https://m.media-amazon.com/images/M/MV5BOTk0NzA1N2QtYWQ2ZS00MDBlLWE0NWEtZWE3OGRhOTc1YTk5XkEyXkFqcGdeQXVyMTM1MDExOTE2._V1_.jpg"
    }
];

// Function to create list items for each movie
function createMovieListItems(movies) {
    return movies.map(movie => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <h2>${movie.name} (${movie.year})</h2>
            <p>Directed by: ${movie.director}</p>
            <img src="${movie.picture}" alt="${movie.name} Poster" width="200">
        `;
        return listItem;
    });
}

// Get the <ol> element
const movieList = document.getElementById('movie-list');

// Create and append list items for each movie
const movieListItems = createMovieListItems(favoriteMovies);
movieListItems.forEach(item => {
    movieList.appendChild(item);
});
