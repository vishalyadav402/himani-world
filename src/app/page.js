"use client"
import React, { useEffect, useState } from 'react';
// import XIcon from '@mui/icons-material/XIcon';
import { Avatar, Box, Typography, Grid } from '@mui/material';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import Image from 'next/image';

export default function Home() {
    
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Handle scroll event to show or hide the scroll to top button
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
{/* hero section */}
<section id='home' class="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900">

<Swiper 
  spaceBetween={30}
  slidesPerView={1} 
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter:true,
    stopOnLastSlide:false,
    }} 
    loop={true} 
  modules={[Autoplay]} 
  className="mySwiper">
  <SwiperSlide>
    <div class="grid max-w-screen-xl px-4 pt-4 pb-16 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-6">
      <div class="place-self-center lg:col-span-7 order-2 md:order-1">
        <h1 class="max-w-2xl mb-8 text-2xl font-semibold leading-none tracking-tight dark:text-white">Secure Your Digital Assets Effortlessly</h1>
        <h1 class="max-w-2xl mb-8 text-2xl font-extrabold leading-none tracking-tight md:text-5xl text-white dark:text-white">Reliable Protection with Himani World Infosol</h1>
        <p class="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-50">Our advanced cybersecurity solutions ensure your business stays ahead of evolving threats.</p>
      </div>
      <div class="lg:mt-0 lg:col-span-5 flex justify-center lg:justify-end order-1 md:order-2 py-5 md:py-0">
        <img className='rounded-lg h-64 lg:h-96 cursor-pointer my-2' src="./images/security_service.png" alt="cybersecurity service image" />
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div class="grid max-w-screen-xl px-4 pt-4 pb-16 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-6">
      <div class="place-self-center lg:col-span-7 order-2 md:order-1">
        <h1 class="max-w-2xl mb-8 text-2xl font-semibold leading-none tracking-tight text-white dark:text-gray-50">Empower Your Business with Cutting-Edge Tech</h1>
        <h1 class="max-w-2xl mb-8 text-2xl font-extrabold leading-none tracking-tight md:text-5xl text-white dark:text-white">Innovate and Scale Securely with Us</h1>
        <p class="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-50">From small businesses to enterprises, our tailored security solutions protect your growth.</p>
      </div>
      <div class="lg:mt-0 lg:col-span-5 flex justify-center lg:justify-end order-1 md:order-2 py-5 md:py-0">
        <img className='rounded-lg h-64 lg:h-96 cursor-pointer my-2' src="./images/business_growth.png" alt="business growth image" />
      </div>
    </div>
  </SwiperSlide>
  </Swiper>
</section>


