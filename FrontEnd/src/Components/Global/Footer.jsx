import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="bg-black text-white py-10">
                <div className=" section grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8">

                    <div className=''>
                        <img src="https://placehold.co/100x50?text=Logo" alt="Falcon Logo" className="mb-4" />
                        <p className="mb-2">Al Bateen Executive Airport, Abu Dhabi, United Arab Emirates P.O Box 62030</p>
                        <h3 className="font-bold mb-1">GENERAL ENQUIRIES</h3>
                        <p className="mb-2">+971 2 444 8866</p>
                        <h3 className="font-bold mb-1">AIRCRAFT CHARTER & MANAGEMENT</h3>
                        <p className="mb-2">+971 2 444 0007</p>
                        <h3 className="font-bold mb-1">FALCON ENGINEERING</h3>
                        <p className="mb-2">+971 56 383 6868</p>
                        <h3 className="font-bold mb-1">FALCON TOURS</h3>
                        <p>+971 800 759</p>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">LATEST NEWS</h3>
                        <div className="mb-4">
                            <p>Archer Aviation and Falcon Aviation are to jointly develop a vertiport network in Dubai and Abu Dhabi</p>
                            <p className="text-muted-foreground">Mar 12, 2024</p>
                        </div>
                        <div className="mb-4">
                            <p>Falcon Aviation Unveils State-of-the-Art Terminal Transformation at Atlantis, Enhancing the Aerial Tourism Experience</p>
                            <p className="text-muted-foreground">Mar 08, 2024</p>
                        </div>
                        <div className="mb-4">
                            <p>Bayanat, Falcon Aviation, and UAE’s National Search and Rescue Center sign agreement to enhance aviation safety</p>
                            <p className="text-muted-foreground">Mar 04, 2024</p>
                        </div>
                    </div>


                    <div>
                        <h3 className="font-bold mb-4">HELPFUL LINKS</h3>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:underline">Gallery</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Charter Services</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Falcon Engineering</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Aviation Services</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Careers</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">News</a></li>
                            <li><a href="#" className="hover:underline">Contact Us</a></li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="font-bold mb-4">FOLLOW US</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="w-8 h-8 border border-white text-white flex items-center justify-center rounded"><img src="https://openui.fly.dev/openui/24x24.svg?text=FB" alt="Facebook" /></a>
                            <a href="#" className="w-8 h-8 border border-white text-white flex items-center justify-center rounded"><img src="https://openui.fly.dev/openui/24x24.svg?text=LI" alt="LinkedIn" /></a>
                            <a href="#" className="w-8 h-8 border border-white text-white flex items-center justify-center rounded"><img src="https://openui.fly.dev/openui/24x24.svg?text=IG" alt="Instagram" /></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-red-700 text-white py-4">
                <div className="px-[5%] container mx-auto flex justify-between items-center">
                    <span>&copy; 2024 Falcon Aviation</span>
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