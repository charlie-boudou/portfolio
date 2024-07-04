export interface IThemeState {
    isToggle: boolean;
    backgroundColor: string;
    icon: string;
    backgroundSidebar: string;
    activeIcon: string;
    textColor: string;
    textProjectButton: string;
    textContact: string;
}
  
export type ISidebarLink = {
    name: string;
    icon: JSX.Element;
    link: string;
};

export type IButton = {
    name: string;
    link: string;
    page?: string;
    id?: string;
};

export type IProjectCard = {
    key: string;
    content: JSX.Element;
}

export type IProjectsInfos = {
    name: string;
    description: string;
    stacks: string[];
    pictures: string[];
    video: string;
    link: string;
}

export type IAbout = {
    name: string;
    description: string;
}

export type ITechnicalSkills = {
    name: string;
    list: string[];
}

export type ISkills = {
    name: string;
    description: IAbout[] | ITechnicalSkills[];
}