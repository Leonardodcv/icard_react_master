import React from 'react';
import { Navigation } from './routers';
import { ClientLayout } from './layouts';

export default function App() {
  return (
    <div className='app'>
      <h1 className='app__title'>Hola mundo!</h1>
      <Navigation />
    </div>
  );
}
