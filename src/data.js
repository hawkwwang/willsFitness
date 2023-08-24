import { SiOpenaigym } from "react-icons/si";

export const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Plans",
    path: "/plans",
  },
  {
    name: "Trainers",
    path: "/trainers",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const programs = [
  {
    id: 1,
    img: require("./images/Aerobics_classes.png"),
    title: "Aerobics class",
    info: "Aerobics class include various styles of dance， which can improve muscle coordination.",
    path: "/plans",
  },
  {
    id: 2,
    img: require("./images/Yoga_class.png"),
    title: "Yoga class",
    info: "Powerful, healthy tandem yoga for weight loss, strength and flexibility.",
    path: "/plans",
  },
  {
    id: 3,
    img: require("./images/strength_training_class.png"),
    title: "Strength training class",
    info: "Strengthens the muscles of every part of the body, and can quickly improve muscle strength.",
    path: "/plans",
  },
  {
    id: 4,
    img: require("./images/Indoor_cycling_class.png"),
    title: "Indoor cycling class",
    info: "Teach beginners how to adjust indoor bicycles, Low to moderate exercise intensity.",
    path: "/plans",
  },
];

export const values = [
  {
    id: 1,
    icon: <SiOpenaigym />,
    title: "Best Life",
    desc: "We are all connected. We care about the well-being and success of our teammates and communities. When we inspire the best in others, we are inspired to be our best.",
  },
  {
    id: 2,
    icon: <SiOpenaigym />,
    title: "One Team",
    desc: "We are better together. We collaborate with empathy, respect, and an unwavering dedication to creating excellence. While there is only one team, everyone on the team matters.",
  },
  {
    id: 3,
    icon: <SiOpenaigym />,
    title: "Growth Mindset",
    desc: "​​​​​​​We are curious learners. We seek to understand, see challenges as opportunities, and treat feedback as a gift. Smart experiments transform the seemingly impossible into something that’s possible.",
  },
  {
    id: 4,
    icon: <SiOpenaigym />,
    title: "Diversity, Equity, Belonging, and Inclusion",
    desc: "Our commitment to Diversity, Equity, Belonging, and Inclusion is to ensure that our team members, our partners, our clients, and their members are treated fairly and to promote equality of opportunity for everyone in the communities we serve, live, and work in.",
  },
];

export const faqs = [
  {
    id: 1,
    question: "How often should I exercise?",
    answer:
      "According to the American College of Sports Medicine (ACSM), the ideal workout regimen balances cardiovascular work and strength training. Their guidelines recommend 150 minutes of moderate-intensity aerobic physical activity each week or vigorous-intensity aerobic activity for a minimum of 20 minutes three days a week.",
  },
  {
    id: 2,
    question: "What time of day is best to work out?",
    answer:
      "The best time to exercise really depends on you. You can optimize your workouts by choosing certain times of day for your body rhythms, but only if you are truly motivated during those times.",
  },
  {
    id: 3,
    question: "How long should my workouts be?",
    answer:
      "The current recommendation is 2-3 days per week, for at least 30 minutes per day. But for someone who is just starting out, we recommend that they start at 1-2 days per week and ramp it up from there. Stretching right before a workout may seem like the best thing to do, but you might be putting yourself at risk of injury.",
  },
  {
    id: 4,
    question: "Do I need to warm up before my workouts?",
    answer:
      "Warmup exercises are an important part of any exercise routine. Your body needs some kind of activity to get your muscles warmed up before you launch into your workout. Warming up can help boost your flexibility and athletic performance, and also reduce your chance of injury.",
  },
  {
    id: 5,
    question: "Should I do strength training, cardio or both?",
    answer:
      "Cardio and strength training help the body in different ways. Cardiovascular exercise — anything that increases heart rate — promotes heart and lung health and reduces the risk of high blood pressure, diabetes and cancer. Strength training boosts the metabolism by building lean muscle mass, preventing obesity and limiting bone loss.",
  },
  {
    id: 6,
    question: "Should I lift weights for strength training?",
    answer:
      "Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate.",
  },
];

export const plans = [
  {
    id: 1,
    name: "Basic Package",
    desc: "This package is an one time package",
    price: 9.99,
    features: [
      { feature: "Aerobics class", available: true },
      { feature: "Yoga class", available: true },
      { feature: "Strength training class", available: true },
      { feature: "Indoor cycling class", available: true },
      { feature: "One time a week", available: true },
      { feature: "Trainer selection", available: false },
    ],
  },
  {
    id: 2,
    name: "standard Package",
    desc: "This is a monthly Package",
    price: 69.99,
    features: [
      { feature: "Aerobics class", available: true },
      { feature: "Yoga class", available: true },
      { feature: "Strength training class", available: true },
      { feature: "Indoor cycling class", available: true },
      { feature: "Three times a week", available: true },
      { feature: "Trainer selection", available: true },
    ],
  },
  {
    id: 3,
    name: "Premium Package",
    desc: "This package is an annual package",
    price: 199.99,
    features: [
      { feature: "Aerobics class", available: true },
      { feature: "Yoga class", available: true },
      { feature: "Strength training class", available: true },
      { feature: "Indoor cycling class", available: true },
      { feature: "Five times a week", available: true },
      { feature: "Trainer selection", available: true },
    ],
  },
];

const Trainer1 = require("./images/David_Zhang.png");
const Trainer2 = require("./images/Damon_Wang.png");
const Trainer3 = require("./images/Mia_Xie.png");
const Trainer4 = require("./images/Jack_Zhang.png");
const Trainer5 = require("./images/John_Tian.png");
const Trainer6 = require("./images/Ting_Li.png");

export const trainers = [
  {
    id: 1,
    image: Trainer1,
    name: "David Zhang",
    job: "Aerobic Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 2,
    image: Trainer2,
    name: "Damon Wang",
    job: "Aerobic Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 3,
    image: Trainer3,
    name: "Mia Xie",
    job: "Yoga Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 4,
    image: Trainer4,
    name: "Jack Zhang",
    job: "Strength Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 5,
    image: Trainer5,
    name: "John Tian",
    job: "Strength Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 6,
    image: Trainer6,
    name: "Ting Li",
    job: "Indoor cycling Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
];
