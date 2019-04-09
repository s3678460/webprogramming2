import React, { Component } from 'react';

class Footer extends Component{
    render(){
        return(
            
            <footer id="mainFooter">
            <div className="footer-left">
              <a className="vertical-logo-container" href="http://s3678460assess2.freevnn.com">
                <img className="vertical-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKV3M5M4TO9nObIaF8U5bzGN7Kfpu1MeWX-CMIxDP45kCAZPVi"   style={{width:"100%"}}/>
              </a>
            </div>
            <div className="footer-right">
              <ul className="social-nav">
                <li>Follow Us</li>
                <li className="icon-bubble"><a href="https://www.facebook.com/congminh.huynh.547" target="_blank"><i className="fa fa-facebook" /><span className="hidden">Netflix on Facebook</span></a></li>
                <li className="icon-bubble"><a href="https://twitter.com/MinhHuynhOasis" target="_blank"><i className="fa fa-twitter" /><span className="hidden">Netflix on Twitter</span></a></li>
                <li className="icon-bubble"><a href="https://www.instagram.com/minh.huynhcong/" target="_blank"><i className="fa fa-instagram" /><span className="hidden">Netflix on Instagram</span></a></li>
              </ul>
              <ul className="legal-nav">
                <li><a href="http://s3678460assess2.freevnn.com" target="_blank">About Us</a></li>
                
                <li><a target="_blank" href="#">Terms Of Service</a></li>
                <li><a href="https://help.netflix.com/legal/privacy#cookies" target="_blank">Contact Us</a></li>
                <li><a target="_blank" href="https://www.google.com/maps/place/RMIT+University/@10.7293386,106.6920976,17z/data=!3m1!4b1!4m5!3m4!1s0x31752fbea5fe3db1:0xfae94aca5709003f!8m2!3d10.7293386!4d106.6942863">Direction</a></li>
                <li>© 2018 Minh Grocery Store</li>
              </ul>
            </div>
          </footer>
          


        );
    }
}

export default Footer;