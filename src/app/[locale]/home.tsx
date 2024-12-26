"use client";
import "../../index.css";
import { useTranslation } from "react-i18next";
import { createClient } from "../../utils/supabase/client";
import { useState } from "react";
import { User } from "@supabase/supabase-js";
const Homepage = () => {
  const { t } = useTranslation();

  const [user, setUser] = useState<User | null>(null);

  const { auth } = createClient();

  auth.onAuthStateChange((event, session) => {
    setUser(session?.user ?? null);
  });

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
                  {typeof user.email === "string"
                    ? user.email
                        ?.toUpperCase()
                        .slice(0, user.email.indexOf("@"))
                    : ""}
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
