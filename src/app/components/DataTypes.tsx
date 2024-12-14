export type Project = {
  CardImage: string;
  HCaption: string;
  SCaption: string;
  ImgAlt: string;
  Link: string;
  Video?: string; // Optional field for video
  Description?: string; // Optional description field
};

export type Highlight = {
  CardImage: string;
  HCaption: string;
  SCaption?: string;
  ImgAlt: string;
  Link?: string; // Optional link
};

export type Interest = {
  image: string;
  ImgAlt: string;
  Description: string;
};

// Update to use `Record<string, T>` for dynamic keys
export type Data = {
  Projects: Record<string, Record<string, Project>>; // Projects is now a nested record (category -> project)
  Highlights: Record<string, Highlight>; // Highlights is a simple record
  Interests: Record<string, Interest>; // Interests is a simple record
};
