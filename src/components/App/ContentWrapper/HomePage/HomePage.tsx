import React from 'react';
import './HomePage.css';
import Tiles from './Tiles/Tiles';

const tiles = [
  {
    id: '001',
    name: 'Random4',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat culpa, eaque sequi est, sapiente eos nisi adipisci natus eum rem accusantium doloremque tempore assumenda, quam voluptate nihil iure impedit quae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat culpa, eaque sequi est, sapiente eos nisi adipisci natus eum rem accusantium doloremque tempore assumenda, quam voluptate nihil iure impedit quae?',
    icon: 'icon-cogs'
  },
  {
    id: '002',
    name: 'Random1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat culpa, eaque sequi est, sapiente eos nisi adipisci natus eum rem accusantium doloremque tempore assumenda, quam voluptate nihil iure impedit quae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat culpa, eaque sequi est, sapiente eos nisi adipisci natus eum rem accusantium doloremque tempore assumenda, quam voluptate nihil iure impedit quae?',
    icon: 'icon-cogs'
  },
  {
    id: '003',
    name: 'Random4',
    text: 'text',
    icon: 'icon-cogs'
  },
  {
    id: '004',
    name: 'Random4',
    text: 'text',
    icon: 'icon-cogs'
  },
  {
    id: '005',
    name: 'Random2',
    text: 'text',
    icon: 'icon-cogs'
  },
  {
    id: '006',
    name: 'Random4',
    text: 'text',
    icon: 'icon-cogs'
  }
];

const HomePage = () => {
  return (
    <div>
      <Tiles tiles = { tiles } />
    </div>
  )
}

export default HomePage;