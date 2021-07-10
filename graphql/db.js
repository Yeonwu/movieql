export let movies = [
  {
    id: 0,
    name: "Star Wars - Last Jedai",
    score: 1
  },
  {
    id: 1,
    name: "Avengers - End Game",
    score: 99
  },
  {
    id: 2,
    name: "Logan",
    score: 2
  },
  {
      id: 3,
      name: "Spiderman - Far From Home",
      score: 8
  }
];

export const getMoives = () => movies;

export const getBytId = (id) => {
  const filteredPeople = people.filter((person) => id === person.id);
  return filteredPeople[0];
};

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => id !== movie.id);
    const deletedMovie = movies.filter(movie => id === movie.id)[0];
    if(movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return deletedMovie;
    } else {
        return null;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: movies.length,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}