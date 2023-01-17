import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const translationEn = {
  about_me: "About Me",
  copyright: "Copyright © Michelle - Xiao Xiao. All Right Reserved",
  experience: "Experience",
  education: "Education",
  projects: "Projects",
  contact_me: "Contact Me",
  zed_network: "Zed Network",
  wemi_technologies: "WEMI Technologies",
  zod_tv: "Zod Tv",
  zed_network_client_portal: "Zed Network Client Portal",
  wemi_technologies_client_portal: "WEMI Business Portal",
  zod_tv_landing_page: "Zod Tv Landing Page",
  university_of_toronto: "University of Toronto",
  seneca_college: "Seneca College",
  slogan: "Great user interfaces build our lives",
  introduction: "Hi, this is Michelle. A <strong> full stack developer </strong> with <strong>2+ years </strong>of experience. My passion for exploring programming principles and cutting-edge technologies makes me a great developer who builds optimal-performance projects. <br><br> Meanwhile, <strong> efficient communication </strong> with tech and non-tech persons helps me to accurately understand client needs hence composing effective code with proper foundations.",
  At: "At",
  Details: "Details",
  freelance_developer: "Freelance Developer",
  full_stack_developer: "Full Stack Developer",
  front_end_developer: "Front End Developer",
  zed_time: "June 2021 - Present",
  wemi_time: "January 2021 - May 2021",
  zod_time: "May 2021 - June 2021",
  zed_job_desc: "The main front-end developer builds the client portal, test progress portal, and API doc (International Payment Platform). The assistant backend developer contributed to the development of  APIs consumed by the API clients and front end.",
  zed_duty_1: "<strong>Build</strong> and maintain core front-end modules including currency exchange, international payments, beneficiary management, payout partner management by React (Gatsby), and Redux.",
  zed_duty_2: "<strong>Integrate</strong> and dynamically handle different payout partners to optimize the performance of the webpage and user experience. ",
  zed_duty_3: "<strong>Contributed</strong> to API development and debugging.",
  zed_duty_4: "<strong>Involved</strong> in UI and user flow design to improve user experience and product performance.",
  zed_duty_5: "<strong>Implemented</strong> Slackbot automated messages to the system, in order to monitor client activities.",
  zed_skills: "JavaScript, <br>Python, <br>Gatsby, <br>Django, <br>Redux, <br>MongoDB, <br>Material UI, <br>PostgreSQL, <br>Gitlab, <br>Rest API, <br>Styled Component",
  wemi_job_desc: "Worked as a solo front-end developer to rebuild client portal (Booking and Workflow Management Application). ",
  wemi_duty_1: "<strong>Designed</strong> and conducted new architecture to fully adapt backend changes and new features.",
  wemi_duty_2: "<strong>Build</strong> and maintain core front-end modules including Appointment Booking and Workflow Management using React.",
  wemi_duty_3: "<strong>Collaborate</strong> with backend developers to identify data structure and API needs.",
  wemi_skills: "JavaScript, <br>ExpressJS, <br>React, <br>Redux, <br>Bootstrap, <br>MongoDB, <br>SCSS, <br>Github",
  zod_job_desc: "The solo developer rebuilt the landing page of ZodTv.",
  zod_duty_1: "<strong>Rebuilt</strong> landing page using NextJS.",
  zod_duty_2: "<strong>Communicate</strong> with the designer and client to achieve a pixel-perfect product.",
  zod_skills: "NextJs, <br>Netlify, <br>Bootstrap, <br>GitLab, <br>SCSS",
  job_description: "Job description",
  duties: "Duties",
  skills: "Skills",
  bachelor_of_science: "Bachelor of Science",
  honours_degree: "Honours Degree",
  diploma_of_computer_programming: "Diploma of Computer Programming",
  gpa: "Accelerated GPA: 3.7",

}

