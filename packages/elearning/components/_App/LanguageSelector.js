import React from "react";
import i18n from "../../i18n";
import { Us, Es, Pt } from "react-flags-select"

const LanguageSelector = ({ language, changeLanguage }) => {
  const handleClick = (lng) => {
    i18n.changeLanguage(lng);
    if (typeof changeLanguage === "function") {
      changeLanguage(lng);
    }
  };
  return (
    <div>
      <button onClick={() => handleClick('en')} disabled={language === 'en'}><Us/></button>
      <button onClick={() => handleClick('es')} disabled={language === 'es'}><Es/></button>
      <button onClick={() => handleClick('pt')} disabled={language === 'pt'}><Pt/></button>
    </div>
  );
};

export default LanguageSelector;
