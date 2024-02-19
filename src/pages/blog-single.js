import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import BlogDetails from "@/components/blog-details";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderTwo from "@/components/header-two";

const BlogSinglePage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Blog Details Page">
          <HeaderTwo />
          <PageBanner title="Blog Details" name="Blog" />
          <BlogDetails />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default BlogSinglePage;
