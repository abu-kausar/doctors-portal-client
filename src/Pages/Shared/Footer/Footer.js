import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../..//assets/images/footer.png';

const Footer = () => {
    return (
        <footer
            style={{
                background: `url(${footer})`,
                backgroundSize: 'cover'
            }}
         className=" mt-8 p-10">
            <div className='footer'>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to="/" className="link link-hover">Emergency Checkup</Link>
                    <Link to="/" className="link link-hover">Monthly Checkup</Link>
                    <Link to="/" className="link link-hover">Weekly Checkup</Link>
                    <Link to="/" className="link link-hover">Deep Checkup</Link>
                </div>
                <div>
                    <span className="footer-title">Oral Health</span>
                    <Link to="/" className="link link-hover">Fluoride Treatment</Link>
                    <Link to="/" className="link link-hover">Cavity Filling</Link>
                    <Link to="/" className="link link-hover">Teath Whitening</Link>
                </div>
                <div>
                    <span className="footer-title">Our Address</span>
                    <Link className="link link-hover">New York - 101010 Hudson</Link>
                </div>
            </div>
            <div className='mt-8'>
                <p className='text-center'>Copyright © 2023 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;