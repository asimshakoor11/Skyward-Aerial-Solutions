import React from 'react'
import { faEnvelope, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return (
        <div className='section'>
            <div className="bg-card text-card-foreground p-8">
                <div className="text-center mb-8">
                    <h2 className="text-primary font-bold text-4xl">You Can Contact Us</h2>
                    <p className="text-muted-foreground mt-2">WE ARE AT YOUR SERVICES</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className='flex flex-col items-center'>
                        <span className='bg-primarycolor text-white h-14 w-14 rounded-full flex items-center justify-center'>
                            <FontAwesomeIcon data-aos="fade-in" icon={faPhone} size='lg' />
                        </span>
                        <h3 className="font-semibold">Call Us On</h3>
                        <p className="text-muted-foreground">+92 -----</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <span className='bg-primarycolor text-white h-14 w-14 rounded-full flex items-center justify-center'>
                            <FontAwesomeIcon data-aos="fade-in" icon={faLocation} size='lg' />
                        </span>
                        <h3 className="font-semibold">Address</h3>
                        <p className="text-muted-foreground">-----</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <span className='bg-primarycolor text-white h-14 w-14 rounded-full flex items-center justify-center'>
                            <FontAwesomeIcon data-aos="fade-in" icon={faEnvelope} size='lg' />
                        </span>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-muted-foreground">SkywardAerial@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="bg-card text-card-foreground p-8 rounded-lg">
                <h2 className="text-primary text-center font-bold text-4xl mb-2">You Can Contact With Us</h2>
                <p className="text-muted-foreground text-center mb-8">ON SOCIAL APPS</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center">
                    <span className='bg-primarycolor text-white h-14 w-14 rounded-full flex items-center justify-center'>
                            <FontAwesomeIcon data-aos="fade-in" icon={faWhatsapp} size='lg' />
                        </span>
                        <span className="text-muted-foreground">Whatsapp</span>
                    </div>
                    <div className="flex flex-col items-center">
                    <span className='bg-primarycolor text-white h-14 w-14 rounded-full flex items-center justify-center'>
                            <FontAwesomeIcon data-aos="fade-in" icon={faFacebook} size='lg' />
                        </span>
                        <span className="text-muted-foreground">Facebook</span>
                    </div>
                    <div className="flex flex-col items-center">
                    <span className='bg-primarycolor text-white h-14 w-14 rounded-full flex items-center justify-center'>
                            <FontAwesomeIcon data-aos="fade-in" icon={faInstagram} size='lg' />
                        </span>
                        <span className="text-muted-foreground">Instagram</span>
                    </div>
                    <div className="flex flex-col items-center">
                    <span className='bg-primarycolor text-white h-14 w-14 rounded-full flex items-center justify-center'>
                            <FontAwesomeIcon data-aos="fade-in" icon={faTwitter} size='lg' />
                        </span>
                        <span className="text-muted-foreground">Twitter</span>
                    </div>

                </div>
            </div>

            <div className="p-8 rounded-lg  mx-auto">
                <h2 className="text-center font-bold text-4xl mb-2">SEND US AN EMAIL</h2>
                <p className="text-center text-[var(--muted-foreground)] mb-6">WE ARE VERY RESPONSIVE TO MESSAGES</p>
                <form className="space-y-4">
                    <div className="flex space-x-4">
                        <input type="text" placeholder="Name" className="w-1/2 p-3 rounded-lg border border-[var(--border)] bg-[var(--input)] text-[var(--foreground)]" />
                        <input type="email" placeholder="Email" className="w-1/2 p-3 rounded-lg border border-[var(--border)] bg-[var(--input)] text-[var(--foreground)]" />
                    </div>
                    <input type="text" placeholder="Subject" className="w-full p-3 rounded-lg border border-[var(--border)] bg-[var(--input)] text-[var(--foreground)]" />
                    <textarea placeholder="Message" className="w-full p-3 rounded-lg border border-[var(--border)] bg-[var(--input)] text-[var(--foreground)] h-32"></textarea>
                    <button className="w-fit py-3 px-10 bg-primarycolor text-white rounded-lg " onClick={(e) => {e.preventDefault()}}>
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact