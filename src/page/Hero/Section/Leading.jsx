import React from 'react';

const Leading = () => {
  return (
    <section className="leading-section">
      <div className="leading-content">
        <p className="leading-subtitle">
          <span className="blue-dot">•</span> Leading in Kerala
        </p>
        <h1 className="leading-title">
          Kerala's Leading Business Consultancy
        </h1>
        <p className="leading-description">
          As Kerala's leading business consultancy, we deliver precise, dependable solutions in accounting, taxation,
          and corporate compliance — tailored to help your business operate smoothly and confidently.
        </p>
      </div>
      <div className="leading-image-wrapper">
        <img
          src="handshake1.png"
          alt="Business professionals handshake"
          className="leading-image"
        />
      </div>
    </section>
  );
};

export default Leading;
