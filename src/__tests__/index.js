import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import compare from '../helpers/compare';

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it("Sort atrists by artist name", () => {
  const artists = [
    {artistName: 'Madonna'},
    {artistName: 'Elton'},
    {artistName: 'Freddy'},
    {artistName: 'Paul'},
  ];

  artists.sort(compare.bind(null, 'artistName'));

  expect(artists).toEqual([
    {artistName: 'Elton'},
    {artistName: 'Freddy'},
    {artistName: 'Madonna'},
    {artistName: 'Paul'},
  ]);
});