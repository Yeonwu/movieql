import { getMoives, getBytId, deleteMovie, addMovie } from "./db";

const resolvers = {
  Query: {
    movies: () => getMoives(),
    movie: (_, { id }) => getBytId(id),
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, {id}) => deleteMovie(id)
  },
};

export default resolvers;
