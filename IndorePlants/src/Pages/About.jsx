import decoration from "../assets/leaf-3.png";
import OrganicGarden from "../assets/video1.mp4";
import JoinUs from "../assets/video2.mp4";

const About = () => {
  return (
    <div id="about" className="bg-green-950 py-16 relative">
      {/* Decoration Image at Top Corner */}
      <div className="absolute top-0 right-0 hidden md:block">
        <img className="h-64 w-64" src={decoration} alt="decoration" />
      </div>
      {/* Heading */}
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
          <h2 className="text-4xl font-bold items-center text-center text-yellow-400 mb-12">
            About Us
          </h2>
        </div>

        {/* First Section: Video on Left, Content on Right */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          {/* Video on Left */}
          <div className="w-full md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105">
              <video
                autoPlay
                loop
                muted
                className="w-full h-64 md:h-96 object-cover">
                <source src={OrganicGarden} type="video/mp4" />
                Browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Content on Right */}
          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="text-3xl font-bold text-[#55ff00]">
              Make{" "}
              <span className="text-sky-500 font-serif italic">
                Your Organic
              </span>{" "}
              Garden
            </h3>
            <p className="text-white text-lg">
              At GreenLife, we believe in the power of nature to transform
              lives. Our mission is to help you create a thriving organic
              garden, whether you're a beginner or an experienced gardener. With
              our expert tips, high-quality plants, and eco-friendly products,
              you can grow your own green oasis at home.
            </p>
          </div>
        </div>

        {/* Second Section: Content on Left, Video on Right */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Content on Left */}
          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="text-3xl font-bold text-[#55ff00]">
              Come With Us,{" "}
              <span className="text-sky-500 font-serif italic">Grow Up</span>{" "}
              Your Plant
            </h3>
            <p className="text-white text-lg">
              Join our community of plant lovers and take the first step towards
              a greener lifestyle. We provide everything you need to grow
              healthy, vibrant plants – from seeds and soil to personalized
              advice. Together, let's make the world a greener place, one plant
              at a time.
            </p>
          </div>

          {/* Video on Right */}
          <div className="w-full md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105">
              <video
                autoPlay
                loop
                muted
                className="w-full h-64 md:h-96 object-cover">
                <source src={JoinUs} type="video/mp4" />
                Browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