{/* About Section */}
<section id='aboutsection' className="bg-indigo-50 border-t border-gray-200">
  <div className="max-w-screen-xl px-4 py-12 mx-auto lg:py-24 lg:px-6">
    
    {/* Section Heading */}
    <div className="text-center">
      <h2 className="text-2xl font-bold leading-none tracking-tight md:text-3xl text-indigo-900 mb-6">
        Innovative IT Solutions Tailored to Your Business
      </h2>
      <p className="text-lg font-light text-indigo-600 lg:text-xl lg:px-36">
        Empowering businesses with the latest in technology and seamless IT services. From cybersecurity to custom software solutions, we ensure your IT infrastructure is secure and optimized for growth.
      </p>
    </div>

    {/* Section Content */}
    <div className="lg:flex lg:gap-16 lg:mt-10">
      
      {/* Left Content */}
      <div className="lg:w-1/2 space-y-6 text-indigo-600 self-center">
        
        {/* Stats */}
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col items-center lg:items-start">
            <strong className="text-3xl font-bold text-indigo-900">30+</strong>
            <span className="text-indigo-700 font-medium">Satisfied Clients</span>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <strong className="text-3xl font-bold text-indigo-900">20+</strong>
            <span className="text-indigo-700 font-medium">Completed Projects</span>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <strong className="text-3xl font-bold text-indigo-900">15+</strong>
            <span className="text-indigo-700 font-medium">Years of Expertise</span>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <strong className="text-3xl font-bold text-indigo-900">100%</strong>
            <span className="text-indigo-700 font-medium">Client Retention</span>
          </div>
        </div>

        {/* Overview */}
        <p className="text-lg font-light lg:text-xl text-indigo-700">
          Our dedication to delivering top-tier IT solutions helps businesses stay ahead of the competition by offering advanced tools and systems that support growth and innovation.
        </p>
      </div>

      {/* Right Content: Image */}
      <div className="lg:w-1/2 flex justify-center md:justify-start items-center">
        <img
          className="rounded-lg"
          src="/images/about_hero.png"
          alt="About IT solutions"
        />
      </div>
    </div>

    {/* Section Feature List */}
    <div className="lg:mt-8 lg:grid lg:grid-cols-2 lg:gap-12">
      
      {/* Feature 1 */}
      <div className="flex space-x-4 items-start">
        <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
        </svg>
        <div>
          <h3 className="text-xl font-semibold text-indigo-900">Comprehensive Cybersecurity</h3>
          <p className="font-light text-indigo-700">Secure your data and network with advanced cybersecurity solutions tailored to meet your business needs.</p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex space-x-4 items-start">
        <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
        </svg>
        <div>
          <h3 className="text-xl font-semibold text-indigo-900">Cloud Services</h3>
          <p className="font-light text-indigo-700">Scalable and secure cloud solutions to manage and store your critical data and applications.</p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex space-x-4 items-start">
        <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
        </svg>
        <div>
          <h3 className="text-xl font-semibold text-indigo-900">Custom Software Solutions</h3>
          <p className="font-light text-indigo-700">Tailored software development for every aspect of your business, ensuring maximum efficiency and growth.</p>
        </div>
      </div>

      {/* Feature 4 */}
      <div className="flex space-x-4 items-start">
        <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
        </svg>
        <div>
          <h3 className="text-xl font-semibold text-indigo-900">24/7 Support</h3>
          <p className="font-light text-indigo-700">Our dedicated support team ensures your IT systems are up and running around the clock.</p>
        </div>
      </div>
      
    </div>
  </div>
</section>



{/* services section */}
<ServicesSection/>


{/* partners section */}
<section id='brandsection' className="bg-indigo-50">
    <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6">
        <div className="text-center mb-12">
        <p class="text-lg font-medium text-indigo-800 dark:text-indigo-800">Our Cyber Security Partners</p>
        <h2 className="mt-3 mb-4 text-2xl font-bold leading-none tracking-tight md:text-3xl text-indigo-900">
        Trusted Brand Collaborations
        </h2>
        <p className="font-light text-indigo-700 sm:text-xl dark:text-indigo-700">
        We collaborate with leading brands in the cybersecurity sector to provide innovative solutions tailored to your business needs. Explore our extensive range of products designed to enhance your security posture and protect your valuable assets.
        </p>
        </div>
        <div className="grid bg-white rounded-xl" style={{maxWidth:'100%',overflow:'hidden'}}>
        <PartnerSection />
        </div>
    </div>
</section>

{/* testimonials section */}
<TestimonialComponent />

{/* faq section */}
<FAQAccordion/>


