import { faFacebook, faInstagram, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="bg-black text-white py-10">
                <div className=" section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">

                    <div className=''>
                        <img src="https://placehold.co/100x50?text=Logo" alt="Skyward Aerial Logo" className="mb-4" />
                        <p className="mb-2">Al Bateen Executive Airport, Abu Dhabi, United Arab Emirates P.O Box 62030</p>
                        <h3 className="font-bold mb-1">GENERAL ENQUIRIES</h3>
                        <p className="mb-2">+971 2 444 8866</p>
                        <h3 className="font-bold mb-1">AIRCRAFT CHARTER & MANAGEMENT</h3>
                        <p className="mb-2">+971 2 444 0007</p>
                        <h3 className="font-bold mb-1">Skyward Aerial ENGINEERING</h3>
                        <p className="mb-2">+971 56 383 6868</p>
                        <h3 className="font-bold mb-1">Skyward Aerial TOURS</h3>
                        <p>+971 800 759</p>
                    </div>

                   

                    <div>
                        <h3 className="font-bold mb-4">HELPFUL LINKS</h3>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:underline">Gallery</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Charter Services</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Skyward Aerial Engineering</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Aviation Services</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Careers</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">News</a></li>
                            <li><a href="#" className="hover:underline">Contact Us</a></li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="font-bold mb-4">FOLLOW US</h3>
                        <div className="flex space-x-4">
                            <span className='bg-primarycolor text-white h-14 w-14 rounded-full flex items-center justify-center'>
                                <FontAwesomeIcon icon={faFacebook} size='lg' />
                            </span>
                            <span className='bg-primarycolor text-white h-14 w-14 rounded-full flex items-center justify-center'>
                                <FontAwesomeIcon icon={faInstagram} size='lg' />
                            </span>
                            <span className='bg-primarycolor text-white h-14 w-14 rounded-full flex items-center justify-center'>
                                <FontAwesomeIcon icon={faTwitter} size='lg' />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-red-700 text-white py-4">
                <div className="px-[5%] container mx-auto flex justify-between items-center">
                    <span>&copy; 2024 Skyward Aerial Aviation</span>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:underline">
                            Privacy Policy
                        </a>
                        <span>|</span>
                        <a href="#" className="hover:underline">
                            Terms & Conditions
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer