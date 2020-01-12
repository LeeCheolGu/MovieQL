let movies = [
    {
        id: 0,
        name: "Avengers - The end game",
        score: 9.3
    },
    {
        id: 1,
        name: "Toystory",
        score: 7.3
    },
    {
        id: 2,
        name: "Joker",
        score: 9.1
    },
    {
        id: 3,
        name: "IronMan3",
        score: 8.5
    },
    {
        id: 4,
        name: "Bohemian Rhapsody",
        score: 9.0
    },
    {
        id: 5,
        name: "The Frozen2",
        score: 8.1
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
};

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
};

export const addMovie = (name, score) => {
    const newMovie = {
        id: `$(movies.length + 1)`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}
