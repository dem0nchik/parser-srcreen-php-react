import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Photos from './components/Photos/Photos';
import Loader from './components/Loader/Loader';

class App extends React.Component {
    state = {
      data: [
        {
          "img": "https://image.prntscr.com/image/4-Vk-fVSSwmeAmUISRpP-A.png"
        },
        {
          "img": "https://image.prntscr.com/image/ShD509agQ-ieTdC019F1RA.png"
        },
        {
          "img": "https://image.prntscr.com/image/Tq2__3DbQm6sdu0GYQQSVg.png"
        },
        {
          "img": "https://image.prntscr.com/image/MfBD_rPUR5medii6h7gX8w.png"
        },
        {
          "img": "https://image.prntscr.com/image/4Ue3S90lTcqRBUHcvCG6Ug.png"
        },
        {
          "img": "https://image.prntscr.com/image/VPJUVZLxQme_WiFjLC9oUw.png"
        },
        {
          "img": "https://image.prntscr.com/image/_HPMsNP5SZ2wUNRqWjHgqQ.png"
        }
      ],
      isLoading: false
    }

  getPhotos(count) {    
    this.setState({ isLoading: true })
    fetch(`http://parser-scrin.zzz.com.ua/src/api?count=${count}`)
      .then(response => {
          return response.json()
        })
        .then(data => { 
          this.setState({isLoading: false, data: data})
        })
  }

  render(){
    console.log(this.state.data)
    return (
      <div className="App">
        <Header getPhotos={this.getPhotos.bind(this)} />
      
        {this.state.isLoading && <Loader/>}
        <Photos data={this.state.data}/>
      </div>
    );
  }
}

export default App;
