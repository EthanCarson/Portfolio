export type Project = {
  CardImage: string;
  HCaption: string;
  SCaption: string;
  ImgAlt: string;
  Video?: string;
  Description?: string;
  Link: string;
  HImage: string;
  Heading: string;
};

export type Highlight = {
  CardImage: string;
  HCaption: string;
  ImgAlt: string;
  Link?: string;
};

export type Interest = {
  image: string;
  ImgAlt: string;
  Description: string;
};
// Update to use `Record<string, T>` for dynamic keys
export type Data = {
  Projects: Record<string, Project>;
  Highlights: Record<string, Highlight>;
  Interests: Record<string, Interest>;
};
