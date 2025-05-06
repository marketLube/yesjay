import React from 'react';

import { FaRegFileAlt, FaBalanceScale, FaUserTie } from 'react-icons/fa';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';

const Services = () => {
  return (
    <section className="expertise-section">
      <div className="heading">
      <p>
  <span className="blue-dot">•</span> Services We Provide
</p>

        <h2>Our Core Areas Of Expertise</h2>
      </div>
      <div className="expertise-container">
        <div className="services-grid">
          <div className="service-card">
            <FaRegFileAlt className="icon" />
            <h3>Accounting & Auditing</h3>
            <p>Statutory, internal, and forensic audits</p>
          </div>
          <div className="service-card">
            <RiMoneyDollarCircleLine className="icon" />
            <h3>Tax Consultancy</h3>
            <p>Direct, indirect, and GST compliance</p>
          </div>
          <div className="service-card">
            <FaBalanceScale className="icon" />
            <h3>Corporate Secretarial</h3>
            <p>Secretarial & corporate advisory service</p>
          </div>
          <div className="service-card">
            <FaUserTie className="icon" />
            <h3>Onsite Staffing</h3>
            <p>Trained accountants for full-year support</p>
          </div>
        </div>
        <div className="image-section">
          <img src="d257f42cb0c589f69978c9f12994429ff1a9170d.jpg" alt="Team at work" />
        </div>
      </div>
    </section>
  );
};

export default Services;
