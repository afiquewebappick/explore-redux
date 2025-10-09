import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter,faLinkedinIn,faFacebookF,faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className='bg-black'>
            <div className='max-w-7xl mx-auto text-white px-20 pt-20 pb-7.5'>
            <div className='grid sm:grid-cols-5 grid-cols-1 gap-4 border-b-1 border-gray-700 pb-4'>
                <div>
                    <h3 className='text-xl font-bold mb-3'>CS — Ticket System</h3>
                    <p className='text-sm text-[#a1a1aa]'>A CS ticket system organizes, tracks, and resolves customer issues efficiently while ensuring accountability and transparency.</p>
                </div>
                <div>
                    <h3 className='text-xl font-bold mb-3'>Company</h3>
                    <ul className='text-sm text-[#a1a1aa]'>
                        <li>About Us</li>
                        <li>Our Mission</li>
                        <li>Contact Saled</li>
                    </ul>
                </div>
                <div>
                     <h3 className='text-xl font-bold mb-3'>Services</h3>
                    <ul className='text-sm text-[#a1a1aa] space-y-2'>
                        <li>Products & Services</li>
                        <li>Customer Stories</li>
                        <li>Download Apps</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-xl font-bold mb-3'>Information</h3>
                    <ul className='text-sm text-[#a1a1aa] space-y-2'>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Join Us</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-xl font-bold mb-3'>Social Links</h3>
                    <ul className='text-sm text-[#a1a1aa] space-y-2'>
                        <li><span className='w-3 h-3 rounded-full bg-white text-black mr-2'><FontAwesomeIcon icon={faXTwitter}/></span>@CS — Ticket System</li>
                        <li><span className='w-3 h-3 rounded-full bg-white text-black mr-2'><FontAwesomeIcon icon={faLinkedinIn}/></span>@CS — Ticket System</li>
                        <li><span className='w-3 h-3 rounded-full bg-white text-black mr-2'><FontAwesomeIcon icon={faFacebookF}/></span>@CS — Ticket System</li>
                        <li><span className='w-3 h-3 rounded-full bg-white text-black mr-2'><FontAwesomeIcon icon={faYoutube}/></span>@CS — Ticket System</li>
                    </ul>
                </div>
            </div>
            <div className='text-center text-xs mt-3'>
                <p>© 2025 CS — Ticket System. All rights reserved.</p>
            </div>
        </div>
        </div>
    );
};

export default Footer;