// src/stories/MovieDetails.stories.jsx
import React from 'react';
import MovieDetails from '../components/MovieDetails';
import { movies } from "../const/movies"; // adjust path

export default {
    title: 'Components/MovieDetails',
    component: MovieDetails,
    tags: ["autodocs"],
    argTypes: {
        movie: { control: 'object' },
    },
};

const Template = (args) => <MovieDetails {...args} />;

export const Default = Template.bind({});
Default.args = {
    movie: movies[0],
};
