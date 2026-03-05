export interface Filters {
    [key: string]: { options: string[]; current: string };
}

export type siteMapItem = {
  name: string;
  link: string;
};