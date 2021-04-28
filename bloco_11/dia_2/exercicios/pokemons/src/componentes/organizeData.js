import React from 'react';
import data from '../data';

class organizePokemons extends React.Component {
  render () {
    return data.map(({ id, name, type, averageWeight, image }) => {
      return (<section key = { id }>
        <div>
        <p>
          {name}
        </p>
        <p>
          {type}
        </p>
        <p>
          {averageWeight.value} {averageWeight.measurementUnit}
        </p>
        </div>
        <img src = {image} alt = {name}/>
      </section>)
    })
  }
}

export default organizePokemons;