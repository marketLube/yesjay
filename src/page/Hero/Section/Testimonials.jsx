import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Quote } from "lucide-react";
import "swiper/css";

const testimonialData = [
  {
    quote: "YesJay has been a game changer for our business. They took over our accounting and made everything simple and transparent.",
    name: "Sophia Williams",
    position: "Founder",
    company: "FreshBites Café"
  },
  {
    quote: "YesJay has been a game changer for our business. They took over our accounting and made everything simple and transparent.",
    name: "Sophia Williams",
    position: "Founder",
    company: "FreshBites Café"
  },
  {
    quote: "YesJay has been a game changer for our business. They took over our accounting and made everything simple and transparent.",
    name: "Sophia Williams",
    position: "Founder",
    company: "FreshBites Café"
  }, {
    quote: "YesJay has been a game changer for our business. They took over our accounting and made everything simple and transparent.",
    name: "Sophia Williams",
    position: "Founder",
    company: "FreshBites Café"
  },
  {
    quote: "Tax season used to be stressful now it's a breeze. YesJay's team is responsive, thorough, and always ahead of the deadline",
    name: "Sneha Pillai",
    position: "Freelance Designer"
  },
  {
    quote: "We've worked with several firms, but YesJay stands out for their professionalism and clarity.",
    name: "Ajay Krishnan",
    position: "Director",
    company: "BlueNova Tech"
  },
  {
    quote: "The team at YesJay handles things in a way that actually makes sense. We trust them completely with our finances.",
    name: "Lakshmi R",
    position: "Co-Founder",
    company: "Crafthouse"
  }
  
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container-testimonials">
        <div className="header-testimonials">
          <span className="subtitle-testimonials"><span className="dot-testimonials">•</span> Client Testimonials</span>
          <h2 className="title-testimonials">Hear It From The People We Help</h2>
        </div>

        <Swiper
  modules={[Autoplay]}
  spaceBetween={30}
  slidesPerView={1}
  autoplay={{
    delay: 0, 
    disableOnInteraction: false, 
  }}
  speed={3000}
  loop={true} 
  freeMode={true} 
  freeModeMomentum={true} 
  breakpoints={{
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
>


          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <Quote className="quote-icon" />
                <p className="text">{testimonial.quote}</p>
                <div className="author">
                  <h4 className="name">{testimonial.name}</h4>
                  <p className="position">
                    {testimonial.position}
                    {testimonial.company && `, ${testimonial.company}`}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
