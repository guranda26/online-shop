"use client";
import LoadingSpinner from "../components/Loader";
import "../../index.css";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useTranslation } from "react-i18next";

const Homepage = () => {
  const { user, isLoading } = useUser();
  const { t } = useTranslation();

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <section id="home">
      <div className="min-h-[85vh] bg-background text-textColor flex items-center justify-center overflow-hidden w-screen">
        <div className="font-semibold">
          <h1 className="font-poppins mb-5 text-5xl text-textColor">
            {t("welcomeHeader")}
          </h1>
          {user ? (
            <>
              <p className="home-txt text-2xl text-textColor">
                {t("welcome")}
                <strong className="highlight">
                  {user.given_name.toUpperCase()}
                </strong>
                ! {t("welcomeSubHeader")}
              </p>
            </>
          ) : (
            <p className="text-2xl text-textColor">You are not logged in.</p>
          )}
          <p className="mt-2 text-2xl text-textColor">{t("welcomeService")}</p>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
