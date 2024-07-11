import React, { useState } from 'react';
import './AircraftChapter.css';

const AircraftChapter = () => {
  const [visibleSection, setVisibleSection] = useState('business-jets');

  const handleButtonClick = (targetSection) => {
    setVisibleSection(targetSection);
  };

  return (
    <>
      <div className='' id='hero'>
        <div className="relative min-h-[80vh] bg-cover bg-center" style={{ backgroundImage: 'url(/images/a3.jpg)' }}>
          <div className="section absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-12">
            <div data-aos="slide-right">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white uppercase">
                Services</h1>
              <p className="mt-4 text-lg md:text-xl lg:text-2xl text-white max-w-lg">
                Tag Line
              </p>
            </div>
          </div>
        </div>
      </div>
      <main className="section">
        <section id="overview">
          <h1 className='font-bold text-4xl'>Aircraft Overview</h1>
          <p className='lg:mx-32 text-center'>
            Skyward Aerial Solutions offers a versatile fleet of aircraft to meet
            the diverse needs of our clients. From luxurious business jets to
            efficient helicopters and commercial aircraft, we provide the best
            solutions for every aerial requirement.
          </p>
        </section>
        <div className="button-container mt-10">
          <button className="section-button" onClick={() => handleButtonClick('business-jets')}>
            Business Jets
          </button>
          <button className="section-button" onClick={() => handleButtonClick('helicopters')}>
            Helicopters
          </button>
          <button className="section-button" onClick={() => handleButtonClick('commercial-aircraft')}>
            Commercial Aircraft
          </button>
          <button className="section-button" onClick={() => handleButtonClick('destinations')}>
            Destinations
          </button>
        </div>
        <section id="business-jets" className="details-section" style={{ display: visibleSection === 'business-jets' ? 'block' : 'none' }}>
          <h2 className='font-bold text-4xl'>Business Jets</h2>
          <div className="aircraft-grid">
            <div data-aos="fade-up" data-aos-delay="0" className="aircraft-item">
              <img src="/images/AircraftChapter/B1.jfif" alt="Business Jet 1" />
              <h3>Gulfstream G650</h3>
              <p>
                Luxury and performance combined, ideal for long-distance travel
                with premium amenities.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="100" className="aircraft-item">
              <img src="/images/AircraftChapter/B2.jpg" alt="Business Jet 2" />
              <h3>Bombardier Global 7500</h3>
              <p>
                Unmatched range and comfort, designed for the ultimate business
                travel experience.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" className="aircraft-item">
              <img src="/images/AircraftChapter/B3.jfif" alt="Business Jet 1" />
              <h3>Dassault Falcon 8X</h3>
              <p>
                Superior range and efficiency, offering unparalleled flexibility
                and comfort.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300" className="aircraft-item">
              <img src="/images/AircraftChapter/B4.jfif" alt="Business Jet 2" />
              <h3>Cessna Citation Longitude</h3>
              <p>
                Exceptional performance and luxury, perfect for transcontinental
                flights.
              </p>
            </div>
          </div>
        </section>
        <section id="helicopters" className="details-section" style={{ display: visibleSection === 'helicopters' ? 'block' : 'none' }}>
          <h2 className='font-bold text-4xl'>Helicopters</h2>
          <div className="aircraft-grid">
            <div data-aos="fade-up" data-aos-delay="0" className="aircraft-item">
              <img src="/images/AircraftChapter/H1.jfif" alt="Helicopter 1" />
              <h3>Bell 429</h3>
              <p>
                Versatile and efficient, perfect for corporate travel, medical
                evacuations, and more.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="100" className="aircraft-item">
              <img src="/images/AircraftChapter/H2.jpg" alt="Helicopter 2" />
              <h3>Airbus H145</h3>
              <p>
                Advanced technology and superior performance for various aerial
                missions.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" className="aircraft-item">
              <img src="/images/AircraftChapter/H3.1.jfif" alt="Helicopter 1" />
              <h3>Sikorsky S-76</h3>
              <p>
                Renowned for its comfort and safety, ideal for VIP transport and
                offshore operations.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300" className="aircraft-item">
              <img src="/images/AircraftChapter/H4.jfif" alt="Helicopter 2" />
              <h3>AgustaWestland AW139</h3>
              <p>
                Versatile and powerful, suitable for corporate transport and
                search and rescue missions.
              </p>
            </div>
          </div>
        </section>
        <section id="commercial-aircraft" className="details-section" style={{ display: visibleSection === 'commercial-aircraft' ? 'block' : 'none' }}>
          <h2 className='font-bold text-4xl'>Commercial Aircraft</h2>
          <div className="aircraft-grid">
            <div data-aos="fade-up" data-aos-delay="0" className="aircraft-item">
              <img src="/images/AircraftChapter/C1.jpg" alt="Commercial Aircraft 1" />
              <h3>Boeing 737</h3>
              <p>
                Efficient and reliable, catering to short and medium-haul flights.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="100" className="aircraft-item">
              <img src="/images/AircraftChapter/C2.jpg" alt="Commercial Aircraft 2" />
              <h3>Airbus A320</h3>
              <p>
                Modern and comfortable, ideal for regional and domestic routes.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" className="aircraft-item">
              <img src="/images/AircraftChapter/CA3.jfif" alt="Commercial Aircraft 1" />
              <h3>Boeing 787 Dreamliner</h3>
              <p>
                The Boeing 787 Dreamliner is a long-haul, wide-body aircraft
                renowned for its fuel efficiency and passenger comfort.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300" className="aircraft-item">
              <img src="/images/AircraftChapter/CA4.2.jfif" alt="Commercial Aircraft 2" />
              <h3>Airbus A350</h3>
              <p>
                The Airbus A350 is a modern long-range, wide-body airliner praised
                for its advanced aerodynamics and enhanced fuel efficiency.
              </p>
            </div>
          </div>
        </section>
        <section id="destinations" className="details-section" style={{ display: visibleSection === 'destinations' ? 'block' : 'none' }}>
          <h2 className='font-bold text-4xl'>Our Destinations</h2>
          <div className="destinations-grid">
            <div className="destination-item">
              <img src="/images/AircraftChapter/dubai.jfif" alt="Destination 1" />
              <h3>Dubai</h3>
              <p>
                A premier destination for luxury travel and business
                opportunities.
              </p>
            </div>
            <div className="destination-item">
              <img src="/images/AircraftChapter/D2.jfif" alt="Destination 2" />
              <h3>London</h3>
              <p>
                A key hub for international business and cultural experiences.
              </p>
            </div>
            <div className="destination-item">
              <img src="/images/AircraftChapter/D3.jfif" alt="Destination 3" />
              <h3>New York</h3>
              <p>
                The city that never sleeps, offering endless opportunities and
                attractions.
              </p>
            </div>
            <div className="destination-item">
              <img src="/images/AircraftChapter/D4.jfif" alt="Destination 4" />
              <h3>Singapore</h3>
              <p>
                A vibrant city-state known for its blend of cultures and economic
                dynamism.
              </p>
            </div>
            <div className="destination-item">
              <img src="/images/AircraftChapter/D5.jfif" alt="Destination 5" />
              <h3>Paris</h3>
              <p>
                The city of light, famous for its art, fashion, and historical
                landmarks.
              </p>
            </div>
            <div className="destination-item">
              <img src="/images/AircraftChapter/D6.jfif" alt="Destination 6" />
              <h3>New Delhi, India</h3>
              <p>
                A major hub for international and domestic flights, offering
                state-of-the-art facilities and connectivity.
              </p>
            </div>
            <div className="destination-item">
              <img src="/images/AircraftChapter/D7.jfif" alt="Destination 7" />
              <h3>Mumbai, India</h3>
              <p>
                One of the busiest airports in South Asia, known for its extensive
                network and modern amenities.
              </p>
            </div>
            <div className="destination-item">
              <img src="/images/AircraftChapter/D11.jfif" alt="Destination 8" />
              <h3>Karachi, Pakistan</h3>
              <p>
                Pakistan's largest and busiest airport, serving as a key gateway
                for international travel.
              </p>
            </div>
            <div className="destination-item">
              <img src="/images/AircraftChapter/D9.jpg" alt="Destination 9" />
              <h3>Colombo, Sri Lanka</h3>
              <p>
                The primary international airport of Sri Lanka, connecting the
                island nation to the rest of the world.
              </p>
            </div>
            <div className="destination-item">
              <img src="/images/AircraftChapter/D10.jpg" alt="Destination 10" />
              <h3>Kathmandu, Nepal</h3>
              <p>
                Nepal's only international airport, serving as the main gateway
                for travelers to the Himalayas.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default AircraftChapter;
