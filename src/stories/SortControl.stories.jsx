import React, { useState } from 'react';
import SortControl from '../components/SortControl';
import "../App.css";
import "../index.css";
import { sorting } from "../const/movies";

export default {
  title: 'Components/SortControl',
  component: SortControl,
  tags: ["autodocs"],
  argTypes: {
    currentSelection: { control: 'text' },
    currentOrder: {
      control: { type: 'radio' },
      options: ['asc', 'desc'],
    },
    sortingOptions: { control: 'array' },
    onSortChange: { action: 'sort changed' },
    onOrderChange: { action: 'order changed' },
  },
};

const Template = (args) => {
  const [selection, setSelection] = useState(args.currentSelection);
  const [order, setOrder] = useState(args.currentOrder);

  const handleSortChange = (value) => {
    setSelection(value);
    args.onSortChange(value);
  };

  const handleOrderChange = (value) => {
    setOrder(value);
    args.onOrderChange(value);
  };

  return (
    <SortControl
      {...args}
      currentSelection={selection}
      currentOrder={order}
      onSortChange={handleSortChange}
      onOrderChange={handleOrderChange}
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  currentSelection: sorting[0].value,
  currentOrder: 'asc',
  sortingOptions: sorting,
};
