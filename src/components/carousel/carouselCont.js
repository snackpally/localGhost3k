import React from 'react';
import axios from 'axios';
import GhostCard from './cardNew';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import './carouselStyle.css';

//TODO: limit carousel count by random or location...
export default class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {
      activeItemIndex: 0,
      data: ''
    };
    this.cards = [];
  }

  componentWillMount = () => {
    axios.get('http://localhost:3001/location/cards').then(res => {
      console.log(res);
      console.log('carousel', res.data);
      this.setState({
        data: res.data,
        ready: true
      });
      this.generateCards();
    });
  };

  generateCards = () => {
    for (let i = 0; i < this.state.data.length; i++) {
      this.cards.push(<GhostCard key={i} data={this.state.data[i]} />);
    }
  };

  changeActiveItem = activeItemIndex => this.setState({ activeItemIndex });

  render() {
    const { activeItemIndex, children } = this.state;

    console.log('carosel');
    return (
      <div className="chevron">
        <ItemsCarousel
          enablePlaceholder
          numberOfPlaceholderItems={5}
          minimumPlaceholderTime={1000}
          numberOfCards={5}
          gutter={5}
          showSlither={false}
          firstAndLastGutter={true}
          freeScrolling={false}
          requestToChangeActive={this.changeActiveItem}
          activeItemIndex={activeItemIndex}
          activePosition={'center'}
          chevronWidth={24}
          rightChevron={'>'}
          leftChevron={'<'}
          outsideChevron={false}
          springConfig={{ stiffness: 120, damping: 14 }}>
          {this.cards}
        </ItemsCarousel>
      </div>
    );
  }
}
