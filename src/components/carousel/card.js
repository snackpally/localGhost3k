import React from 'react';
import axios from 'axios';
import Carousel from './carouselCont';
import "./Cindex.css";



class Card extends React.Component {
	render() {
		const testStyle = {backgroundImage:"url({this.props.data.loc_img_link})",};
		console.log("title", this.props.data)
		return(
      <div className="container">
        <div className="row">
          <div className="card" className="card-style">
            <div style={testStyle} className="card-body">
              <h5 className="card-title" className="ghost-name">{this.props.data.ghost_name}</h5>
              <h3 className="title" className="place-name">{this.props.data.place_name}</h3>
              <p className="loc-info">{this.props.data.loc_desc}</p>
							{/*<img src={this.props.data.loc_img_link}/>*/}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;
