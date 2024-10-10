import zerodha from ".././src/assets/zerodha.png";
import quotefusion from ".././src/assets/quotefusion.png";
import chatgpt from ".././src/assets/chatgpt.png";
import currency from ".././src/assets/currency.png";
import crickzone from ".././src/assets/crickzone.png";

const projects = [
  {
    img: chatgpt,
    title: { normal: "Chat", span: "Boty" },
    desc: "ChatBot using React.js and Google Gemini API, with shimmer effect.",
    link_1: "https://chatboty.netlify.app",
    link_2: "https://github.com/SanketBhandarii/ChatGPT",
  },
  {
    img: crickzone,
    title: { normal: "Crick", span: "Zone" },
    desc: "CrickZone is the app for tracking the cricket score bewteen 2 teams ",
    link_1: "https://crickzone.netlify.app",
    link_2: "https://github.com/SanketBhandarii/CrickZone",
  },
  {
    img: quotefusion,
    title: { normal: "Quote", span: "Fusion" },
    desc: "QuoteFusion is a MERN app for discovering and sharing uplifting quotes. ",
    link_1: "https://quotefusion.netlify.app/",
    link_2: "https://github.com/SanketBhandarii/BucketListApp",
  },
  {
    img: zerodha,
    title: { normal: "Zerodha", span: "UI" },
    desc: "Zerodha UI crafted with Tailwind CSS: clean, responsive, and modern.",
    link_1: "https://zeroodha.netlify.app",
    link_2: "https://github.com/SanketBhandarii/Zerodha",
  },
];

export default projects;
