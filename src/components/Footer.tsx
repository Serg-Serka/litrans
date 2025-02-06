import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex justify-between items-center bg-white shadow-md">
      <div className="flex gap-4 p-4">
        {/* Company Logo */}
        <Image src="/images/logo_3.png" alt="Company Logo" width={150} height={50} />
      </div>

      <div style={{ marginBottom: '20px' }}>
        {/* Company Info */}
        <p>UAB LITRANS</p>
        <p>Mėtų g. 21A, Bajorų k., Vilniaus raj., Lietuva</p>
        <p>Kodas 305457073</p>
        <p>VAT number: LT100013020311</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        {/* Contact Info */}
        <p>sales@litrans.lt</p>
        <p>buh@litrans.lt</p>
        <p>+37060331715</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        {/* Certificate Image with Download Link */}
        <a href="/docs/certificate.pdf" target="_blank" rel="noopener noreferrer">
          <Image src="/images/certificate_icon.jpeg" alt="Certificate" width={50} height={50} />
        </a>
      </div>

      <div className="flex gap-4">
        {/* Social Media Icons */}
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} style={{ margin: '0 10px' }} />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} style={{ margin: '0 10px' }} />
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
          <FaTiktok size={30} style={{ margin: '0 10px' }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
