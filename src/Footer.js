import React from "react";
import {FaFacebookF} from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
const Footer = () => {
return (
<footer className="footer text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">
                            2215 John Daniel Drive
                            <br />
                            Clark, MO 65243
                        </p>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="FaFacebookF"><FaFacebookF /></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="FiTwitter"><FiTwitter /></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="AiFillLinkedin"><AiFillLinkedin /></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="AiOutlineInstagram"><AiOutlineInstagram /></i></a>
                    </div>
                 
                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">About Freelancer</h4>
                        <p className="lead mb-0">
                            Freelance is a free to use, MIT licensed Bootstrap theme created by
                            <a href="http://startbootstrap.com"> Ravish Kumar </a>
                            
                        </p>
                    </div>
                </div>
            </div>
        </footer>
)
}
export default Footer;