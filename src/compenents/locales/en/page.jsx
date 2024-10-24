import { FaLock, FaComments, FaCode } from 'react-icons/fa';  // FontAwesome Icons
import { HiLocationMarker } from 'react-icons/hi';            // HeroIcons
import { PiPhoneCallFill } from 'react-icons/pi';             // Phosphor Icons
import { MdMarkEmailRead } from 'react-icons/md';             // Material Design Icons

export const DevelopmentEN=[{
    title:"Meet Our Development Team",
    desc:"  We are a passionate team of experts dedicated to crafting innovativesolutions. Explore more about each team member below and learn about the technologies they excel in.",
    title2:" Our Development Services",
    services : [
        {
          title: "Security",
          description:
            "Ensure your applications are secure with the latest security protocols and best practices. We provide penetration testing, secure coding practices, and compliance assessments.",
          icon: <FaLock className="text-blue-600" />,
        },
        {
          title: "Consultation",
          description:
            "Get expert advice on technology strategy, system architecture, and more. Our consultation services are tailored to help you navigate complex technical challenges.",
          icon: <FaComments className="text-green-600" />,
        },
        {
          title: "Development",
          description:
            "From front-end to back-end development, our team excels in building robust and scalable applications tailored to your business needs.",
          icon: <FaCode className="text-purple-600" />,
        },
      ]
  
}];

export const footerDataEn = {
    "socialLinks": [ // Changed from array to object
        { "id": 1, "label": "Facebook", "to": "https://www.facebook.com/the.ocean.connecting/" },
        { "id": 2, "label": "Instagram", "to": "https://www.instagram.com/oceanconnecting.ma/" },
        { "id": 3, "label": "YouTube", "to": "https://www.youtube.com/@OceanConnecting" },
        { "id": 4, "label": "LinkedIn", "to": "https://www.linkedin.com/company/ocean-connecting/?originalSubdomain=ma" }
    ],
    "contactInfo": [
        {
            "id": 1,
            "Icon": "HiLocationMarker",
            "title": "Address",
            "content": "Immeubles Coralia, 2ème étage, ISLAN, Hay Mohammadi, AGADIR"
        },
        {
            "id": 2,
            "Icon": "PiPhoneCallFill",
            "title": "Call Us",
            "content": "+212 704-309787"
        },
        {
            "id": 3,
            "Icon": "MdMarkEmailRead",
            "title": "Email Us",
            "content": "oceanconnecting.ma@gmail.com"
        }
    ],
    "pageElements": [
        { "id": 1, "label": "Home", "link": "/" },
        { "id": 2, "label": "Formation", "link": "/formation" },
        { "id": 3, "label": "jobs", "link": "/jobs" },
        { "id": 4, "label": "Gallery", "link": "/gallery" },
        { "id": 5, "label": "About Us", "link": "/" },
        { "id": 6, "label": "Contact", "link": "/Contact" },
        
    ],
    "pagelangague": [
        { "id": 1, "label": "English", "link": "/" },
        { "id": 2, "label": "Spanish", "link": "/" },
        { "id": 3, "label": "Germany", "link": "/" },
        { "id": 4, "label": "Italy", "link": "/" },
        { "id": 5, "label": "Frances", "link": "/" },
    ],
    "ourServices": [
        { "id": 1, "label": "Development Informatique", "link": "/team" },
        { "id": 2, "label": "Formation", "link": "/Formation" },
        { "id": 3, "label": "Clean facades", "link": "/teamglass" },
        { "id": 4, "label": "Recruitment", "link": "/jobs" },
        { "id": 5, "label": "Domiciliation", "link": "/Domiciliation" },
        { "id": 6, "label": "Nurs", "link": "/nurse" },
    ],
    "ourFormation": [
        { "id": 1, "label": "First aid", "link": "/" },
        { "id": 2, "label": "Dj training", "link": "/formation/3" },
        { "id": 3, "label": "elevator training", "link": "/formation/13" },
        { "id": 4, "label": "airport checkin agent training", "link": "/formation/2" },
        { "id": 5, "label": "training in cinematography and directing", "link": "/" },
    ],
    "footerText": {
        "logoAlt": "RAKAR Logo",
        "mainDescription": "WE ARE PROFESSIONAL",
        "detailedDescription": "We specialize in global job placement and document assistance,offering tailored support in multiple languagesto help you navigate international career opportunities.",
        "ourServicesTitle": "Our services",
        "ourPageTitle": "Our pages",
        "ourlangagueTitle": "Languages we teach",
        "ourFormationTitle":"Training",
    },
    "footerCopyright": {
        "text": "Copyright © ",
        "company": "Ocean Connecting",
        "allRightsReserved": "All Rights Reserved.",
        "message": "Thank you for visiting our website and welcome to ",
        
    }
}; // Changed from array to object
      