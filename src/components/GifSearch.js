import React, { Component } from 'react'

export default class GifSearch extends Component {
  constructor(){
    super()

    this.state = {
      query: ""
    }
  }

  onEventHandler = (event) => {
    event.preventDefault()
    this.props.fetchGifs(this.state.query)
  }

  render() {

    return (
      <div className='searchForm'>
        <form onSubmit={this.onEventHandler}>
          <input 
          type="text"
          placeholder="Search..."
          value={this.state.query}
          onChange={ event => this.setState({ query: event.target.value }) } 
          ></input>
        </form>
      </div>
    )
  }
}
