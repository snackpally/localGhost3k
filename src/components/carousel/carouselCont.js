import React from 'react';
import axios from 'axios';
import './Cindex.css';
import Card from './card';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';

export default class Carousel extends React.Component {

  constructor(){
    super()
    this.state={
      children: [],
      activeItemIndex: 0,
      data: "",
    }
    this.cards = []
  }

  componentWillMount() {
    axios.get('http://localhost:3001/location/test').then(res=>{
      console.log(res);
      console.log(res.data);
      this.setState({
        data: res.data,
        ready:true
      });
      this.generateCards()
    });
  }
  generateCards() {
    for (let i = 0; i < this.state.data.length;i++){
      this.cards.push(<Card key={i} data={this.state.data[i]}/>)
      console.log("card", this.state.data[i])
    }
  }

  //   setTimeout(() => {
  //     this.setState({
  //       children: this.createChildren(20),
  //     })
  //   }, 100);


  createChildren = n => range(n).map(i => <div key={i} style={{ height: 200, background: '#333' }}>{i}</div>);

  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

  render() {
    const {
      activeItemIndex,
      children,
    } = this.state;

    return (
      <ItemsCarousel
      // Placeholder configurations
      enablePlaceholder
      numberOfPlaceholderItems={5}
      minimumPlaceholderTime={1000}
      // placeholderItem={<div style={{ height: 200 }}>{this.cards}</div>}

      // Carousel configurations
      numberOfCards={3}
      gutter={5}
      showSlither={false}
      firstAndLastGutter={true}
      freeScrolling={true}

      // Active item configurations
      requestToChangeActive={this.changeActiveItem}
      activeItemIndex={activeItemIndex}
      activePosition={'center'}

      chevronWidth={24}
      rightChevron={'>'}
      leftChevron={'<'}
      outsideChevron={false}

      springConfig={{"stiffness":120,"damping":14}}
      >
      {this.cards}
      </ItemsCarousel>
    );
  }
}


//   constructor(){
//     super()
//     this.state={
//       data: "",
//       ready:false
//     }
//     this.cards = []
//   }
//
//   componentDidMount(){
//     //new route will be /allGhost
//     axios.get('http://localhost:3001/location/test').then(res=>{
//       this.setState({
//         data: res.data,
//         ready:true
//       });
//     });
//   }
//
//   generateCards() {
//     for (let i = 0; i < this.state.data.length; i++){
//       this.cards.push(<Card key={i} data={this.state.data[i]}/>)
//     }
//   }
//
//   render() {
//     this.generateCards()
//     if (this.state.ready) {
//       return(
//         <div className="container-fluid">
//         <h1 className="text-center mb-3">GHOST</h1>
//           <div id="myCarousel" className="carousel slide" data-ride="carousel">
//             <div className="carousel-inner row w-50 mx-auto" >
//               <div className="carousel-item col-md-4 active">
//                 <div className = 'box'>
//                 {this.cards}
//                 </div>
//               </div>
//               <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
//                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span className="sr-only">Previous</span>
//               </a>
//               <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
//                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span className="sr-only">Next</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       )
//     } else {
//       return (<div>Loading...</div>)
//     }
//   }
// }
//


// export default Carousel;
