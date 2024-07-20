import React from "react";
import { HomeIcon, MailIcon, ProjectsIcon, LinkedinIcon, GitIcon } from "../assets/svgComponents";
import { IAbout, IButton, IProjectsInfos, ISidebarLink, ISkills } from "./types";
import { TFunction } from 'i18next';

export const sidebarLinks: ISidebarLink[] = [
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
  
export const sidebarBottomLinks: ISidebarLink[] = [
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

export  const buttonsInfos = (t: TFunction): IButton[] => [
    {name: t('about'), link: '/', id: "about"},
    {name: t('projects'), link: '/mesprojets', page: 'projects'},
];

export const projectsInfos= (t: TFunction):  IProjectsInfos[] => [
    { 
        name: 'OPX', 
        description: t('opx'), 
        stacks: [ 'REACT', 'TYPESCRIPT'],
        pictures: ['images/opxdashboard.png', 'images/opx1.png', 'images/opx2.png', 'images/opx3.png', 'images/opx4.png'],
        video: '',
        link: 'https://www.opx.co/'
    },
    { 
        name: 'Drapo Solution', 
        description: t('drapo'), 
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
        name: 'Villa Calm', 
        description: t('villacalm'), 
        stacks: [ 'REACT', 'TYPESCRIPT', 'NODE JS'],
        pictures: ['images/villacalm.png', 'images/villacalm1.png', 'images/villacalm2.png', 'images/villacalm3.png', 'images/villacalm4.png'],
        video: '',
        link: 'https://villa-calm.vercel.app/'
    },
    { 
        name: 'Tikok Production', 
        description: t('tikok'), 
        stacks: [ 'WORDPRESS'],
        pictures: ['images/tikokproduction.png', 'images/tikok1.png', 'images/tikok2.png'],
        video: '',
        link: 'https://tikokproduction.com'
    },
    { 
        name: 'Ma plus belle toile', 
        description: t('maplusbelletoile'),
        stacks: [ 'WIX', 'E-COMMERCE'],
        pictures: ['images/maplusbelletoile.png', 'images/maplusbelletoile1.png', 'images/maplusbelletoile2.png', 'images/maplusbelletoile3.png', 'images/maplusbelletoile4.png'],
        video: '',
        link: 'https://www.maplusbelletoile.com'
    },
    { 
        name: 'Memories', 
        description: t('memories'),
        stacks: [ 'REACT NATIVE', 'NODE.JS'],
        pictures: ['images/memories.png', 'images/memories1.png', 'images/memories2.png', 'images/memories3.png', 'images/memories4.png'],
        video: 'images/memories.mp4',
        link: 'https://github.com/charlie-boudou/memories-frontend'
    },
];

export const about = (t: TFunction): IAbout[] => [
    {
      name: "me",
      description: t('aboutMe'),
    },
    {
      name: 'history',
      description: t('myHistory'),
    },
    {
        name: 'why',
        description: t('whyMe'),
    },
];

export const skills = (t: TFunction): ISkills[] => [
    {
        name: t('technicalSkills'),
        description: [
            {
                name: t('progLang'),
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
                name: t('tools'),
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
                name: t('methodologies'),
                list: [
                    t('scrum'),
                    'RESPONSIVE DESIGN',
                    t('accessWeb'),
                ]
            },
        ],
    },
    {
      name: t('values'),
      description: [
        {
            name: t('qualPerf'),
            description: t('qualPerfDesc'),
        },
        {
            name: t('accessibility'),
            description: t('accessDesc'),
        },
        {
            name: t('collaboration'),
            description: t('collabDesc'),
        },
        {
            name: t('innovation'),
            description: t('innovDesc'),
        },
      ],
    },
];

