import MovieTile from '../components/MovieTile';
import {movies} from "../const/movies";

export default {
    title: 'Components/MovieTile',
    component: MovieTile,
    tags: ["autodocs"],
    argTypes: {
        movieInfo: { control: 'object' },
        onMovieClick: { action: 'movie clicked' },
    },
};

const Template = (args) => <MovieTile {...args} />;

export const Default = Template.bind({});
Default.args = {
    movieInfo: movies[0],
};