import React from 'react'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'
import axios from 'axios'
import "./contactus.css"

export default class Contactform extends React.Component {
  constructor (props){
    super(props);
    this.state={
      first_name:"",
      email:"",
      comment:""
    }
  }
handleChange = event => {
  this.setState({ [event.target.name]:event.target.value});
}

render() {
  return(
    <div className="contactWrapper">
      <Form>
        <FormGroup>
          <Label for="first_name">First Name</Label>
          <Input type="text" name="first_name" placeholder="First Name" onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" placeholder="Email" onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="comment">Comment</Label>
          <Input type="textarea" name="comment" placeholder="Let us know your thoughts" onChange={this.handleChange}/>
        </FormGroup>
        <Button color='primary' block>Submit</Button>
      </Form>
    </div>
  )
}
}
