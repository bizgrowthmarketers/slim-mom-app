// Footer.jsx
import React from 'react';
import { FooterWrapper } from './footer.styled'; // Adjust path if necessary

const Footer = () => {
  return (
    <FooterWrapper>
      &copy; {new Date().getFullYear()} Slim Mom Apps | Developed by&nbsp;
      <a 
        href="https://bizgrowthmarketers.com/" 
        target="_blank" 
        rel="noreferrer noopener nofollow" 
        aria-label="Business Growth Marketers"
      >
        Business Growth Marketers
      </a>
    </FooterWrapper>
  );
};

export default Footer;
