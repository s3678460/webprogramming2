import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="container">
            <div className="col-12">
            <div className="contactbox">
            
        
      
              <div style={{fontFamily: 'Arial, Helvetica, sans-serif'}}>Get In Touch</div>

              
              <a href="https://www.facebook.com/congminh.huynh.547" className="fa fa-facebook-square" style={{fontSize: 50, padding: 10}} />
              <a href="#" className="fa fa-snapchat-square" style={{color: 'yellow', fontSize: 50, padding: 10}} />
              <a href="https://twitter.com/MinhHuynhOasis?lang=vi" className="fa fa-twitter-square" style={{fontSize: 50, padding: 10}} />
              <a href="https://www.instagram.com/minh.huynhcong/" className="fa fa-instagram square" style={{color: 'palevioletred', fontSize: 50, padding: 10}} />
              <a href="https://mail.google.com/mail/u/0/#inbox" className="fa fa-google-plus-square" style={{color: 'red', fontSize: 50, padding: 10}} />
              <div style={{fontSize: '15pt', paddingTop: '40pt', paddingBottom: '20pt'}}>I am here for you and we are wearing our thinking caps</div>
              <form action id="contact" method="post">
                <div style={{fontSize: '20pt', color: 'blue'}}> <label htmlFor="contact_firstname">First Name</label>
                </div>
                <div style={{fontSize: '20pt'}}><input type="text" placeholder="Your first name..." id="contact_firstname" name="firstname" /> 
                  <span className="error" style={{fontSize: '15pt'}}>**Valid first name is required**</span>
                </div>
                <div style={{fontSize: '20pt', color: 'blue'}}> <label htmlFor="contact_lname">Last Name</label></div>
                <div style={{fontSize: '20pt'}}><input type="text" placeholder="Your last name..." id="contact_lname" name="lname" /> 
                  <span className="error" style={{fontSize: '15pt'}}>**Valid last name is required**</span>
                </div>
                <div style={{fontSize: '20pt', color: 'blue'}}><label htmlFor="contact_gender">Gender</label> </div>
                <div style={{fontSize: '20pt'}}>
                  <select name="gender" id="contact_gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select> </div>
                <div style={{fontSize: '20pt', color: 'blue'}}> <label htmlFor="contact_pnumber">Phone number</label></div>
                <div style={{fontSize: '20pt'}}><input type="text" placeholder="Your phone number..." id="contact_pnumber" name="pnumber" /> 
                  <span className="error" style={{fontSize: '15pt'}}>**Phone number must be number and equal or greater than 10**</span>
                </div>
                <div style={{fontSize: '20pt', color: 'blue'}}> <label htmlFor="contact_profession">Your profession</label></div>
                <div style={{fontSize: '20pt'}}><input type="text" placeholder="Your profession..." id="contact_profession" name="profession" /> 
                  <span className="error" style={{fontSize: '15pt'}}>**Your profession is required**</span>
                </div>
                <div style={{fontSize: '20pt', color: 'blue'}}> <label htmlFor="contact_email">Your E-mail</label></div>
                <div style={{fontSize: '20pt'}}><input type="text" placeholder="Your E-mail..." id="contact_email" name="email" />
                  <span className="error" style={{fontSize: '15pt'}}>**A valid email address is required*</span> 
                </div>
                <div style={{fontSize: '20pt', color: 'blue'}}> <label htmlFor="contact_message">Messages</label> </div>
                <div> <textarea name="message" id="contact_message" cols={30} rows={10} placeholder="Leave Your Message" style={{fontSize: '20pt'}} defaultValue={""} />
                  <span className="error" style={{fontSize: '15pt'}}>**This field is required**</span> </div>
                <div>
                  <input type="submit" defaultValue="Send It!" style={{fontSize: '20pt'}} id="contact_sendit" />
                </div>
              </form>
            </div>
          </div>
          </div>
        );
    }
}

export default Contact;