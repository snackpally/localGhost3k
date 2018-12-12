import React from 'react';
import "./index.css";


class Profile extends React.Component{
  render(){
    return(

            <div className="container">
              <div className="fullcard">
                <img className="img-responsive" src={require('./samplepro.png')} alt="not yet" width="100rem"></img>
                <h5 className="card-title">User Name</h5>
                <p className="card-text">This is where we have our basic user information.</p>
                </div>
              <div className="tab1">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
              <a className="nav-link active" id="locations-tab" data-toggle="tab" href="#home" role="tab" aria-controls="My locations" aria-selected="true">My locations</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" id="tour-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="My tours" aria-selected="false">My tours</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
              </li>
              </ul>
                <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Raw denim you probably havent heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">Food truck fixie locavore, accusamus mcsweeneys marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</div>
                <div classNameName="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</div>
                </div>
            </div>
            </div>
    )
  }
}
export default Profile;
