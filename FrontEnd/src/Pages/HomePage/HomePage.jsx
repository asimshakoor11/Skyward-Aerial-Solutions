import React from 'react';

const HomePage = () => {
    return (
        <>
            <div className='' id='hero'>
                <div className="relative min-h-[80vh] bg-cover bg-center" style={{ backgroundImage: 'url(/images/Homepage/heroimg.png)' }}>
                    <div className="section absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-12">
                        <div data-aos="slide-right">

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white uppercase">Skyward Aerial Solutions</h1>
                            <p className="mt-4 text-lg md:text-xl lg:text-2xl text-white max-w-lg">
                                Innovative Aerial Solutions for Your Needs
                            </p>
                            <button className="mt-6 bg-primarycolor text-white py-3 px-6 rounded-lg hover:bg-primarycolorhoverhover">BOOK NOW</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section'>
                <section className="flex flex-col-reverse md:flex-row items-center justify-between p-6 bg-background text-foreground">
                    <div data-aos="fade-up" data-aos-delay="150"  className="md:w-1/2 p-4" >
                        <h2 className="text-2xl font-bold mb-2">Skyward Aerial AVIATION</h2>
                        <div className="h-1 w-12 bg-primarycolor mb-4"></div>
                        <p className="text-muted-foreground mb-4">
                            Skyward Aerial  Aviation has garnered an unparalleled reputation in the business aviation services and Offshore Oil & Gas aviation support sectors of the UAE and the wider Middle East and Africa region since its establishment in 2006 under the visionary leadership of His Highness Dr. Sheikh Sultan Bin Khalifa Bin Zayed Al Nahyan. Strategically located at Al Bateen Executive Airport in Abu Dhabi, Skyward Aerial  Aviation holds Air Operator Certificates from both the UAE General Civil Aviation Authority and the Republic of San Marino Civil Aviation Authority.
                        </p>
                        <button className="bg-primarycolor text-white py-2 px-4 rounded hover:bg-primarycolorhover">KNOW MORE</button>
                    </div>
                    <div className="md:w-1/2 p-4">
                        <img data-aos="fade-up" src="/images/Homepage/img1.png" alt="Skyward Aerial  Aviation seat and window view" className="w-full h-auto rounded shadow-md" />
                    </div>
                </section>

                <section className="flex flex-col md:flex-row items-center justify-between p-6 bg-background text-foreground">

                    <div data-aos="fade-up" className="md:w-1/2 p-4">
                        <img src="/images/Homepage/img2.png" alt="Skyward Aerial  Aviation seat and window view" className="w-full h-auto rounded shadow-md" />
                    </div>

                    <div data-aos="fade-up" data-aos-delay="150" className="md:w-1/2 p-4">
                        <h2 className="text-2xl font-bold mb-2">AIRCRAFT CHARTER</h2>
                        <div className="h-1 w-12 bg-primarycolor mb-4"></div>
                        <p className="text-muted-foreground mb-4">
                            Skyward Aerial  Aviation operates a fleet of state-of-the-art helicopters, corporate jets and commercial aircraft. We deliver a unique travel experience through our extensive fleet of modern aircraft.
                        </p>
                        <button className="bg-primarycolor text-white py-2 px-4 rounded hover:bg-primarycolorhover">KNOW MORE</button>
                    </div>
                </section>
                <section className="flex flex-col-reverse md:flex-row items-center justify-between p-6 bg-background text-foreground">
                    <div data-aos="fade-up" data-aos-delay="150" className="md:w-1/2 p-4">
                        <h2 className="text-2xl font-bold mb-2">AIRCRAFT MANAGEMENT</h2>
                        <div className="h-1 w-12 bg-primarycolor mb-4"></div>
                        <p className="text-muted-foreground mb-4">

                            Skyward Aerial  Aviation acknowledges that investment in an aircraft or helicopter is a pivotal decision, be it for commercial usage or personal. Managing and operating aircraft daily is trickier. We offer aircraft management solutions that are not only customised but are also cost effective and reliable. Our dedicated team operates, maintains, selects crew, trains, schedules, dispatches, refuels and coordinates every aspect of your operational needs.
                        </p>
                        <button className="bg-primarycolor text-white py-2 px-4 rounded hover:bg-primarycolorhover">KNOW MORE</button>
                    </div>
                    <div  data-aos="fade-up" className="md:w-1/2 p-4">
                        <img src="/images/Homepage/img3.png" alt="Skyward Aerial  Aviation seat and window view" className="w-full h-auto rounded shadow-md" />
                    </div>
                </section>
                <section className="flex flex-col md:flex-row items-center justify-between p-6 bg-background text-foreground">

                    <div  data-aos="fade-up" className="md:w-1/2 p-4">
                        <img src="/images/Homepage/img4.png" alt="Skyward Aerial  Aviation seat and window view" className="w-full h-auto rounded shadow-md" />
                    </div>

                    <div data-aos="fade-up" data-aos-delay="150" className="md:w-1/2 p-4">
                        <h2 className="text-2xl font-bold mb-2">Skyward Aerial  ENGINEERING</h2>
                        <div className="h-1 w-12 bg-primarycolor mb-4"></div>
                        <p className="text-muted-foreground mb-4">
                            Skyward Aerial  Aviation’s highly qualified engineers are available to provide their services round the clock. Our facilities provide extensive services to meet all your aircraft maintenance needs, whether they are scheduled or unscheduled. We are proud to commit for quality, safety and workmanship in not only our own fleet but for third party aircraft as well.
                        </p>
                        <button className="bg-primarycolor text-white py-2 px-4 rounded hover:bg-primarycolorhover">KNOW MORE</button>
                    </div>
                </section>

                <section className="flex flex-col-reverse md:flex-row items-center justify-between p-6 bg-background text-foreground">
                    <div  data-aos="fade-up" data-aos-delay="150" className="md:w-1/2 p-4">
                        <h2 className="text-2xl font-bold mb-2">AVIATION SERVICES</h2>
                        <div className="h-1 w-12 bg-primarycolor mb-4"></div>
                        <p className="text-muted-foreground mb-4">

                            Skyward Aerial  Aviation is a market leader in providing competitive, flexible in house and 3rd party aviation support services for the oil and gas, leasing, management and MRO services to its clients covering a wide range of industries.
                        </p>
                        <button className="bg-primarycolor text-white py-2 px-4 rounded hover:bg-primarycolorhover">KNOW MORE</button>
                    </div>
                    <div data-aos="fade-up"  className="md:w-1/2 p-4">
                        <img src="/images/Homepage/img5.jpg" alt="Skyward Aerial  Aviation seat and window view" className="w-full h-auto rounded shadow-md" />
                    </div>
                </section>
            </div>
        </>
    );
}

export default HomePage;