{/* contact section */}
<section id='contactsection' className="contact py-12 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900">
    <div className="container mx-auto px-4">
        <div className="mb-8 text-center" data-aos="fade-up">
        <h2 class="mb-4 text-2xl font-bold leading-none tracking-tight md:text-3xl text-gray-50 flex justify-center">Still doubts ? connect with us.</h2>
        <p class="mb-6 font-light text-white dark:text-gray-50 md:text-lg">Give us a chance to try our services!</p> 
        </div>

        <div className="flex-nowrap lg:flex">
            {/* Company Info and Social Links */}
            <div
                className="w-full lg:w-1/3 p-4 flex flex-col"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                <div className="mb-6 lg:mb-0">
                  <div className='flex gap-4  justify-start items-center w-96'>
                    <a href="#" class="flex items-center text-2xl font-semibold">
                    <img src="./images/icon.png" class="h-16 rounded" alt="Himani World Infosol Logo" />
                    </a>
                    <h3 className="text-2xl font-bold text-white">Himani World <br/>Infosol Pvt. Ltd.</h3>
                    </div>
                    <p className="text-white mt-2">
                        We provide Cyber Security products and IT solutions as
                        an authorized reseller of well-known brands.
                    </p>
                    <div className="social-links flex mt-4 space-x-4">
                        <a href="#" className="text-white hover:text-blue-500">
                            <XIcon />
                        </a>
                        <a href="#" className="text-white hover:text-blue-600">
                            <FacebookIcon />
                        </a>
                        <a href="#" className="text-white hover:text-pink-500">
                            <InstagramIcon />
                        </a>
                        <a href="#" className="text-white hover:text-blue-700">
                            <LinkedInIcon />
                        </a>
                    </div>
                </div>

                <div className="mt-6 lg:mt-3">
                    <div className="info space-y-6">
                        <div className="flex items-center space-x-3">
                        <LocationOnIcon className="h-6 w-6 text-white"/>
                            <p className="font-bold text-white">D - 1404, Supertech Ecociti, Sector 137, Noida, Uttar Pradesh - 201305</p>
                        </div>
                        <div className="space-x-3">
                            <a className="flex items-center space-x-3" href="mailto:cto@himaniworldinfosol.com">
                        <MailIcon className="h-6 w-6 text-white"/>
                            <p className="font-bold text-white">cto@himaniworldinfosol.com</p>
                            </a>
                        </div>
                        <div className="flex items-center space-x-3">

                            <PhoneIcon className="h-6 w-6 text-white"/>
                             <p className="font-bold flex items-center text-white"><a href="tel:+918800171896">+918800171896</a></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Google Map */}
            <div
                className="w-full md:w-2/3 mt-4 lg:mt-0 shadow-lg rounded-lg"
                data-aos="fade-up"
                data-aos-delay="300"
            >
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.9398799405476!2d77.40846942528437!3d28.511456475731034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce9ff05bab9cd%3A0x135677058bd83386!2sSupertech%20EcoCiti%2C%20Tower%20E!5e0!3m2!1sen!2sin!4v1728621676369!5m2!1sen!2sin"
                    width="100%"
                    height="410"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location Map"
                ></iframe>
            </div>
        </div>
    </div>
</section>




 {/* Scroll to Top Button */}
 {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed z-40 bottom-10 animate-bounce hover:animate-none right-10 p-3 rounded-full bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-white shadow-xl hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label="Scroll to top"
        >
         <span className='text-3xl'>↑</span> 
        </button>
      )}

    </>
  );
}









