import React from 'react';
import MicroFrontend from '../MicroFrontend';

const hostOne = 'http://localhost:3006';

export const One = () => {
   return <MicroFrontend  name="One" host={hostOne}/>
}