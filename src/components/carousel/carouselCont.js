import React from 'react';
import axios from 'axios';
import './Cindex.css';
import Card from './card';

class Carousel extends React.Component {
  constructor(){
    super()
    this.state={
      data: "",
      ready:false
    }
    this.cards = []
  }

  componentDidMount(){
    axios.get('http://localhost:3001/location/test').then(res=>{
      this.setState({
        data: res.data,
        ready:true
      });
    });
  }

  generateCards() {
    for (let i = 0; i < this.state.data.length; i++){
      this.cards.push(<Card key={i} data={this.state.data[i]}/>)
    }
  }

  render() {
    this.generateCards()
    if (this.state.ready) {
      return(
        <div className="container-fluid">
        <h1 className="text-center mb-3">GHOST</h1>
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner row w-50 mx-auto" >
              <div className="carousel-item col-md-4 active">
                <div className = 'box'>
                {this.cards}
                </div>
              </div>
              <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      )
    } else {
      return (<div>Loading...</div>)
    }
  }
}



export default Carousel;
