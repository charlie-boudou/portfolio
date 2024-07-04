import React from "react";
import { HomeIcon, MailIcon, ProjectsIcon, LinkedinIcon, GitIcon } from "../assets/svgComponents";
import { IAbout, IButton, IProjectsInfos, ISidebarLink, ISkills } from "./types";

export const sidebarLinks = (): ISidebarLink[] => [
    {
      icon: <HomeIcon />,
      name: 'home',
      link: '/',
    },
    {
      icon: <ProjectsIcon />,
      name: 'projects',
      link: '/mesprojets',
    },
    {
      icon: <MailIcon />,
      name: 'contact',
      link: '/contact',
    },
];
  
export const sidebarBottomLinks = (): ISidebarLink[] => [
    {
      icon: <LinkedinIcon />,
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/charlie-boudou-7a8a051b7',
    },
    {
      icon: <GitIcon />,
      name: 'git',
      link: 'https://github.com/charlie-boudou',
    },
];

export  const buttonsInfos: IButton[] = [
    {name: "À PROPOS", link: '/', id: "about"},
    {name: "MES PROJETS", link: '/mesprojets', page: 'projects'},
];

export const projectsInfos: IProjectsInfos[] = [
    { 
        name: 'OPX', 
        description: "OPX est une plateforme SaaS innovante conçue pour gérer les Certificats d'Économies d'Énergie (CEE). Elle centralise toutes les informations nécessaires pour les artisans, les mandataires, et les obligés impliqués dans les projets de rénovation énergétique. OPX permet de simuler des primes, créer des dossiers conformes, suivre l’avancement des projets, contrôler les documents légaux et prévenir les fraudes. En offrant des outils sophistiqués et une interface conviviale, OPX simplifie la gestion des CEE et améliore l'efficacité et la transparence dans le secteur de la rénovation énergétique.", 
        stacks: [ 'REACT', 'TYPESCRIPT'],
        pictures: ['images/opxdashboard.png', 'images/opx1.png', 'images/opx2.png', 'images/opx3.png', 'images/opx4.png'],
        video: '',
        link: 'https://www.opx.co/'
    },
    { 
        name: 'Drapo Solution', 
        description: "Drapo propose des solutions de financement pour les projets de rénovation énergétique, en intégrant les primes dans les devis et offrant un accompagnement expert à leurs partenaires pour faciliter la transition énergétique. En tant que développeuse front-end chez Drapo, j'ai contribué au développement de leur espace pro, une plateforme dédiée à la gestion et au suivi des dossiers et des primes, permettant une gestion efficace et transparente des projets de rénovation énergétique.", 
        stacks: [ 'REACT', 'TYPESCRIPT'],
        pictures: ['images/draposolution.png', 'images/drapo1.png', 'images/drapo2.png', 'images/drapo3.png'],
        video: 'images/simulationDrapo.mp4',
        link: 'https://www.drapo.com/'
    },
    /*{ 
        name: 'Drapo Career', 
        description: 'lalalal bidule', 
        stacks: [ 'REACT', 'TYPESCRIPT', 'GATSBY'],
        pictures: ['https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png', ''],
        video: '',
        link: ''
    },
    */
    { 
        name: 'Tikok Production', 
        description: "tikokproduction.com est un site vitrine professionnel créé avec WordPress pour une société de production. Le site met en avant les divers projets sur lesquels l'entreprise a travaillé, offrant une présentation claire et détaillée de leurs réalisations. Grâce à un design élégant et une navigation intuitive, les visiteurs peuvent explorer les différents projets et obtenir des informations complètes sur les services offerts par Tikok Production.", 
        stacks: [ 'WORDPRESS'],
        pictures: ['images/tikokproduction.png', 'images/tikok1.png', 'images/tikok2.png'],
        video: '',
        link: 'https://tikokproduction.com'
    },
    { 
        name: 'Ma plus belle toile', 
        description: "maplusbelletoile.com est un site web élégant et fonctionnel, réalisé avec Wix, qui présente et vend les œuvres d'art et les reproductions de l'artiste Morgane Monnet. Le site offre une galerie en ligne bien organisée avec des images haute résolution et des descriptions détaillées des créations, permettant aux visiteurs de découvrir et d'apprécier le travail de l'artiste. Grâce à une boutique en ligne intégrée, les utilisateurs peuvent facilement acheter des œuvres d'art avec des options de paiement sécurisées.", 
        stacks: [ 'WIX', 'E-COMMERCE'],
        pictures: ['images/maplusbelletoile.png', 'images/maplusbelletoile1.png', 'images/maplusbelletoile2.png', 'images/maplusbelletoile3.png', 'images/maplusbelletoile4.png'],
        video: '',
        link: 'https://www.maplusbelletoile.com'
    },
    { 
        name: 'Memories', 
        description: "Memories est un projet de fin de formation qui s'est concentré sur le développement d'une application mobile hybride en React Native et Node.js, conçue pour simplifier et enrichir l'expérience de voyage. Nous avons développé une solution innovante qui centralise la planification de voyage. L' application offre une gestion intégrée des réservations d'hébergement, des locations de voiture, et des billets d'avion, ainsi que du budget de voyage. Mais ce n'est pas tout : elle permet également aux utilisateurs de créer et de conserver des carnets de voyage personnalisés, enrichis de photos et de légendes. L'originalité de notre application réside dans sa capacité à regrouper toutes les informations essentielles pour un voyage au même endroit. Elle permet aux utilisateurs de capturer et de partager leurs souvenirs de manière vivante, simplifiant ainsi l'organisation de leurs aventures à venir.", 
        stacks: [ 'REACT NATIVE', 'NODE.JS'],
        pictures: ['images/memories.png', 'images/memories1.png', 'images/memories2.png', 'images/memories3.png', 'images/memories4.png'],
        video: 'images/memories.mp4',
        link: 'https://github.com/charlie-boudou/memories-frontend'
    },
];

