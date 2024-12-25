"use client";
import LoadingSpinner from "../components/Loader";
import "../../index.css";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useTranslation } from "react-i18next";
import { createClient } from "../../utils/supabase/client";

const Homepage = () => {
  const { user, isLoading } = useUser();
  const { t } = useTranslation();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  console.log(createClient());

  return (
    <section id="home">
      <div className="min-h-screen md:min-h-[85vh] bg-background text-textColor flex items-center justify-center overflow-hidden w-screen px-4 sm:px-8">
        <div className="font-semibold text-center">
          <h1 className="font-poppins mb-5 text-3xl sm:text-4xl lg:text-5xl text-textColor leading-snug">
            {t("welcomeHeader")}
          </h1>
          {user ? (
            <>
              <p className="text-lg sm:text-xl lg:text-2xl text-textColor leading-relaxed">
                {t("welcome")}{" "}
                <strong className="highlight">
                  {typeof user.given_name === "string"
                    ? user.given_name?.toUpperCase()
                    : ""}
                </strong>
                ! {t("welcomeSubHeader")}
              </p>
            </>
          ) : (
            <p className="text-lg sm:text-xl lg:text-2xl text-textColor leading-relaxed">
              You are not logged in.
            </p>
          )}
          <p className="mt-2 text-lg sm:text-xl lg:text-2xl text-textColor leading-relaxed">
            {t("welcomeService")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
