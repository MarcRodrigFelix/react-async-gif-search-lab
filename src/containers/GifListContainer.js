import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
  constructor(){
    super()

    this.state = {
      images: []
    }
  }


  render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifs={this.state.images}/> 
      </div>
    )
  }


  fetchGifs = ( query = 'dolphin' ) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=8CwYitUnlHwwo0ulnMsA8unLwe6RPoxu&rating=g&limit=3`)
    .then( resp => resp.json() )
    .then( ({data}) => { 
      this.setState({ 
        images: data.map( gif => ({ url: gif.images.original.url }) )
      })
    })
  }


  componentDidMount() {
    this.fetchGifs()
  }
  
}
