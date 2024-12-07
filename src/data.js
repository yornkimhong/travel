// Import all the images
import image1 from "./assets/images/sliders/Alaska.jpg";
import image2 from "./assets/images/sliders/cambodia.jpg";
import image3 from "./assets/images/sliders/France.jpg";
import image4 from "./assets/images/sliders/Iceland.jpg";
import image5 from "./assets/images/sliders/italy-roma.jpg";
import image6 from "./assets/images/sliders/japan.jpg";
import image7 from "./assets/images/sliders/united-state.jpg";
import image8 from "./assets/images/sliders/New-Zealand.jpg";
import image9 from "./assets/images/sliders/spain.jpg";
import image10 from "./assets/images/sliders/Switzerland.jpg";

export const products = [
  { name: "Alaska", image: image1 },
  { name: "Cambodia", image: image2 },
  { name: "France", image: image3 },
  { name: "Iceland", image: image4 },
  { name: "Italy", image: image5 },
  { name: "Japan", image: image6 },
  { name: "United States", image: image7 },
  { name: "New Zealand", image: image8 },
  { name: "Spain", image: image9 },
  { name: "Switzerland", image: image10 },
];
// import partner logo
import partner1 from "./assets/images/partner/partner-1.svg";
import partner2 from "./assets/images/partner/partner-2.svg";
import partner3 from "./assets/images/partner/partner-3.1.svg";
import partner4 from "./assets/images/partner/partner-4.svg";
import partner5 from "./assets/images/partner/partner-5.svg";

export const partners = [
  { id: 1, logo: partner1 },
  { id: 2, logo: partner2 },
  { id: 3, logo: partner3 },
  { id: 4, logo: partner4 },
  { id: 5, logo: partner5 },
];

// import images from country
import country1 from "./assets/images/countrys/Athens.jpg";
import country2 from "./assets/images/countrys/Jaipur.jpg";
import country3 from "./assets/images/countrys/Kyoto.jpg";
import country4 from "./assets/images/countrys/London.jpg";

export const countrys = [
  {
    id: 1,
    image: country3,
    title: "Scenic Beauty",
    price: "$1,200",
    location: "Kyoto, Japan",
  },
  {
    id: 2,
    image: country2,
    title: "Explore Culture",
    price: "$900",
    location: "Jaipur, India",
  },
  {
    id: 3,
    image: country4,
    title: "Iconic Landmarks",
    price: "$1,000",
    location: "London, England",
  },
  {
    id: 4,
    image: country1,
    title: "Rich History",
    price: "$1,100",
    location: "Athens, Greece",
  },
];

// import images from camping
import camping1 from "./assets/images/campings/Abel Tasman National Park, New Zealand.jpg";
import camping2 from "./assets/images/campings/ellowstone National Park.jpg";
import camping3 from "./assets/images/campings/Jasper National Park.jpg";
import camping4 from "./assets/images/campings/Lauterbrunnen Valley.jpg";

export const campings = [
  {
    id: 1,
    image: camping4,
    title: "Alpine Retreat",
    price: "$30",
    location: "Lauterbrunnen Valley, Switzerland",
  },
  {
    id: 2,
    image: camping2,
    title: "National Parks Adventure",
    price: "$25",
    location: "Yellowstone National Park, USA",
  },
  {
    id: 3,
    image: camping3,
    title: "Wilderness Escape",
    price: "$40",
    location: "Jasper National Park, Alberta, Canada",
  },
  {
    id: 4,
    image: camping1,
    title: "Coastal Camping",
    price: "$30",
    location: "Abel Tasman National Park, New Zealand",
  },
];

// import images from advantures
import adventure1 from "./assets/images/adventures/Arenal Volcano.jpg";
import adventure2 from "./assets/images/adventures/Cairns.jpg";
import adventure3 from "./assets/images/adventures/Kruger-National Park.jpg";
import adventure4 from "./assets/images/adventures/Queenstown.jpg";

export const adventures = [
  {
    id: 1,
    image: adventure4,
    title: "Thrill-Seeking Adventures",
    price: "$1,600",
    location: "Queenstown, New Zealand",
  },
  {
    id: 2,
    image: adventure1,
    title: "Rainforest Exploration",
    price: "$1,200",
    location: "Arenal Volcano, Costa Rica",
  },
  {
    id: 3,
    image: adventure3,
    title: "Wildlife Safari",
    price: "$1,500",
    location: "Kruger National Park, South Africa",
  },
  {
    id: 4,
    image: adventure2,
    title: "Great Barrier Reef Adventure",
    price: "$200",
    location: "Cairns, Australia",
  },
];

