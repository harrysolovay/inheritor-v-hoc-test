import React, { Component } from 'react'
import { render } from 'react-dom'



// class WrapTarget extends Component {

//   render() {
//     return (
//       <div>HOC wrap target. Name: { this.props.name }</div>
//     )
//   }

//   componentDidMount() {
//     console.log('WrapTarget mounted')
//   }

// }



// const createHOC = (Target) => (
//   class extends Component {

//     render() {
//       return <Target { ...this.props } />
//     }

//     componentDidMount() {
//       console.log('HOC mounted')
//     }

//   }
// )



// const HOC = createHOC(WrapTarget)



class Giver extends Component {

  render() {
    return (
      <div>extended. name: { this.props.name }</div>
    )
  }

  componentDidMount() {
    console.log('Giver mounted')
  }

}



class Inheritor extends Giver {

  render() {
    return super.render()
  }

  componentDidMount() {
    super.componentDidMount()
    console.log('Inheritor Mounted')
  }

}



class App extends Component {
  render() {
    // return <HOC name='harry' />
    return <Inheritor name='harry' />
  }
}



render(<App />, document.getElementById('root'))