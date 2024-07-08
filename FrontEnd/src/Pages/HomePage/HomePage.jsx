import React from 'react';

const HomePage = () => {
    return (
        <>
            <div className='' id='hero'>
                <div className="relative min-h-[80vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://www.falconaviation.ae/assets/uploads/1707291797_af20acef56c56c8d42f4.jpg)' }}>
                    <div className="section absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-12">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white uppercase">Skyward Aerial Solutions</h1>
                        <p className="mt-4 text-lg md:text-xl lg:text-2xl text-white max-w-lg">
                            Innovative Aerial Solutions for Your Needs
                        </p>
                        <button className="mt-6 bg-primarycolor text-white py-3 px-6 rounded-lg hover:bg-primarycolorhover">BOOK NOW</button>
                    </div>
                </div>
            </div>
            <div className='section'>
                <section className="flex flex-col-reverse md:flex-row items-center justify-between p-6 bg-background text-foreground">
                    <div className="md:w-1/2 p-4">
                        <h2 className="text-2xl font-bold mb-2">FALCON AVIATION</h2>
                        <div className="h-1 w-12 bg-red-600 mb-4"></div>
                        <p className="text-muted-foreground mb-4">
                            Falcon Aviation has garnered an unparalleled reputation in the business aviation services and Offshore Oil & Gas aviation support sectors of the UAE and the wider Middle East and Africa region since its establishment in 2006 under the visionary leadership of His Highness Dr. Sheikh Sultan Bin Khalifa Bin Zayed Al Nahyan. Strategically located at Al Bateen Executive Airport in Abu Dhabi, Falcon Aviation holds Air Operator Certificates from both the UAE General Civil Aviation Authority and the Republic of San Marino Civil Aviation Authority.
                        </p>
                        <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">KNOW MORE</button>
                    </div>
                    <div className="md:w-1/2 p-4">
                        <img src="https://falconaviation.ae/assets/images/about-falcon.jpg" alt="Falcon Aviation seat and window view" className="w-full h-auto rounded shadow-md" />
                    </div>
                </section>

                <section className="flex flex-col md:flex-row items-center justify-between p-6 bg-background text-foreground">

                    <div className="md:w-1/2 p-4">
                        <img src="https://www.falconaviation.ae/assets/uploads/1701746135_aa8a903e7852fa614854.jpg" alt="Falcon Aviation seat and window view" className="w-full h-auto rounded shadow-md" />
                    </div>

                    <div className="md:w-1/2 p-4">
                        <h2 className="text-2xl font-bold mb-2">AIRCRAFT CHARTER</h2>
                        <div className="h-1 w-12 bg-red-600 mb-4"></div>
                        <p className="text-muted-foreground mb-4">
                            Falcon Aviation operates a fleet of state-of-the-art helicopters, corporate jets and commercial aircraft. We deliver a unique travel experience through our extensive fleet of modern aircraft.
                        </p>
                        <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">KNOW MORE</button>
                    </div>
                </section>
                <section className="flex flex-col-reverse md:flex-row items-center justify-between p-6 bg-background text-foreground">
                    <div className="md:w-1/2 p-4">
                        <h2 className="text-2xl font-bold mb-2">AIRCRAFT MANAGEMENT</h2>
                        <div className="h-1 w-12 bg-red-600 mb-4"></div>
                        <p className="text-muted-foreground mb-4">

                            Falcon Aviation acknowledges that investment in an aircraft or helicopter is a pivotal decision, be it for commercial usage or personal. Managing and operating aircraft daily is trickier. We offer aircraft management solutions that are not only customised but are also cost effective and reliable. Our dedicated team operates, maintains, selects crew, trains, schedules, dispatches, refuels and coordinates every aspect of your operational needs.
                        </p>
                        <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">KNOW MORE</button>
                    </div>
                    <div className="md:w-1/2 p-4">
                        <img src="https://falconaviation.ae/assets/images/aircraft-mgmnt.jpg" alt="Falcon Aviation seat and window view" className="w-full h-auto rounded shadow-md" />
                    </div>
                </section>
                <section className="flex flex-col md:flex-row items-center justify-between p-6 bg-background text-foreground">

                    <div className="md:w-1/2 p-4">
                        <img src="https://falconaviation.ae/assets/images/falcon-engineering.jpg" alt="Falcon Aviation seat and window view" className="w-full h-auto rounded shadow-md" />
                    </div>

                    <div className="md:w-1/2 p-4">
                        <h2 className="text-2xl font-bold mb-2">FALCON ENGINEERING</h2>
                        <div className="h-1 w-12 bg-red-600 mb-4"></div>
                        <p className="text-muted-foreground mb-4">
                            Falcon Aviation’s highly qualified engineers are available to provide their services round the clock. Our facilities provide extensive services to meet all your aircraft maintenance needs, whether they are scheduled or unscheduled. We are proud to commit for quality, safety and workmanship in not only our own fleet but for third party aircraft as well.
                        </p>
                        <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">KNOW MORE</button>
                    </div>
                </section>

                <section className="flex flex-col-reverse md:flex-row items-center justify-between p-6 bg-background text-foreground">
                    <div className="md:w-1/2 p-4">
                        <h2 className="text-2xl font-bold mb-2">AVIATION SERVICES</h2>
                        <div className="h-1 w-12 bg-red-600 mb-4"></div>
                        <p className="text-muted-foreground mb-4">

                            Falcon Aviation is a market leader in providing competitive, flexible in house and 3rd party aviation support services for the oil and gas, leasing, management and MRO services to its clients covering a wide range of industries.
                        </p>
                        <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">KNOW MORE</button>
                    </div>
                    <div className="md:w-1/2 p-4">
                        <img src="https://www.falconaviation.ae/assets/uploads/1701746203_674adb67022e10fc7fdb.jpg" alt="Falcon Aviation seat and window view" className="w-full h-auto rounded shadow-md" />
                    </div>
                </section>
            </div>
        </>
    );
}

export default HomePage;
