export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  import cSharpIcon from "../assets/c-sharp.png";
  import cPlusIcon from "../assets/c-.png";
  import javaIcon from "../assets/java.png";
  import reactIcon from "../assets/react.png";
  import COTLogo from "../assets/city-of-toronto-logo-8A5595A393-seeklogo.com.png";
  import CCLogo from "../assets/Screenshot_2024-12-08_at_8.56.21_PM-removebg-preview.png";
  import MFSLogo from "../assets/540f84_182fc00b2a9b40509d9b1ba42773665d~mv2.avif";

  export const services = [
    { title: "C#", icon: cSharpIcon },
    { title: "Java", icon: javaIcon },
    { title: "React", icon: reactIcon },
    { title: "C++", icon: cPlusIcon },
  ];
  
  export const experiences = [
    {
      title: "Technical Trainee",
      company_name: "The City of Toronto",
      icon: COTLogo,
      date: "Sep 2024 - Dec 2024",
      points: [
        "Executed comprehensive data cleaning initiatives to enhance the quality of legacy data, meticulously aligning street names from over 12,000 entries with the GCC database for the Chapter 950 Bylaw project, ensuring data accuracy and consistency across systems",
        "Developed multiple automated scripts to convert data from MS Access databases into JSON and Excel formats, facilitating seamless data analysis and integration with new system architectures",
        "Developed and curated content for pages on the intranet for project updates on key initiatives, ensuring clear communication and stakeholder alignment across projects"
      ],
    },
    {
      title: "Business/Software Developer",
      company_name: "MultiFlow Solutions",
      icon: MFSLogo,
      date: "Jan 2024 - Apr 2024",
      points: [
        "Developed and integrated C# components within proprietary applications to introduce new functionality, optimizing workflows for the sales team and enhancing overall process efficiency",
        "Created functionality to integrate SolidWorks and SAP APIs, ensuring synchronized data across platforms and departments, which significantly reduced human error throughout key business processes",
        "Utilized SQL databases and complex queries to support company applications and user interfaces, enabling more efficient data collection and accessibility across multiple departments"
      ],
    },
    {
      title: "Web Developer",
      company_name: "CiviConnect",
      icon: CCLogo,
      date: "Jan 2023 - Apr 2023",
      points: [
        "Created and designed new web pages using Webflow, Javascript, HTML and CSS, for clients to help them in the online space and resulted in a better user experience for their customers",
        "Presented prototypes of web pages designed in Figma to clients and resulted in understanding client requirements and wants that helped the final web pages be exactly what they were looking for",
        "Worked with React and Strapi connections for the backend of the web pages and resulted in a fully functional website with data storage"
      ],
    },
  ];
  
  export const projects = [
    {
      name: "WeatherPedia",
      description:
        "Web-based platform that allows users to access weather information for their location by entering it in the search field",
      tags: [
        { name: "Javascript", color: "blue-text-gradient" },
        { name: "HTML", color: "green-text-gradient" },
        { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
        { name: "Weather API by API Ninjas", color: "yellow-text-gradient" },
      ],
      image: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Projects/WeatherPedia.png",
      source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
    },
  ];
  