import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from "aos";
import { Container } from "@mui/material"
import "aos/dist/aos.css";
import BannerData from '../../Helpers/HomePageBanner';
import { Helmet } from "react-helmet";
import {
  ShoppingCart,
  Gift,
  BookOpen,
  Star,
  ArrowRight,
  Heart
} from "lucide-react";

import Navbar from "../../components/user/navbar/navbar";
import Footer from "../../components/user/footer/footer";
import Carousel from "../../components/user/hero/carousel";
import CategoryCard from "../../components/user/Category_Card/CategoryCard";

// Scroll Progress Bar Component
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScroll = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((currentScroll / scrollHeight) * 100);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <motion.div
      style={{ scaleX: scrollProgress / 100 }}
      className="fixed top-0 left-0 h-1.5 bg-gradient-to-r from-pink-600 to-purple-600 origin-left z-50"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: scrollProgress / 100 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    />
  );
};

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out-cubic",
      once: true,
    });
  }, []);

  const productCategories = [
    {
      img: "https://i.pinimg.com/originals/96/24/6e/96246e3c133e6cb5ae4c7843f9e45b22.jpg",
      title: "Stationery",
      description: "Elevate your workspace with premium design.",
      icon: BookOpen,
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      img: "https://tse1.mm.bing.net/th?id=OIP.EYAqW5p_HzCoXKq1dXvGyQHaFj&pid=Api&P=0&h=180",
      title: "Gift Boxes",
      description: "Curated gifts that speak volumes of love.",
      icon: Gift,
      gradient: "from-pink-500 to-rose-500"
    },
    {
      img: "https://tse3.mm.bing.net/th?id=OIP.90zsFkK9l2Nttf3fQu12ZwHaE8&pid=Api&P=0&h=180",
      title: "Books",
      description: "Transform spaces with sophisticated reads.",
      icon: BookOpen,
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  const featuredFeatures = [
    {
      icon: ShoppingCart,
      title: "Curated Selection",
      description: "Handpicked items for unique gifting experiences."
    },
    {
      icon: Heart,
      title: "Emotional Connect",
      description: "Gifts that create lasting memories and bonds."
    },
    {
      icon: Star,
      title: "Quality Assured",
      description: "Premium products with exceptional craftsmanship."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mera Bestie | Unique Gifting Experience</title>
        <meta name="description" content="Discover unique gifts and thoughtful collections for every occasion." />
      </Helmet>
      <ScrollProgress />
      <Navbar />

      <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">

        {/* Carousel Section */}
        <dir className="mt-2"></dir>
        <Carousel />

        {/* Product Categories Section */}
        <section className="px-4 py-20 bg-transparent">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                Our Collections
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
              <p className="text-gray-700 max-w-2xl mx-auto text-lg">
                Discover meticulously crafted categories designed to inspire and delight
              </p>
            </motion.div>
            <Container maxWidth='3xl' style={{ marginTop: 90, display: "flex", justifyContent: 'center', flexGrow: 1, flexWrap: 'wrap', gap: 20, }}>
              {BannerData.map(data => (
                <CategoryCard data={data} key={data.img} />
              ))
              }
            </Container>
          </div>
        </section>

        {/* Hero Section with Modern Glassmorphism Design */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 z-0">
    <motion.img
      src="https://cdn.wallpapersafari.com/89/8/lybQgH.jpg"
      alt="Elegant Gift Background"
      className="w-full h-full object-cover filter brightness-50 opacity-70"
      initial={{ scale: 1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
    />
  </div>

  <motion.div
    className="relative z-10 container mx-auto max-w-4xl px-4"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-12 rounded-3xl shadow-2xl text-center">
      <h1 className="mb-4 text-4xl md:text-5xl font-extrabold text-white tracking-tight bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 text-transparent">
        Crafting Memorable Moments
      </h1>
      <p className="mb-6 text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
        Transform ordinary moments into extraordinary memories with our carefully curated collections
      </p>
      <div className="space-x-4 flex justify-center">
        <Link to="/about">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 px-8 py-3 rounded-full uppercase text-sm tracking-wider font-semibold shadow-xl transition-all flex items-center gap-2"
          >
            Explore Story <ArrowRight size={16} />
          </motion.button>
        </Link>
        <Link to="/shop">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:opacity-90 px-8 py-3 rounded-full uppercase text-sm tracking-wider font-semibold shadow-xl transition-all flex items-center gap-2"
          >
            Shop Now <ShoppingCart size={16} />
          </motion.button>
        </Link>
      </div>
    </div>
  </motion.div>
</section>


        {/* Featured Features Section */}
        <section className="px-4 py-20 bg-white">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              className="grid md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    delayChildren: 0.3,
                    staggerChildren: 0.2
                  }
                }
              }}
            >
              {featuredFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-8 rounded-3xl text-center hover:shadow-xl transition-all duration-300 group"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-4 rounded-full text-white group-hover:rotate-12 transition-transform">
                      <feature.icon size={40} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-purple-100 to-pink-100" data-aos="fade-up">
          <div className="absolute inset-0 z-0 opacity-20">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.RNJBshhRJcxPoSt2Slj5bAHaEK&pid=Api&P=0&h=180"
              alt="Vision Background"
              className="w-full h-full object-cover filter brightness-50"
              loading="lazy"
            />
          </div>

          <div className="container relative z-10 mx-auto max-w-6xl px-4">
            <motion.div
              className="bg-white/20 backdrop-blur-xl border border-white/30 p-12 md:p-16 rounded-3xl max-w-2xl mx-auto text-center shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                Our Vision
              </h2>
              <p className="text-xl text-gray-800 mb-10 leading-relaxed">
                We believe in creating more than just products – we craft experiences that connect hearts,
                celebrate relationships, and turn ordinary moments into extraordinary memories.
                Our mission is to be your partner in expressing love, appreciation, and thoughtfulness.
              </p>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:opacity-90 px-12 py-4 rounded-full uppercase text-sm tracking-wider font-semibold shadow-xl transition-all flex items-center gap-2 mx-auto"
                >
                  Our Journey <ArrowRight size={16} />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;