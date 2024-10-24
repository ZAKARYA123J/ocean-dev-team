import React, { useState, useEffect } from 'react';
import { HiLocationMarker } from "react-icons/hi";
import { PiPhoneCallFill, PiInstagramLogoFill } from "react-icons/pi";
import { MdMarkEmailRead } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { ImLinkedin2 } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from 'react-router-dom'; // Import Link
import logo from ".././assets/images/done/ocean3.png"; // Ensure correct path for logo
import { footerDataEn } from './locales/en/page';

const Footer = React.memo(() => {
  const [footerData, setFooterData] = useState({});

  useEffect(() => {
    // Load English data directly
    setFooterData(footerDataEn);
  }, []);

  const {
    socialLinks = [],
    contactInfo = [],
    pageElements = [],
    pagelangague = [],
    ourFormation = [],
    ourServices = [],
    footerText = { logoAlt: "", mainDescription: "", detailedDescription: "", ourServicesTitle: "", ourPageTitle: "", ourlangagueTitle: "" , ourFormationTitle: "" },
    footerCopyright = { text: "", company: "", allRightsReserved: "", message: ""  }
  } = footerData;

  const { ourServicesTitle, ourPageTitle, ourFormationTitle, ourlangagueTitle } = footerText;

  return (
    <footer className="bg-gradient-to-br from-blue-200 via-purple-200 to-blue-300 py-6 text-black pt-5">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Contact Information */}
          {contactInfo.map(({ id, Icon, title, content }) => (
            <div key={id} className="flex items-center space-x-3">
              <div className="bg-[#3a86ff] p-2 rounded-md mx-1">
                {Icon === "HiLocationMarker" && <HiLocationMarker className="h-6 w-6 text-white" />}
                {Icon === "PiPhoneCallFill" && <PiPhoneCallFill className="h-6 w-6 text-white" />}
                {Icon === "MdMarkEmailRead" && <MdMarkEmailRead className="h-6 w-6 text-white" />}
              </div>
              <div>
                <p className="text-sm font-bold">{title}</p>
                <p className="text-sm font-semibold" style={{ direction: 'ltr', unicodeBidi: 'plaintext' }}>{content}</p>
              </div>
            </div>
          ))}

          {/* Social Links */}
          <div className="flex items-center space-x-3">
            {socialLinks.map(({ id, label, to }) => (
              <div key={id} className="bg-[#3a86ff] p-2 rounded-md mx-1">
               
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4">
          <div className="space-y-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <img src={logo} alt={footerText.logoAlt} style={{ width: '120px' }} />
            </div>
            <p className="text-sm">{footerText.mainDescription}</p>
            <p className="text-sm">{footerText.detailedDescription}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:col-span-3">
            <FooterLinkSection title={ourServicesTitle} links={ourServices} />
            <FooterLinkSection title={ourPageTitle} links={pageElements} />
            <FooterLinkSection title={ourlangagueTitle} links={pagelangague} />
            <FooterLinkSection title={ourFormationTitle} links={ourFormation} />
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-2">
          <hr className="content-center my-4 border-t-2 border-gray-300" />
          <div>
            <div className="flex justify-between">
              <p className="font-semibold text-md">
                {footerCopyright.text} {new Date().getFullYear()}{" "}
                <Link to="/#" className="text-blue-600 hover:text-white">
                  {footerCopyright.company}
                </Link>. {footerCopyright.allRightsReserved}
              </p>
              <p className="font-semibold text-md">
                {footerCopyright.message}
                <Link to="/#" className="text-blue-600 hover:text-white">
                  Ocean Connecting
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

// FooterLinkSection component
function FooterLinkSection({ title, links }) {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-bold">{title}</h3>
      <ul className="space-y-1">
        {links.map(({ id, label, link }) => (
          <li key={id}>
            <Link to={link} className="text-sm hover:text-[#3a86ff]">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
