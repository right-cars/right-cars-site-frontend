type Link = {
  href: string;
  name: string;
};

export type Answer = {
  link?: Link;
  txt?: string;
  lists?: {
    numbering?: boolean;
    title?: string;
    items: {
      bold?: string;
      txt: string;
      link?: Link;
    }[];
  }[];
};