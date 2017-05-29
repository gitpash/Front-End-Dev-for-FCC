import React from 'react'

// render next player msg and if game win replace it with winner
const DisplayText = props => (
  <div className="log-text">
    {!props.win ?
      <p>Next Turn: {props.value ? 'X' : 'O'}</p> :
      <p>Winner is: {props.lastPlayer}</p>}
  </div>
)

export default DisplayText
