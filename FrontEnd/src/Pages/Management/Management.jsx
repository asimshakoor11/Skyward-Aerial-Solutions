import React from 'react'
import './Management.css'

const Management = () => {
  return (
    <>
      <div className='' id='hero'>
        <div className="relative min-h-[80vh] bg-cover bg-center" style={{ backgroundImage: 'url(/images/Management/1..jfif)' }}>
          <div className="section absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-12">
            <div data-aos="slide-right"><h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white uppercase">
              Management</h1>
              <p className="mt-4 text-lg md:text-xl lg:text-2xl text-white max-w-lg">
                Tag Line
              </p>
            </div>
          </div>
        </div>
      </div>
      <main className='section'>
        <h1 className='font-bold text-4xl'>Aircraft Management</h1>
        <p className='lg:mx-32 text-center'>
          Welcome to Skyward Aerial Solutions' Aircraft Management page. We offer
          comprehensive aircraft management services to ensure your aircraft is
          always in top condition and ready for flight.
        </p>

        <div class="service-pairs">
          <div class="service-pair">
            <div data-aos="fade-up"  class="service-item">
              <img src="/images/Management/1..jfif" alt="Flight Operations" />
              <h2 >Flight Operations</h2>
              <p>
                We provide complete flight operations management including flight
                planning, scheduling, and coordination to ensure smooth and
                efficient operations.
              </p>
            </div>

            <div data-aos="fade-up"  class="service-item">
              <img src="/images/Management/5.jpg" alt="Maintenance" />
              <h2>Maintenance</h2>
              <p>
                Our maintenance services include regular inspections, repairs, and
                overhauls to keep your aircraft in optimal condition.
              </p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="100" class="service-pair">
            <div class="service-item">
              <img src="/images/Management/2.jpg" alt="Flight & Cabin Crew" />
              <h2>Flight & Cabin Crew</h2>
              <p>
                We provide highly trained and experienced flight and cabin crews
                to ensure the safety and comfort of your passengers.
              </p>
            </div>

            <div data-aos="fade-up"  class="service-item">
              <img src="/images/Management/5.jpg" alt="Hangarage" />
              <h2>Hangarage</h2>
              <p>
                Our state-of-the-art hangar facilities provide secure and
                sheltered storage for your aircraft.
              </p>
            </div>
          </div>

          <div class="service-pair">
            <div data-aos="fade-up"  class="service-item">
              <img src="/images/Management/3..png" alt="Brokerage" />
              <h2>Brokerage</h2>
              <p>
                We offer aircraft brokerage services to assist you in buying or
                selling your aircraft, ensuring you get the best deal possible.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="100" class="service-item">
              <img src="/images/Management/AA.avif" alt="Aircraft Washing" />
              <h2>Aircraft Washing</h2>
              <p>
                Our aircraft washing services ensure your aircraft is always clean
                and presentable.
              </p>
            </div>
          </div>

          <div class="service-pair">
            <div data-aos="fade-up"  class="service-item">
              <img src="/images/Management/4.jfif" alt="CAMO" />
              <h2>CAMO</h2>
              <p>
                Our Continuing Airworthiness Management Organization (CAMO)
                services ensure your aircraft remains airworthy and compliant with
                regulations.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="100" class="service-item">
              <img src="/images/Management/8.webp" alt="All Flight Permits & Handling" />
              <h2>All Flight Permits & Handling</h2>
              <p>
                We manage all necessary flight permits and ground handling
                arrangements to ensure your flights are always smooth and
                hassle-free.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Management