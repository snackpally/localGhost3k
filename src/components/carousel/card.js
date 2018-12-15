// import React from 'react';
// //import axios from 'axios';
// import Carousel from './carouselCont';
// import './carousel.css';

class Card extends React.Component {
  render() {
    let background = {
      backgroundImage: `url(${this.props.data.loc_img_link})`
    };
    return (
      <div className="container">
        <div className="row">
          <div className="card card-style">
            <div className="card-image-overlay" style={{background, maxHeight:'100%', maxWidth:'100%'}>
              //* <h5 className="card-title" className="ghost-name">
              //   {this.props.data.ghost_name}
              // </h5>*/
              <h3 className="title place-name">{this.props.data.place_name}</h3>
              //<p className="loc-info">{this.props.data.loc_desc}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
