import { fn } from 'storybook/test';

import SearchForm from '../components/SearchForm';
import "../App.css"
import "../index.css"

export default {
  title: "Components/SearchForm",
  component: SearchForm,
  tags: ["autodocs"],
  args: {
    initialQuery: "",
    placeholder: "",
    onSearch:  fn(),
  }
};

export const Default = {}

export const WithInitialQuery = {
  args: {
    initialQuery: "Mr. Robot",
  },
};

export const CustomPlaceholder = {
  args: {
    placeholder: "What do you want to watch?",
  },
};