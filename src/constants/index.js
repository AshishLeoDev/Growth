export const navLinks = [
  {
    id: "/",
    title: "Home",
    handleClick: ()=>{document.getElementById('hero')?.scrollIntoView({behavior:'smooth'})}
  },
  {
    id: 'amplify-growth',
    title: 'Amplify Growth',
    handleClick: ()=>{document.getElementById('science')?.scrollIntoView({behavior:'smooth'})}
  },
  {
    id: 'services',
    title: 'Our Services',
    handleClick: ()=>{document.getElementById('services')?.scrollIntoView({behavior:'smooth'})}  },
  {
    id: 'contact',
    title: "Contact Us",
    handleClick: ()=>{document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}  }
];

 export const services = [
  {
      id: 's1',
      title: "Content Production",
      desc: "Our team will shoot high quality videos for your content."
  },
  {
      id: 's2',
      title: "Video Editing",
      desc: "We are create captivating videos using fast paced video editing."
  },
  {
      id: 's3',
      title: "Research & Writing",
      desc: "For each content we will do the research and write compelling copies for you."
  },
  {
      id: 's4',
      title: "Graphic Designing",
      desc: "Our visual design experts will create aesthetic designs that stand out."
  },
  {
      id: 's5 ',
      title: "Meme Marketing",
      desc: "Ideate and create relatable memes that resonated with the audience."
  },
  {
      id: 's6',
      title: "Social Media Management",
      desc: "End-to-end social media management to optimise content and drive engagement."
  },
]

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};