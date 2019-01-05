import React from 'react';
import HauntingForm from './hauntingForm';
//

function createHaunting(data) {
axios.post('http://localhost:3001/location/detail/', data);
}


export default class AddHaunting extends React.Component {
  state = {
    data: {
      place_name: '',
      loc_desc: '',
      loc_img_link: '',
      info_source: '',
      coordinates: [],
      address: {
        street: '',
        city: '',
        state: ''
      }
    },
    creating: false
  };
  //
  // createHaunting = (data) => {
  //   console.log('In create Haunding:', data);
  //   this.setState({
  //     creating: true
  //   });
  //   data.coordinates = Number(data.coordinates);
  //   createHaunting(data).then(result => {
  //   });
  // };

  render() {
    return (
      <div>
        <h1>Add A Haunted Location</h1>
        <HauntingForm onFormSubmitted={this.createHaunting} data={this.state.data} />
      </div>
    );
  }
}
