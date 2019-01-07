import React from 'react';
import { Media, Button, Form, FormGroup, Label, Input, Card, CardText, CardBody, CardSubtitle } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ghostInfo.css';
import Leaflet from 'leaflet';
import { Map, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import ghostIcon from '../../assets/image/Spookyghost.png';

const littleMapStyle = {
  height: '250px',
  width: '250px',
  position: 'relative',
  outline: 'none',
  marginLeft: '1em',
  marginRight: '2em',
  marginTop: '4em',
  border: 'solid',
  borderRadius: '.5em'
};

const ghostSingleIcon = new Leaflet.Icon({
  iconUrl: ghostIcon,
  iconSize: [30, 30]
});

export default class GhostInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      ghostData: '',
      mapCenter: '',
      name: '',
      comment: '',
      comments: ''
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  getGhostData(id) {
    return axios.get('http://localhost:3001/location/detail/' + id);
  }

  addComment(id, mes) {
    return axios.post('http://localhost:3001/location/addComment/' + id, mes);
  }

  sendComment = e => {
    e.preventDefault();
    const id = this.props.match.params.id;
    let message = { name: this.state.name, comment: this.state.comment };
    console.log('Message', message);
    console.log('ID', id);
    this.addComment(id, message).then(res => {
      console.log('JSON', res.data);
      console.log('comment', res.data.comment);
      window.location.reload();
    });
  };

  componentDidMount() {
    console.log(this.props.match.params.id);
    const id = this.props.match.params.id;
    console.log('ID', id);
    this.getGhostData(id).then(res => {
      console.log('THE JSON', res.data);
      console.log('coord', res.data.loc.coordinates);
      this.setState({
        ghostData: res.data,
        mapCenter: res.data.loc.coordinates,
        comments: res.data.comment
      });
    });
  }

  ghostStreet() {
    if (this.state.ghostData) {
      let address = this.state.ghostData.address;
      // console.log(this.state.ghostData);
      // console.log('FAIL', address.city);
      if (address.street) {
        return address.street;
      } else {
        return '';
      }
    }
  }
  ghostSource() {
    if (this.state.ghostData.info_source) {
      return this.state.ghostData.info_source;
    } else {
      return 'Unknown';
    }
  }
  ghostCity() {
    if (this.state.ghostData) {
      let address = this.state.ghostData.address;
      if (address.city) {
        return address.city;
      } else {
        return '';
      }
    }
  }

  renderComments() {
    if (this.state.comments) {
      return this.state.comments.map((comment, i) => (
        <div key={i} className="cardWrapper">
          <Card>
            <CardBody>
              <CardSubtitle>{comment.name}</CardSubtitle>
              <CardText>{comment.comment}</CardText>
            </CardBody>
          </Card>
        </div>
      ));
    }
  }

  render() {
    console.log('Comments', this.state.comments);
    console.log(this.state);
    console.log('PROPS', this.props);
    return (
      <div className="GhostInfo">
        <Media>
          <Media left href="#">
            <Media object className="ghostDataImg" src={this.state.ghostData.loc_img_link} alt="Place Image" width="550px" height="550px" />
          </Media>
          <Media body className="ghostDataInfo">
            <Media className="ghostDataPlaceName">
              <h1>{this.state.ghostData.place_name}</h1>
            </Media>
            <Media className="ghostDataAddress">
              <h3>{this.ghostStreet()}</h3>
            </Media>
            <Media className="ghostDataCity">
              <h3>{this.ghostCity()}</h3>
            </Media>
            <Media className="ghostDataLocDesc">
              <p>{this.state.ghostData.loc_desc}</p>
            </Media>
            <Media>
              <h5>Source: {this.ghostSource()}</h5>
            </Media>
            <Button color="secondary" tag={Link} to="/">
              {' < '}
              Back{' '}
            </Button>
          </Media>
          <Map
            className="littleMap"
            center={this.state.mapCenter}
            style={littleMapStyle}
            zoomControl={true}
            scrollWheelZoom={false}
            zoom={16}
            zoomSnap={0}
            zoomDelta={2}
            minZoom={11}
            maxZoom={19}
            maxBoundsViscosity={1}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              id="mapbox.streets"
              url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic2hhcm9uZnVsbGVyIiwiYSI6ImNqcGJlZjk3ODA5ZnYzdnBodmh1c3ExZGcifQ.4ZhymN2kEj9qywb3P5f-1Q"
            />
            <Marker icon={ghostSingleIcon} position={this.state.mapCenter} />
          </Map>
        </Media>
        <p className="disclaimerInfo">
          Ghost Hunters BEWARE: Please be mindful when visiting haunted locations. Make sure to obtain permission when visiting private property and respect local regulations
          and business operating hours.
        </p>
        <Form onSubmit={this.sendComment} className="commentWrapper">
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" placeholder="Your Name" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="comment">Your Story</Label>
            <Input type="textarea" name="comment" placeholder="Share your story" onChange={this.handleChange} />
            <Button color="primary">Share</Button>
          </FormGroup>
        </Form>
        <div className="commentsPlease">{this.renderComments()}</div>
      </div>
    );
  }
}
