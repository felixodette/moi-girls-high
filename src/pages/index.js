import React from "react";
import Layout from "@/components/layout";
import CallToActionOne from "@/components/call-to-action-one";
import Footer from "@/components/footer";
import ServiceHomeTwo from "@/components/service-home-two";
import BlogHome from "@/components/blog-home";
import ContactInfos from "@/components/contact-infos";
import ServiceThree from "@/components/service-three";
import ParallaxOne from "@/components/parallax-1";
import GoogleMap from "@/components/google-map";
import TestimonialsOneCarousel from "@/components/testimonials-carousel";
import PortfolioHome from "@/components/portfolio-home";
import FeatureTabOne from "@/components/feature-tab-1";
import CallToActionTwo from "@/components/call-to-action-two";
import FeatureTwo from "@/components/feature-two";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import HeaderTwo from "@/components/header-two";
import SliderTwo from "@/components/slider-two";

const HomeTwo = () => {
  return (
      <MenuContextProvider>
        <SearchContextProvider>
          <Layout PageTitle="Home">
            <HeaderTwo />
            <SliderTwo />
            <CallToActionOne extraClassName="ready_2" buttonClass="red_bg" />
            <ServiceHomeTwo />
            <FeatureTwo />
            <PortfolioHome />
            <TestimonialsOneCarousel />
            <FeatureTabOne />
            <ServiceThree />
            <ParallaxOne />
            <BlogHome />
            <GoogleMap extraClass="contact-page" />
            <CallToActionTwo />
            <ContactInfos />
            <Footer />
          </Layout>
        </SearchContextProvider>
      </MenuContextProvider>
  );
};

export default HomeTwo;


// import React from "react";
// import Layout from "@/components/layout";
// import CallToActionOne from "@/components/call-to-action-one";
// import Footer from "@/components/footer";
// import BlogHome from "@/components/blog-home";
// import ParallaxOne from "@/components/parallax-1";
// import ClientCarouselOne from "@/components/client-carousel-one";
// import TeamCarousel from "@/components/team-carousel";
// import FunfactOne from "@/components/funfact-one";
// import TrustedClient from "@/components/trusted-client";
// import PortfolioHome from "@/components/portfolio-home";
// import SubscribeForm from "@/components/subscribe-form";
// import ServiceTwo from "@/components/service-two";
// import AboutTwo from "@/components/about-two";
// import VideoTwo from "@/components/video-two";
// import HeaderOne from "@/components/header-one";
// import SearchContextProvider from "@/context/search-context";
// import MenuContextProvider from "@/context/menu-context";
// import SliderOne from "@/components/slider-one";
//
// const HomeOne = () => {
//   return (
//     <MenuContextProvider>
//       <SearchContextProvider>
//         <Layout PageTitle="Home One">
//           <HeaderOne />
//           <SliderOne />
//           <ServiceTwo />
//           <AboutTwo />
//           <VideoTwo />
//           <SubscribeForm />
//           <PortfolioHome />
//           <FunfactOne />
//           <TrustedClient />
//           <TeamCarousel />
//           <ClientCarouselOne />
//           <ParallaxOne />
//           <BlogHome />
//           <CallToActionOne extraClassName="ready" />
//           <Footer />
//         </Layout>
//       </SearchContextProvider>
//     </MenuContextProvider>
//   );
// };
//
// export default HomeOne;