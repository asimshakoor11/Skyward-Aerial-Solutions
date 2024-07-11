import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`${isSticky ? 'custommaxmd:fixed top-0 w-full z-50' : ''} bg-black text-white flex justify-between items-center p-4`}>
                <div className="flex items-center">
                    <img src="https://placehold.co/40x40?text=🦅" alt="Falcon logo" className="mr-2" />
                    <div>
                        <h1 className="text-xl font-bold">Skyward Aerial</h1>
                        <p className="text-sm">Your tagline here</p>
                    </div>
                </div>
                <button className="bg-primarycolor text-white py-2 px-4 rounded hover:bg-primarycolorhover hidden md:block">EMPLOYEE PORTAL</button>
                <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md text-white md:hidden"
                    aria-controls="mobile-menu"
                    aria-expanded={menuOpen ? 'true' : 'false'}
                    onClick={toggleMenu}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className={`h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            <nav className={`border-b border-border hidden md:block ${isSticky ? 'fixed top-0 w-full z-50 bg-black' : 'bg-white'}`}>
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="flex items-center justify-center w-full">
                            <div className="flex space-x-4">
                                <Link to="/" className={`${isSticky ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-primarycolor hover:text-white'} px-3 py-2 rounded-md text-base font-semibold flex items-center`}>Home</Link>
                                <Link to="/aboutpage" className={`${isSticky ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-primarycolor hover:text-white'} px-3 py-2 rounded-md text-base font-semibold flex items-center`}>About Us</Link>
                                <Link to="/services" className={`${isSticky ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-primarycolor hover:text-white'} px-3 py-2 rounded-md text-base font-semibold flex items-center`}>Services</Link>
                                <Link to="/management" className={`${isSticky ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-primarycolor hover:text-white'} px-3 py-2 rounded-md text-base font-semibold flex items-center`}>Management</Link>
                                <Link to="/fleet" className={`${isSticky ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-primarycolor hover:text-white'} px-3 py-2 rounded-md text-base font-semibold flex items-center`}>Fleet</Link>
                                <Link to="/news" className={`${isSticky ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-primarycolor hover:text-white'} px-3 py-2 rounded-md text-base font-semibold flex items-center`}>News</Link>
                                <Link to="/contact" className={`${isSticky ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-primarycolor hover:text-white'} px-3 py-2 rounded-md text-base font-semibold flex items-center`}>Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {menuOpen && (
                <>
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu}></div>
                    <div className="fixed inset-y-0 left-0 w-64 bg-black z-50 overflow-y-auto">
                        <div className="flex items-center justify-between p-4">
                            <h2 className="text-xl font-bold text-white">Menu</h2>
                            <button onClick={toggleMenu} className="text-white">
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Link to="/" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center">Home</Link>
                            <Link to="/aboutpage" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center">About Us</Link>
                            <Link to="/services" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center">Services</Link>
                            <Link to="/management" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center">Management</Link>
                            <Link to="/fleet" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center">Fleet</Link>
                            <Link to="/news" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center">News</Link>
                            <Link to="/contact" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center">Contact</Link>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Navbar;
