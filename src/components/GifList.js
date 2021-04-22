import React, { Component } from 'react'

export default class GifList extends Component {


  render() {

    return (
      <div>
        <ul>
            { this.props.gifs.map( gif => <li>
              <img key={gif.url} src={gif.url} alt="gif" ></img>
            </li> ) }
        </ul>
      </div>
    )
  }
}


// import React from 'react'

// const GifList = (props) => {
  
//   // console.log(props.gifs)

//   return (
//     <div>
          // <ul>
          //   <li>
          //     { props.gifs.map( gif => <img key={gif.url} src={gif.url} alt="gif" /> ) }
          //   </li>
          // </ul>
//     </div>
//   )
// }


// export default GifList;