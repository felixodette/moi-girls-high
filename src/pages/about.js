import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import AboutOne from "@/components/about-one";
import CallToActionOne from "@/components/call-to-action-one";
import TeamCarousel from "@/components/team-carousel";
import VideoOne from "@/components/video-one";
import SubscribeForm from "@/components/subscribe-form";
import FeatureTabOne from "@/components/feature-tab-1";
import HeaderTwo from "@/components/header-two";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import HistoryCarousel from "../components/history-carousel";

const AboutPage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="About Us Page">
          <HeaderTwo />
          <PageBanner title="About Us" name="About" />
          <AboutOne />
          <HistoryCarousel />
          <SubscribeForm />
          {/*<TeamCarousel />*/}
          {/*<VideoOne />*/}
          <FeatureTabOne />
          <CallToActionOne extraClassName="ready" />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default AboutPage;
