"use client";

import { useRouter } from "next/navigation";
// import Link from "next/link";
import { useLocale } from "next-intl";
// @ts-ignore
import Cookies from "js-cookie";

const LanguageSwitcher = () => {
  const router = useRouter();
  const currentLocale = useLocale();

  const changeLanguage = (lang: string) => {
    Cookies.set("locale", lang, { expires: 365 }); // Store locale in cookies
    router.refresh(); // Refresh the page to apply the new locale
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLanguage("en")}
        className={currentLocale === "en" ? "nav-link-selected-text" : "nav-link-text"}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("uk")}
        className={currentLocale === "uk" ? "nav-link-selected-text" : "nav-link-text"}
      >
        УКР
      </button>
    </div>
  );
};

export default LanguageSwitcher;
