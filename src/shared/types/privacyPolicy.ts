export type SectionTypes = {
  title: string;
  text?: string;
  list?: string[];
  addItem?: boolean;
};

type NestedItem = {
  item: string;
  subItems: string[];
};

export type NestedListTypes = {
  title: string;
  items: NestedItem[];
};
