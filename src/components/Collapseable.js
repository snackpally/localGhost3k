import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card, Media } from 'reactstrap';
import './component.css';

export default class Collapseable extends Component {
  constructor(props) {
    super(props);

    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  componentDidMount() {
    this.setState({ collapse: true });
  }

  render() {
    console.log('PROPS', this.props.data);
    return (
      <div>
        <Collapse isOpen={this.state.collapse} toggle={this.markers} className={this.props.className} className="Collapse">
          <Media>
            <Media left href="#">
              <Media object data-src="{this.props.data.loc_img}" alt="Collapse placeholder image" />
            </Media>
            <Media body>
              <Media heading>{this.props.data.place_name}</Media>
              <Media heading>{this.props.data.address.city}</Media>
              {this.props.data.loc_desc}
            </Media>
          </Media>
          <Button color="secondary" size="sm">
            More info....
          </Button>
          <Button color="danger" size="lg">
            Add to Profile
          </Button>{' '}
          <Button color="secondary" size="lg">
            Add to tour
          </Button>
        </Collapse>
      </div>
    );
  }
}

// <img className="collapse-img" src={this.props.data.loc_img}/>
// <h3 className="collapse-place_name" > {this.props.data.place_name}</h3>
// <h4 className="collapse-city" > {this.props.data.address.city}</h4>
// <p className="collapse-loc_desc"> {this.props.data.loc_desc}</p>
// <h5 className="collapse-source">{this.props.data.info_source}</h5>

// import React, { Component } from 'react';
// import { Collapse, Button, CardBody, Card } from 'reactstrap';
//
// export default class Collapsable extends Component {
//   constructor(props) {
//     super(props);
//     this.onEntering = this.onEntering.bind(this);
//     this.onEntered = this.onEntered.bind(this);
//     this.onExiting = this.onExiting.bind(this);
//     this.onExited = this.onExited.bind(this);
//     this.markers = this.markers.bind(this);
//     this.state = { collapse: false, status: 'Closed' };
//   }
//
//   onEntering() {
//     this.setState({ status: 'Opening...' });
//   }
//
//   onEntered() {
//     this.setState({ status: 'Opened' });
//   }
//
//   onExiting() {
//     this.setState({ status: 'Closing...' });
//   }
//
//   onExited() {
//     this.setState({ status: 'Closed' });
//   }
//
//   marker() {
//     this.setState({ collapse: !this.state.collapse });
//   }
//
//   render() {
//     return (
//       <div>
//         {/*/<Marker  onClick={this.marker} </Marker>*/}
//         <h5>Current state: {this.state.status}</h5>
//         <Collapse
//           isOpen={this.state.collapse}
//           onEntering={this.onEntering}
//           onEntered={this.onEntered}
//           onExiting={this.onExiting}
//           onExited={this.onExited}
//         >
//           <Card>
//             <CardBody>
//               <div className="card-body">
//                   <img>{this.params.data.loc_img}</img>
//                   <h1 className="collapse-place_name" > {this.params.data.place_name}</h1>
//                   <h2 className="collapse-city" > {this.params.data.address.city}</h2>
//                   <p className="collapse-loc_desc"> {this.params.data.loc_desc}</p>
//                   <h5 className="collapse-source">{this.params.data.info_source}</h5>
//                   <Button color="secondary" size="sm">More info....</Button>
//
//               <Button color="danger" size="lg">Add to Profile</Button>{' '}
//               <Button color="secondary" size="lg">Add to tour</Button>
//             </CardBody>
//           </Card>
//         </Collapse>
//       </div>
//     );
//   }
// }
