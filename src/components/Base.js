import React from 'react'

class Base extends React.Component {

  render() {
    return (
      <div>
        <ol id="list">
          <ul> 
            <li key={1}> <span >Nombre 1</span> </li>
            <li key={2}> <span >Nombre 2</span> </li>
            <li key={3}> <span >Nombre 3</span> </li>
            <li key={4}> <span >Nombre 4</span> </li>
          </ul>
        </ol>
      </div>)
  }
}

export default Base
