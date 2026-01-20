export interface INavbarItems {
  name: string;
  link?: string;
  dropdown?: INavbarItems[];
}

export interface IHeroImages {
  src: string;
  alt: string;
}

export interface IWhyChooseUs {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

export interface IDestinationCard {
  id : number 
  src: string;
  alt: string;
  title: string;
  tours: string | number;
}
