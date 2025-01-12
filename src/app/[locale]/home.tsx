"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { createClient } from "../../utils/supabase/client";
import { useState } from "react";
import { User } from "@supabase/supabase-js";
import "../../index.css";
const Homepage = () => {
  const { t } = useTranslation();

  const [user, setUser] = useState<User | null>(null);

  const { auth } = createClient();

  auth.onAuthStateChange((event, session) => {
    setUser(session?.user ?? null);
  });

  return (
    <section id="home">
      <div className="min-h-screen max-w-screen md:min-h-[85vh] bg-background text-textColor flex items-center justify-center overflow-hidden px-4 sm:px-8">
        <div className="font-semibold text-center">
          <h1 className="font-poppins mb-5 text-3xl sm:text-4xl lg:text-5xl text-textColor leading-snug">
            {t("welcomeHeader")}
          </h1>
          {user ? (
            <>
              <p className="text-lg sm:text-xl lg:text-2xl text-textColor leading-relaxed">
                {t("welcome")}{" "}
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
