import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import ServiceDetails from "@/components/service-details";
import CallToActionOne from "@/components/call-to-action-one";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderTwo from "@/components/header-two";
import { useLocation } from "@reach/router";

const ServiceDetailsPage = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const url = urlParams.get("url");

  console.log("blaaaaa");
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Service Details Page">
          <HeaderTwo />
          <PageBanner title="Service Details" name="Service" />
          <ServiceDetails url={url} />
          <CallToActionOne extraClassName="ready" />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default ServiceDetailsPage;
