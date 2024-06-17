import zerodha from ".././src/assets/zerodha.png";
import bucketlist from ".././src/assets/bucketlist.png";
import chatgpt from ".././src/assets/chatgpt.png";
import currency from ".././src/assets/currency.png";

const projects = [
  {
    img: chatgpt,
    title: { normal: "Chat", span: "GPT" },
    desc: "ChatGPT clone using React.js, Google Gemini API, with shimmer effect.",
    link_1: "https://chatt-gpt.netlify.app/",
    link_2: "https://github.com/SanketBhandarii/ChatGPT",
  },
  {
    img: zerodha,
    title: { normal: "Zerodha", span: "UI" },
    desc: "Zerodha UI crafted with Tailwind CSS: clean, responsive, and modern.",
    link_1: "https://zeroodha.netlify.app/",
    link_2: "https://github.com/SanketBhandarii/Zerodha",
  },
  {
    img: bucketlist,
    title: { normal: "Bucket", span: "List" },
    desc: "Bucket List app built with React JS: organized, dynamic, and user-friendly.",
    link_1: "https://bucket-listapp.netlify.app/",
    link_2: "https://github.com/SanketBhandarii/BucketListApp",
  },
  {
    img: currency,
    title: { normal: "Currency", span: "Converter" },
    desc: "Currency Converter project: HTML, CSS, JS - intuitive and functional.",
    link_1: "https://currenccyconverter.netlify.app/",
    link_2: "https://github.com/SanketBhandarii/Currency-Converter",
  },
];

export default projects;