//import images from hiking
import hiking1 from "./assets/images/hikings/Annapurna Circuit.jpg";
import hiking2 from "./assets/images/hikings/Banff National Park.jpg";
import hiking3 from "./assets/images/hikings/Grand Canyon National Park.jpg";
import hiking4 from "./assets/images/hikings/Zermatt.jpg";

export const hikings = [
  {
    id: 1,
    image: hiking2,
    title: "Mountain Trails",
    price: "Free",
    location: "Banff National Park, Alberta, Canada",
  },
  {
    id: 2,
    image: hiking4,
    title: "Alpine Hiking",
    price: "Free",
    location: "Zermatt, Switzerland",
  },
  {
    id: 3,
    image: hiking3,
    title: "Desert Trails",
    price: "Free",
    location: "National Park, Arizona, USA",
  },
  {
    id: 4,
    image: hiking1,
    title: "Himalayan Trekking",
    price: "$1,000",
    location: "Annapurna Circuit, Nepal",
  },
];

//import images from group trip
import groupTrips1 from "./assets/images/group-trip/Barcelona.jpg";
import groupTrips2 from "./assets/images/group-trip/Hanoi-and-Halong Bay,.jpg";
import groupTrips3 from "./assets/images/group-trip/Tokyo-and- Kyoto.jpg";
import groupTrips4 from "./assets/images/group-trip/Tuscany.jpg";

export const groupTrips = [
  {
    id: 1,
    image: groupTrips4,
    title: "Culinary Journey",
    price: "$1,500",
    location: "Tuscany, Italy",
  },
  {
    id: 2,
    image: groupTrips1,
    title: "Cultural Fiesta",
    price: "$1,200",
    location: "Barcelona, Spain",
  },
  {
    id: 3,
    image: groupTrips3,
    title: "Heritage Exploration",
    price: "$1,800",
    location: "Tokyo and Kyoto, Japan",
  },
  {
    id: 4,
    image: groupTrips2,
    title: "Adventure and Culture",
    price: "$1,000",
    location: "Hanoi and Halong Bay, Vietnam",
  },
];

export const services = [
  {
    id: 1,
    icon: "ho",
    title: "Customized Travel Planning",
    description:
      "Tailored itineraries based on individual preferences and interests.",
  },
  {
    id: 2,
    icon: "ho",
    title: "Group Tours",
    description:
      "Organized group trips with guided experiences for social interaction.",
  },
  {
    id: 3,
    icon: "ho",
    title: "Travel Insurance",
    description: "Protection against trip cancellations, medical emergencies.",
  },
];

import testimonial1 from "./assets/images/testimonial/person-5.png";
import testimonial2 from "./assets/images/testimonial/person-2.png";
import testimonial3 from "./assets/images/testimonial/person-3.png";
import testimonial4 from "./assets/images/testimonial/person-6.png";

export const testimonials = [
  {
    id: 1,
    image: testimonial1,
    title: "Emma L.",
    description:
      "Traveling with [Your Company Name] was the best decision I made! The customized itinerary was perfect, and the guides were incredibly knowledgeable. I explored places I never thought I would. Highly recommend!",
  },
  {
    id: 2,
    image: testimonial2,
    title: "James T.",
    description:
      "I joined a group tour with [Your Company Name], and it was a fantastic experience! I made lifelong friends while discovering amazing destinations. The trip was well-organized, and every detail was taken care of.",
  },
  {
    id: 3,
    image: testimonial3,
    title: "Sophia R.",
    description:
      "Thanks to [Your Company Name], I had peace of mind during my travels. Their travel insurance gave me the confidence to explore without worrying about unexpected issues. I’ll definitely book my next adventure with them!",
  },
  {
    id: 4,
    image: testimonial4,
    title: "Michael B.",
    description:
      "The personalized service I received from [Your Company Name] was outstanding! They listened to my preferences and created a trip that exceeded my expectations. Every moment was unforgettable!",
  },  
];
