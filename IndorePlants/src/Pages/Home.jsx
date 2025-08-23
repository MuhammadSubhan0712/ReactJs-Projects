import Herovid from "../assets/Home.mp4";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div id="home" className="bg-green-950 font-fam py-16 relative overflow-hidden">
      {/* Animated Plant Icons */}
     

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Text and Buttons Container */}
        <div className="md:w-1/2 space-y-6">
          {/* Heading with Span */}
          <h1 className="text-5xl font-bold text-white">
            Bring{" "}
            <span className="text-yellow-300 font-mono italic">Nature</span>{" "}
            Indoors 🌿
          </h1>

          {/* Paragraph */}
          <p className="text-gray-100 text-lg">
            Plants are not just decorations; they are life. They purify the air,
            boost your mood, and bring a touch of nature into your home. Start
            your journey to a greener lifestyle today!
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-100 hover:text-yellow-300 transition duration-300">
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              className="text-gray-100 hover:text-yellow-300 transition duration-300">
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-gray-100 hover:text-yellow-300 transition duration-300">
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              className="text-gray-100 hover:text-yellow-300 transition duration-300">
              <FaLinkedin size={24} />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="bg-yellow-500 font-serif font-bold text-white px-6 py-3 rounded-lg border-2 border-green-400 flex items-center space-x-2 hover:scale-105 hover:bg-green-900 hover:border-2 hover:border-yellow-500 transition duration-300">
              <span>Shop Now</span>
              <span>🌱</span>
            </button>
            <button className="bg-green-900 text-white font-serif font-bold px-6 py-3 border-2 border-yellow-400 rounded-lg flex items-center space-x-2 hover:scale-105 hover:bg-yellow-500 hover:border-green-400 transition duration-300">
              <span>More Info</span>
              <span>🌿</span>
            </button>
          </div>
        </div>

        {/* Image Container */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-140 h-120 rounded-xl object-cover object-center">
            <source src={Herovid} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Home;
