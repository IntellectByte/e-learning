import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      pt: {
        translation: {
          "navHome": "Començar",
          "navCourses": "Cursos",
          "navLogin/Register": "Entre/Cadastre-se",
          "navInstructor": "Instrutor"
      },
      },
      en: {
        translation: {
          "navHome": "Home",
          "navCourses": "Courses",
          "navLogin/Register": "Login/Register",
          "navInstructor": "Instructor"
      },
      },
      es: {
        translation: {
          "navHome": "Inicio",
          "navCourses": "Cursos",
          "navLogin/Register": "Entra/Registrate",
          "navInstructor": "Instructor"
      },
      },
    },
  });

export default i18n;