// services component
const servicesData = [
  {
    title: "Security Operation Center (SOC)",
    description:
      "A SOC is a centralized unit that monitors and protects an organization's IT infrastructure and data from cyber threats. SOC analysts monitor an organization's network and systems 24/7, and respond to any potential security incidents. They also implement security measures and protocols to prevent future threats.",
    points: [
      "Preparation and Preventative Maintenance.",
      "Continuous Proactive Monitoring.",
      "Alert Ranking and Management.",
      "Threat Response.",
      "Recovery and Remediation.",
      "Log Management.",
      "Root Cause Investigation.",
    ],
    icon: "/images/service-icons/soc.png",
  },
  {
    title: "Vulnerability Assessment and Penetration Testing (VAPT)",
    description:
      "Vulnerability Assessment and Penetration Testing (VAPT) is a security testing process that helps identify and fix vulnerabilities in your organization's digital infrastructure. It combines automated tools and penetration testing techniques to:",
    points: [
      "Scan IT systems and software for vulnerabilities ",
      "Source Code Review",
      "Web/Mobile App",
      "Network",
      "Server",
      "Cloud",
      "OT",
      "API",
    ],
    icon: "/images/service-icons/vulnerability.png",
  },
  {
    "title": "Backup as a Service (BaaS)",
    "description": "Backup as a Service (BaaS) is a cloud-based service that stores and manages your data for you. With BaaS, a third party stores your data in a secure location, and you can access it when you need it. BaaS can be a more reliable and cost-effective option than managing your own servers.",
    "points": [
        "Security: BaaS protects your data from unauthorized access, corruption, hacking, and theft.",
        "Cost-effective: BaaS can be more cost-effective than managing your own servers.",
        "Flexibility: You can back up your data as needed or on a regular basis.",
        "Free up resources: BaaS can free up your resources so you can focus on other work.",
        "Personal files: Documents, spreadsheets, presentations, photos, videos, music, emails",
        "Business data: Customer information, financial records, invoices, payroll data, project management files",
        "Database information: Data stored in databases used by applications",
    ],
    "icon": "/images/service-icons/backup-service.png"
},
  {
    "title": "Cyber Security",
    "description": "Cybersecurity is crucial in today's digital age due to the increasing reliance on computers, the internet, and wireless networks, including Bluetooth and Wi-Fi, in both personal and business environments. As more devices are connected and more data is stored and transmitted electronically, the risk of cyberattacks grows exponentially. Cyberattacks can take many forms, including:",
    "points": [
      "Anti Virus",
      "EDR",
      "XDR",
      "IAM",
      "Email Security",
      "Other Cyber Security Services"
    ],
    "icon": "/images/service-icons/cyber-security.png"
  },
  {
    "title": "CCTV Surveillance",
    "description": "CCTV surveillance, powered by identically intelligent digital security solutions, not only enhances the safety of your premises but also augments human resources with advanced monitoring capabilities. These cutting-edge systems deliver comprehensive, round-the-clock security, ensuring peace of mind while significantly improving operational efficiency and response times.",
    "points": [
      "Commercial security solutions",
      "Industrial security solutions",
      "Residential security solutions",
      "Advanced IP",
      "Analog cameras",
      "DVR",
      "NVR",
      "LED/LCD monitors"
    ],
    "icon": "/images/service-icons/cctv-camera.png"
  }
];

const ServicesSection = () => {
    return (
      <section id="servicesection" className="bg-indigo-50 border">
        <div className="max-w-screen-xl px-4 py-8 mx-auto">
          <div className="text-center mb-6">
            <p className="text-lg text-indigo-800 font-medium">
              Wide range of IT products for all your needs!
            </p>
            <h1 className="text-2xl font-bold leading-none tracking-tight md:text-3xl text-indigo-900 mt-3 mb-4">
              Trusted by top businesses
            </h1>
            <p className="text-indigo-700">
              Our comprehensive IT product range is designed to meet the diverse needs of our customers. Discover the perfect solutions for your business.
            </p>
          </div>
  
          <div className="max-w-screen-xl px-4 py-4 mx-auto lg:py-4 lg:px-6 overflow-hidden">
                <Swiper 
                spaceBetween={30}
                slidesPerView={1} 
                autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter:true,
                stopOnLastSlide:false,
                }} 
                loop={true}
                modules={[Autoplay]} 
                breakpoints={{
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  // when window width is >= 768px
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                  },
                  // when window width is >= 1024px
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  },
                }}
                className="mySwiper">
                  {servicesData.map((service, index) => (
                    <SwiperSlide key={index} className='flex justify-center'>
                      <div key={index} className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 p-6 rounded-lg border border-indigo-300 min-h-[650px]">
                <div className="flex justify-center mb-2">
                  <Image src={service.icon} className='filter brightness-75 rounded-lg p-2 backdrop-brightness-200' height={80} width={80} alt={service.title} />
                </div>
                <h6 className="font-bold mb-2 text-white min-h-[40px] text-center lg:min-h-[50px]">
                  {service.title}
                </h6>
                <p className="text-gray-50 mb-2">
                  {service.description}
                </p>
                <ul>
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-center mb-2">
                      <svg className="w-5 h-5 text-indigo-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                      </svg>
                      <span className="text-gray-50">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
                      </SwiperSlide>
                  ))}
                </Swiper> 
        </div>
        </div>
      </section>
    );
  };
  

