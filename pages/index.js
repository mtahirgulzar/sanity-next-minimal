import FAQ from "../components/FAQ";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import TextWithImage from "../components/TextWithImage";
import { pageQuery } from "../lib/queries";
import { sanityClient } from "../lib/sanity";

const Index = ({ pageData }) => {
  // console.log("===>>> page data is here", pageData);

  return (
    <>
      {pageData?.content?.map((section, idx) => {
        if (!section || Object.keys(section).length === 0) {
          return null;
        }
        return (
          <section key={idx}>
            {section._type === "hero" && <Hero data={section} />}
            {section._type === "textWithImage" && <TextWithImage data={section} />}
            {section._type === "features" && <Features data={section} />}
            {section._type === "faqs" && <FAQ data={section} />}
            {section._type === "footer" && <Footer data={section} />}
          </section>
        );
      })
      }
    </>
  );
};

export const getStaticProps = async () => {
  const pageData = await sanityClient.fetch(pageQuery, {
    slug: "home",
  });

  if (!pageData) {
    return {
      notFound: true,
    };
  }

  return { props: { pageData }, revalidate: 60 };
};

export default Index;