export const about: IAbout[] = [
    {
      name: "me",
      description: "Moi c'est Charlie, développeuse front-end passionnée par la création d'expériences utilisateur intuitives, dynamiques et esthétiquement plaisantes. Depuis mes débuts dans le développement web, je me suis spécialisée en React et TypeScript, deux technologies puissantes qui me permettent de concevoir des interfaces utilisateur modernes et robustes.",
    },
    {
      name: 'history',
      description: "Mon aventure dans le développement web a commencé en 2020, lorsque j'ai découvert ma passion pour la programmation et la création de sites web. Après avoir suivi plusieurs formations intensives et obtenu des certifications reconnues, j'ai eu l'opportunité de travailler sur divers projets, allant de petites applications web à des plateformes complexes.",
    },
    {
        name: 'why',
        description: "Avec une solide expérience en React et TypeScript, couplée à une passion pour l'innovation et la qualité, je suis convaincue que je peux apporter une réelle valeur ajoutée à vos projets. Mon approche centrée sur l'utilisateur, ma rigueur professionnelle et ma capacité à travailler en équipe font de moi une partenaire idéale pour vos besoins en développement front-end.",
    },
];

export const skills: ISkills[] = [
    {
        name: 'Compétences techniques',
        description: [
            {
                name: "Langages de Programmation",
                list: [
                    'JAVASCRIPT',
                    'TYPESCRIPT',
                ]
            },
            {
                name: "Frameworks",
                list: [
                    'REACTS JS',
                    'REACT NATIVE',
                    'NODE.JS',
                    'JQUERY',
                    'VUEJS',
                    'REDUX',
                ]
            },
            {
                name: "Outils et Technologies",
                list: [
                    'HTML5, CSS3 (Sass, CSS Modules)',
                    'BOOTSTRAP/TAILWIND',
                    'WEBPACK/BABEL',
                    'GIT/GITHUB',
                    'JEST/PLAYWRIGHT/CYPRESS',
                    'STORYBOOK',
                    'WORDPRESS',
                    'GATSBY',
                ]
            },
            {
                name: "Méthodologies ",
                list: [
                    'DÉVELOPPEMENT AGILE/SCRUM',
                    'RESPONSIVE DESIGN',
                    'ACCESSIBILITÉ WEB',
                ]
            },
        ],
    },
    {
      name: 'Mes valeurs',
      description: [
        {
            name: "Qualité et Performance",
            description: "Je m'engage à écrire un code propre, maintenable et performant.",
        },
        {
            name: "Accessibilité",
            description: "Je veille à ce que mes créations respectent les standards d'accessibilité.",
        },
        {
            name: "Collaboration",
            description: "Le travail d'équipe est essentielle pour créer des produits web de qualité.",
        },
        {
            name: "Innovation",
            description: "Je suis toujours à l'affût des nouvelles tendances et outils.",
        },
      ],
    },
];

