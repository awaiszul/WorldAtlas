import React from 'react';
import './Footer.css';

export const Footer = () => {
  const footerData = [
    {
      id: 1,
      icon: "📧",
      title: "Email",
      value: "mawaiszulfqar786@gmail.com",
    },
    {
      id: 2,
      icon: "📞",
      title: "Phone",
      value: "+92 324 0208835",
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        {footerData.map((item) => (
          <div key={item.id} className="footer-item">
            <span className="footer-icon">{item.icon}</span>
            <div className="footer-info">
              <h4>{item.title}</h4>
              <p>{item.value}</p>
            </div>
          </div>
        ))}
        <p className="footer-bottom">© 2025 All rights reserved. <br></br> Made by Muhammad Awais</p>
      </div>
    </footer>
  );
};
