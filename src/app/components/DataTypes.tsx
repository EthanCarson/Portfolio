export type Project = {
  CardImage: string;
  HCaption: string;
  SCaption: string;
  ImgAlt: string;
  Link: string;
  Video?: string; // Optional field for video
  Description?: string; // Optional description field
  Header?: string; // Optional header field
  Head1?: string; // Secondary header for details
  PageDesc?: string; // Page description field
  Secondary?: {
    PageH1?: string; // Optional H1 for secondary details
    Img1?: string; // Optional image for secondary details
    Img2?: string; // Optional image for secondary details
    Img3?: string; // Optional image for secondary details
    Img4?: string; // Optional image for secondary details
    LegalNotice?: string; // Optional legal notice field
  };
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
  Projects: Record<
    string,
    Record<
      string,
      Project & {
        PageH1?: string; // Top-level PageH1 field for nested projects
        LegalNotice?: string; // Top-level LegalNotice field
      }
    >
  >; // Projects is now a nested record (category -> project)
  Highlights: Record<string, Highlight>; // Highlights is a simple record
  Interests: Record<string, Interest>; // Interests is a simple record
};
