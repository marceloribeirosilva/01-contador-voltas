import React from 'react';

const MostraVoltas = (props) => {
  return (
    <p>
      {props.voltas}<br />
    Voltas
    </p>
  )
}

const MostraTempo = (props) => {
  return (
    <p>{props.tempo} <br /> Tempo Médio por volta</p>
  )
}

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

function App() {
  let numVoltas = 14

  const increment = () => {
    numVoltas ++
    console.log('increment')
  }

  const decrement = () => {
    numVoltas --
    console.log('decrement')
  }

  return (
    <div>
      <MostraVoltas voltas={numVoltas}/>
      <Button text='+' onClick={increment}/>
      <Button text='-' onClick={decrement}/>
      <MostraTempo tempo='01:30'/>
      <Button text='Iniciar' />
      <Button text='Reiniciar' />
    </div>
  );
}

export default App;
