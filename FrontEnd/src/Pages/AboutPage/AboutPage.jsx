import React from 'react'
import './AboutPage.css'

const AboutPage = () => {
  return (
    <>
      <div className='' id='hero'>
        <div className="relative min-h-[80vh] bg-cover bg-center" style={{ backgroundImage: 'url(/images/a4.jpg)' }}>
          <div className="section absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-12">
            <div data-aos="slide-right">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white uppercase">
                About Us</h1>
              <p className="mt-4 text-lg md:text-xl lg:text-2xl text-white max-w-lg">
                Tag Line
              </p>
            </div>
          </div>
        </div>
      </div>
      <main className='section'>
        <section id="company-profile">
          <h1  className='font-bold text-4xl'>About Skyward Aerial Solutions</h1>
          <p className='lg:mx-32 text-center'>
            Skyward Aerial Solutions is a leading provider of innovative aerial
            services headquartered in Islamabad, Pakistan, with operations within
            Pakistan and across South Asia. We offer exceptional helicopter and
            drone services to meet the diverse needs of our clients.
          </p>
        </section>
        <section id="mission-vision">
          <h2 className='font-bold text-4xl'>Mission and Vision</h2>
          <div class="mission-vision-content">
            <p>
              <strong>Mission:</strong> Our mission is to deliver exceptional
              helicopter and drone services to meet the diverse needs of our
              clients.
            </p>
            <p>
              <strong>Vision:</strong> Our vision is to be the foremost provider
              of aerial solutions, setting the standard for excellence in the
              industry.
            </p>
          </div>
        </section>
        <section id="core-values">
          <h2 className='font-bold text-4xl'>Core Values</h2>
          <ul>
            <li className=''>Safety</li>
            <li className=''>Integrity</li>
            <li className=''>Innovation</li>
            <li className=''>Customer Satisfaction</li>
          </ul>
        </section>
        <section id="board-of-directors">
          <h2 className='font-bold text-4xl'>Board of Directors</h2>
          <div class="director">
            <img src="/images/jane.jpg" alt="Director 1" />
            <div>
              <h3>John Doe</h3>
              <p>CEO</p>
              <p>
                John has over 20 years of experience in the aviation industry,
                leading teams to new heights with his expertise and vision.
              </p>
            </div>
          </div>
          <div class="director">
            <img src="/images/john doe.jpg" alt="Director 2" />
            <div>
              <h3>Jane Smith</h3>
              <p>COO</p>
              <p>
                Jane oversees operations with a focus on efficiency and
                excellence, ensuring our services meet the highest standards.
              </p>
            </div>
          </div>
        </section>
        <section id="gallery">
          <h2 className='font-bold text-4xl'>Gallery of Airplanes</h2>
          <div class="gallery-grid">
            <div data-aos="fade-up" data-aos-delay="0" class="gallery-item">
              <img src="/images/Ai.jpg" alt="Airplane 1" />
            </div>
            <div data-aos="fade-up" data-aos-delay="100" class="gallery-item">
              <img src="/images/A2.jpg" alt="Airplane 2" />
            </div>
            <div data-aos="fade-up" data-aos-delay="200" class="gallery-item">
              <img src="/images/a3.jpg" alt="Airplane 2" />
            </div>
            <div data-aos="fade-up" data-aos-delay="300" class="gallery-item">
              <img src="/images/a4.jpg" alt="Airplane 2" />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default AboutPage