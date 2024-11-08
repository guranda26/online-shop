import React from "react";
import initTranslations from "../../../i18n";
import TranslationsProvider from "../../../components/TranslationsProvider";
import "../../../../styles/About.css";
// import { useTranslation } from "react-i18next";

const About = async (params) => {
  const locale = params?.locale || "en";
  const { resources } = await initTranslations(locale, ["about-us"]);

  // const { t } = useTranslation();
  return (
    <section id="about" className="w-screen bg-background text-textColor">
      <div className="h-screen flex flex-col gap-5 p-10 text-2xl items-center leading-9">
        <div className="w-[50%] flex flex-col gap-5">
          <h2 className="text-4xl font-semibold">About Us</h2>
          <p>
            {/* Welcome to our website, your one-stop destination for the latest and
            most reliable electronic devices. */}
            {/* {resources["about-us"]?.intro} */}
          </p>
          <p>
            {" "}
            From cutting-edge smartphones and tablets to high-performance
            laptops, gaming consoles, and smart home accessories, we offer a
            diverse range of products to meet all your tech needs.
          </p>
          <p>
            At our shop, we are passionate about innovation and quality. We
            carefully select each item in our inventory to ensure it reflects
            the best in technology and design. Whether you’re a tech enthusiast,
            a professional, or simply looking for the perfect gadget, our
            extensive collection has something for everyone.
          </p>
          <p>
            Our company was founded with a mission to offer high-quality
            products and services. With over 10 years of experience, we have
            built a reputation for excellence.
          </p>
          <p>
            Our commitment goes beyond just selling products. We pride ourselves
            on exceptional customer service, providing expert advice and
            after-sales support to ensure you get the most out of your
            purchases. With fast, reliable shipping and secure payment options,
            shopping with us is convenient and hassle-free. Join us in staying
            ahead of the tech curve and discover how we can help to elevate your
            digital experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
