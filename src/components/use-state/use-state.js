import React, {useState } from 'react';

import Card from '../card/card';

const UseStateExample=()=>{
    const [name, setName] = useState('Marijana');
    const [address, setAddress] = useState('Novi Sad');

    return(
        <Card>
        <h1> {name} </h1>
      <h1> {address} </h1>
      <button onClick={()=>setName('Tadija')}>Set name</button>
      <button onClick={()=>setAddress('Novi Sad')}>Set adress</button>

        </Card>
    )
}

  
  export default UseStateExample;