const translationFr = {
  about_me: "A propos de moi",
  copyright: "Copyright © Michelle - Xiao Xiao. Tous droits réservés",
  experience: "De l'expérience",
  education: "De l'éducation",
  projects: "Projets",
  contact_me: "Contactez moi",
  zed_network: "Zed Network",
  wemi_technologies: "WEMI Technologies",
  zod_tv: "Zod Tv",
  zed_network_client_portal: "Portail clients de Zed Network",
  wemi_technologies_client_portal: "Portail entreprise de WEMI",
  zod_tv_landing_page: "Page de destination des Zod Tv",
  university_of_toronto: "Université de Toronto",
  seneca_college: "Collège de Seneca",
  slogan: "De superbes interfaces utilisateur construisent nos vies",
  introduction: "Salut, c'est Michelle. Un <strong> développeur full stack </strong> avec <strong> plus de 2 ans d'expérience </strong>. Ma passion pour l'exploration des principes de programmation et des technologies de pointe fait de moi un excellent développeur qui construit des projets aux performances optimales. Pendant ce temps, une <strong> communication efficace </strong> avec des personnes techniques et non techniques m'aide à comprendre avec précision les besoins des clients, composant ainsi un code efficace avec des bases appropriées.",
  At: "Le détails",
  freelance_developer: "Développeur indépendant",
  full_stack_developer: "Développeur full stack",
  front_end_developer: "Développeur frontal",
  zed_time: "Juin 2021 - Présent",
  wemi_time: "Janvier 2021 - Mai 2021",
  zod_time: "Mai 2021 - Juin 2021",
  zed_job_desc: "Le principal développeur front-end construit le portail client, le portail de progression des tests et la documentation API (plate-forme de paiement internationale). L'assistant développeur backend a contribué au développement des API consommées par les clients API et le front end.",
  zed_duty_1: "Créez et <strong>maintenez des modules frontaux de base, y compris le change de devises, les paiements internationaux, la gestion des bénéficiaires, la gestion des partenaires de paiement par React (Gatsby) et Redux.",
  zed_duty_2: "<strong>Intégrez</strong> et gérez dynamiquement différents partenaires de paiement pour optimiser les performances de la page Web et l'expérience utilisateur.",
  zed_duty_3: "<strong>Contribution</strong> au développement et au débogage de l'API.",
  zed_duty_4: "<strong>Impliqué</strong> dans la conception de l'interface utilisateur et du flux d'utilisateurs pour améliorer l'expérience utilisateur et les performances du produit.",
  zed_duty_5: "<strong>Implémentation</strong> des messages automatisés Slackbot dans le système, afin de surveiller les activités des clients.",
  zed_skills: "JavaScript, <br>Python, <br>Gatsby, <br>Django, <br>Redux, <br>MongoDB, <br>Material UI, <br>PostgreSQL, <br>Gitlab, <br>Rest API",
  wemi_job_desc: "A travaillé en tant que développeur front-end solo pour reconstruire le portail client (application de gestion des réservations et des flux de travail).",
  wemi_duty_1: "<strong>Conception</strong> et réalisation d'une nouvelle architecture pour adapter pleinement les modifications du backend et les nouvelles fonctionnalités.",
  wemi_duty_2: "<strong>Créez</strong> et maintenez des modules frontaux de base, y compris la prise de rendez-vous et la gestion des flux de travail à l'aide de React.",
  wemi_duty_3: "<strong>Collaborer</strong> avec les développeurs backend pour identifier la structure des données et les besoins en API.",
  wemi_skills: "JavaScript, <br>ExpressJS, <br>React, <br>Redux, <br>Bootstrap, <br>MongoDB, <br>SCSS",
  zod_job_desc: "Le développeur solo a reconstruit la page de destination de ZodTv.",
  zod_duty_1: "<strong>Page</strong> de destination reconstruite à l'aide de NextJS.",
  zod_duty_2: "<strong>Communiquez</strong> avec le designer et le client pour obtenir un produit au pixel près.",
  zod_skills: "NextJs, <br>Netlify, <br>Bootstrap, <br>GitLab, <br>SCSS",
  job_description: "Description de l'emploi",
  duties: "Obligations",
  skills: "Capacités",
  bachelor_of_science: "Licence en Sciences",
  honours_degree: "Baccalauréat Spécialisé",
  diploma_of_computer_programming: "Diplôme de Programmation Informatique",
  gpa: "GPA accéléré: 3.7",

}

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: 'en',
    debug: true,
    fallbackLng: ['en', 'fr'],
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: { translation: translationEn },
      fr: { translation: translationFr }
    }
  });

export default i18n;