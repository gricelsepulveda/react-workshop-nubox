import React from 'react'

class App extends React.Component { 

  constructor(props){
    super(props)
    this.state = {
      lista: [],
    }
  }

  componentDidMount = () => {
    console.log('componentDidMount',this.state.lista)
    fetch('https://swapi.co/api/people')
      .then((response)=>{
        console.log(response)
        return response.json()
      })
      .then((data)=>{
        console.log(data)
        this.setState({ lista : data.results })
        return
      })
      .catch((error)=>{
        console.log(error)
      })
  }

  render(){
    console.log('render', this.state.lista)
    return (
      <div></div>
    )
  }

}

export default App
