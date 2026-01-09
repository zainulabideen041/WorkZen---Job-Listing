import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import Smarter from "../components/smarter";
import Plan from "../components/plan";
import Subscription from "../components/subscription";
import Testimonial from "../components/testimonial";
import Contact from "../components/contact";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Smarter />
      <Plan />
      <Subscription />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