// partners json
const PartnerSection = () => {
    const logos = [
        '/images/cybersecurity_partners/Crowdstrike.png',
      '/images/cybersecurity_partners/splunk.webp',
      '/images/cybersecurity_partners/paloalto.png',
      '/images/cybersecurity_partners/Qradar.png',
      '/images/cybersecurity_partners/sentinelone.webp',
      '/images/cybersecurity_partners/checkpoint.webp',
      '/images/cybersecurity_partners/Sophos.webp',
      '/images/cybersecurity_partners/Fortinet.png',
      '/images/cybersecurity_partners/logrhythm.webp',
      '/images/cybersecurity_partners/seceon.webp',
      '/images/cybersecurity_partners/dataresolve.webp',
      '/images/cybersecurity_partners/everest.webp',
      '/images/cybersecurity_partners/Zservicedesk.png',
      '/images/cybersecurity_partners/hp.webp',
      '/images/cybersecurity_partners/microsoft365.jpeg',
      '/images/cybersecurity_partners/Acronis.png',
      '/images/cybersecurity_partners/veeam.png',
      '/images/cybersecurity_partners/Barracuda.webp',
      '/images/cybersecurity_partners/VmWare.jpg',
      '/images/cybersecurity_partners/instasafe.png',
      '/images/cybersecurity_partners/kaspersky.webp',
      '/images/cybersecurity_partners/threatcop.webp',
      '/images/cybersecurity_partners/tenable.webp',
      '/images/cybersecurity_partners/netskope.webp',
      '/images/cybersecurity_partners/quest.webp',
    ];

    return(
        <div className="max-w-screen-xl px-4 py-4 mx-auto text-center lg:py-4 lg:px-6 overflow-hidden">
                <Swiper 
                spaceBetween={30}
                slidesPerView={3} 
                autoplay={{
                delay: 1000,
                disableOnInteraction: false,
                pauseOnMouseEnter:true,
                stopOnLastSlide:false,
                }} 
                loop={true}
                modules={[Autoplay]} 
                className="mySwiper">
                {logos.map((logo, index) => (
                    <SwiperSlide key={index} className='flex justify-center'>
                        <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '300px', height: '150px' }}>
                            <img 
                            src={logo} 
                            alt={`Partner logo ${index + 1}`} 
                            style={{ //maxWidth: '100%', maxHeight: '100%',
                            width:'80%',
                            aspectRatio:'3/2',
                            objectFit:'contain',
                            backgroundColor: 'white',
                            }} 
                        />
                        </div>
                    </SwiperSlide>
                ))}
                </Swiper>
        </div>
    )
}

