import hero from "../assets/hero.jpeg";
import turntableOneImage from "../assets/turntableOne.jpeg";
import turntableTwoImage from "../assets/turntableTwo.jpeg";
import turntableThreeImage from "../assets/turntableThree.jpeg";

import portfolio1 from "../assets/portfolio1.jpeg";
import portfolio2 from "../assets/portfolio2.jpeg";
import portfolio3 from "../assets/portfolio3.jpeg";
import portfolio4 from "../assets/portfolio4.jpeg";
import portfolio5 from "../assets/portfolio5.jpeg";
import portfolio6 from "../assets/portfolio6.jpeg";

import user1 from "../assets/user1.jpeg";
import user2 from "../assets/user2.jpeg";
import user3 from "../assets/user3.jpeg";
import user4 from "../assets/user4.jpeg";
import user5 from "../assets/user5.jpeg";
import user6 from "../assets/user6.jpeg";

export const LINKS = [
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "Portfolio",
    link: "#portfolio",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Reviews",
    link: "#reviews",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

export const HERO_CONTENT = {
  title: "DJ BABS",
  subtitle: "Doctor of all mixes...",
  image: hero,
};

export const SERVICES_CONTENT = [
  {
    title: "Live Performance & Event DJ",
    description:
      "Providing high-energy, seamless mixes for private events and corporate gatherings. Formerly the lead house DJ at Motherland festival.",
    image: turntableOneImage,
    alt: "Turntable 1",
  },
  {
    title: "Arena-Scale Performances",
    description:
      "Bringing stadium-level energy to every set. Whether it’s a massive arena or an intimate club, I deliver high-impact sound and a vibe that guests will never forget.",
    image: turntableTwoImage,
    alt: "Turntabe 2",
  },
  {
    title: "Private Beach House Events",
    description:
      "Providing premium entertainment for high-end private parties. From sunset lounge sets to high-energy pool parties, I set the exact mood needed for your private retreat.",
    image: turntableThreeImage,
    alt: "Turntable 3",
  },
];

export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    name: "Motherland Festival 2025",
    description:
      "Capturing the energy of thousands at the Motherland 2025 festival, proudly sponsored by First Bank.",
    image: portfolio1,
    link: "#",
  },
  {
    id: 2,
    name: "Open-Air Concert Series",
    description:
      "Master of the outdoor stage. Expertly blending genres and reading massive crowds to ensure an unforgettable concert experience under the sun.",
    image: portfolio2,
    link: "#",
  },
  {
    id: 3,
    name: " Exclusive Island Retreats",
    description:
      "Curating the ultimate summer soundtrack for the Flying Fish beach takeover at Sencillo Ilashe Island.",
    image: portfolio3,
    link: "#",
  },
  {
    id: 4,
    name: "Engine Room Lagos",
    description:
      "Commanding the decks at Engine Room Lagos, delivering high-intensity late-night sets that define the city's legendary nightlife energy.",
    image: portfolio4,
    link: "#",
  },
  {
    id: 5,
    name: "Vault Club Ikeja",
    description:
      "Providing a premium nightlife experience at one of Ikeja’s most exclusive venues.",
    image: portfolio5,
    link: "#",
  },
  {
    id: 6,
    name: "Voda Beach Club",
    description:
      "Delivering premium entertainment for elite crowds at Voda Beach Club, specializing in sunset transitions and high-energy coastal rhythms.",
    image: portfolio6,
    link: "#",
  },
];

export const REVIEWS = {
  text: "Hear what clients have to say about DJ Babs and the unforgettable vibes he brings to every event.",
  
  reviews: [
    {
      review:
        "DJ Babs completely transformed our party! The Amapiano and Afrobeats mix was perfect, and the energy never dropped. Everyone was on the dance floor all night.",
      name: "Tunde A.",
      title: "Birthday Party Host",
      image: user1,
    },
    {
      review:
        "We booked DJ Babs for our wedding and it was the best decision we made. From the entrance to the last dance, everything was perfectly timed and the vibe was unmatched.",
      name: "Yejide & Mayowa",
      title: "Wedding Clients",
      image: user2,
    },
    {
      review:
        "DJ Babs knows how to read the crowd! The transitions were smooth and the song selection was on point. The club was lit from start to finish.",
      name: "Kelvin M.",
      title: "Club Manager",
      image: user3,
    },
    {
      review:
        "Our corporate event felt like a premium lounge experience thanks to DJ Babs. Professional, punctual, and delivered exactly the vibe we wanted.",
      name: "Luxe Event Hire",
      title: "Event Organizer",
      image: user4,
    },
    {
      review:
        "From Afrobeats to Amapiano, DJ Babs brought the perfect balance. The house party was a movie! Nobody wanted it to end.",
      name: "WHLN.",
      title: "House Party Host",
      image: user5,
    },
    {
      review:
        "We’ve worked with many DJs, but DJ Babs stands out. His energy, timing, and crowd control are top-tier. Highly recommended for concerts and big events.",
      name: "MOTHERLAND",
      title: "Concert Organizer",
      image: user6,
    },
  ],
};

export const CONTACT_INFO = {
  text: "Have questions or need more information? Get in touch with us, and we will be happy to assist you.",
  phone: {
    label: "Phone",
    value: "07053782724",
  },
  email: {
    label: "Email",
    value: "officiallbabs7@gmail.com",
  },
  address: {
    label: "Address",
    value: "Lagos, Nigeria.",
  },
};
