"use client";
import React from "react";
import "../../../../styles/About.css";

import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="w-screen bg-background text-textColor h-auto min-h-screen"
    >
      <div className="flex flex-col gap-5 p-10 text-2xl items-center leading-9">
        <div className="w-[50%] flex flex-col gap-5">
          <h2 className="text-4xl font-semibold">{t("common:about-us")}</h2>
          <p>{t("about-us:intro")}</p>
          <p>{t("about-us:products_overview")}</p>
          <p>{t("about-us:mission_statement")}</p>
          <p>{t("about-us:company_history")}</p>
          <p>{t("about-us:commitment")}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