// faq component
const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle active index
  };

  return (
    <section className="bg-indigo-50 pt-10 border">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6">
        <h2 className="my-6 text-center  lg:mb-8 text-2xl font-bold leading-none tracking-tight md:text-3xl text-indigo-900">
          (FAQ&apos;s) Frequently Asked Questions
        </h2>
        <div className="max-w-screen-md mx-auto">
          <div id="accordion-flush">
            <div>
              <h3 id="accordion-flush-heading-1">
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 font-medium text-left text-indigo-900 border-b border-gray-200 dark:border-indigo-700 dark:bg-indigo-50 dark:text-indigo-700"
                  onClick={() => toggleAccordion(1)}
                >
                  <span>What services do you provide?</span>
                  <svg
                    data-accordion-icon
                    className={`w-6 h-6 ${activeIndex === 1 ? 'rotate-180' : ''} shrink-0`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </h3>
              {activeIndex === 1 && (
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-indigo-700 dark:text-indigo-700">
                    We offer a range of IT products and services, including server components, networking components, system components, and more. We are also experts in setting up office IT infrastructure.
                  </p>
                </div>
              )}
            </div>

            <div>
              <h3 id="accordion-flush-heading-2">
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 font-medium text-left text-indigo-700 border-b border-gray-200 dark:border-gray-700 dark:text-indigo-700"
                  onClick={() => toggleAccordion(2)}
                >
                  <span>Can you customize IT solutions for my business?</span>
                  <svg
                    data-accordion-icon
                    className={`w-6 h-6 ${activeIndex === 2 ? 'rotate-180' : ''} shrink-0`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </h3>
              {activeIndex === 2 && (
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-indigo-700 dark:text-indigo-700">
                    Yes, we specialize in tailoring IT solutions to fit the specific needs of your business, from small-scale setups to complex infrastructure projects.
                  </p>
                </div>
              )}
            </div>

            <div>
              <h3 id="accordion-flush-heading-3">
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 font-medium text-left text-indigo-700 border-b border-gray-200 dark:border-gray-700 dark:text-indigo-700"
                  onClick={() => toggleAccordion(3)}
                >
                  <span>Do you provide support and maintenance services?</span>
                  <svg
                    data-accordion-icon
                    className={`w-6 h-6 ${activeIndex === 3 ? 'rotate-180' : ''} shrink-0`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </h3>
              {activeIndex === 3 && (
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-indigo-700 dark:text-indigo-700">
                    Yes, we offer ongoing support and maintenance services to ensure your IT infrastructure remains efficient and up-to-date.
                  </p>
                </div>
              )}
            </div>

            <div>
              <h3 id="accordion-flush-heading-4">
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 font-medium text-left text-indigo-700 border-b border-gray-200 dark:border-gray-700 dark:text-indigo-700"
                  onClick={() => toggleAccordion(4)}
                >
                  <span>How can I get started with your services?</span>
                  <svg
                    data-accordion-icon
                    className={`w-6 h-6 ${activeIndex === 4 ? 'rotate-180' : ''} shrink-0`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </h3>
              {activeIndex === 4 && (
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-indigo-7000 dark:text-indigo-700">
                    Getting started is easy! You can contact us directly to discuss your requirements, and we&apos;ll help you select the right products and services for your needs.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



// testimonials
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
const testimonials = [
  {
    text: "The software solutions provided by Himani World Infosol have significantly streamlined our operations. Their platform offers a seamless experience, from project management tools to advanced analytics. It's a game-changer for our IT infrastructure.",
    name: "Rahul K.",
  },
  {
    text: "Himani World Infosol's customer support is outstanding! They always go above and beyond to ensure that we have everything we need. Highly recommend their services.",
    name: "Samantha T.",
  },
  {
    text: "Their innovative approach to cybersecurity has transformed our business. We feel more secure and confident in our operations now.",
    name: "Asheesh",
  },
  // Add more testimonials as needed
];

const TestimonialComponent = () => {
  return (
    <section className="bg-indigo-50">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
        <Swiper 
        spaceBetween={30}
        slidesPerView={1} 
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter:true,
          stopOnLastSlide:false,
          }} 
          loop={true} 
        navigation={true} 
        modules={[Autoplay,Navigation]} 
        className="mySwiper">
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <figure className="max-w-screen-md mx-auto">
                <svg
                  className="h-12 mx-auto mb-3 text-indigo-900 dark:text-indigo-900"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="text-md font-medium text-indigo-900 md:text-xl">
                    {testimonial.text}
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                  <Avatar className='text-white bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900'>{testimonial.name.charAt(0)}</Avatar>
                  <div className="flex items-center divide-x-2 divide-indigo-900 dark:divide-gray-700">
                    <div className="pr-3 font-medium text-indigo-400 dark:text-indigo-600">{testimonial.name}</div>
                  </div>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

