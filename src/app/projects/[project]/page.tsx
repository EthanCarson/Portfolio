import fs from "fs";
import path from "path";
import Image from "next/image";
import { Project } from "../../components/DataTypes";

interface ProjectPageProps {
  project: Project;
}

const ProjectPage = async ({
  params
}: {
  params: { projectCategory: string; project: string };
}): Promise<JSX.Element> => {
  const { projectCategory, project } = params;

  // Fetch the project data from the JSON file
  const data: { Projects: Record<string, Record<string, Project>> } =
    JSON.parse(
      fs.readFileSync(path.join(process.cwd(), "data", "data.json"), "utf-8")
    );

  // Validate the category and project existence
  const categoryData = data.Projects[projectCategory];
  if (!categoryData) {
    return <div>Project category not found</div>; // Handle category not found
  }

  const projectData = categoryData[project];
  if (!projectData) {
    return <div>Project not found</div>; // Handle project not found
  }

  // Create the props object using the ProjectPageProps interface
  const pageProps: ProjectPageProps = { project: projectData };

  // Destructure project properties from pageProps
  const {
    CardImage,
    HCaption,
    SCaption,
    ImgAlt,
    Link,
    Header,
    Head1,
    PageDesc,
    Secondary
  } = pageProps.project;

  return (
    <div>
      <header>
        {Header && <Image src={Header} alt="Header Image" />}
        <h1>{Head1}</h1>
      </header>
      <main>
        <section>
          {HCaption && <h2>{HCaption}</h2>}
          {SCaption && <p>{SCaption}</p>}
          {PageDesc && <div>{PageDesc}</div>}
          {Link && (
            <a href={Link} target="_blank" rel="noopener noreferrer">
              View the Project
            </a>
          )}
        </section>

        {Secondary && (
          <section className="secondary">
            {Secondary.PageH1 && <h2>{Secondary.PageH1}</h2>}
            {Secondary.Img1 && <Image src={Secondary.Img1} alt=" " />}
            {Secondary.Img2 && <Image src={Secondary.Img2} alt=" " />}
            {Secondary.Img3 && <Image src={Secondary.Img3} alt=" " />}
            {Secondary.Img4 && <Image src={Secondary.Img4} alt=" " />}
            {Secondary.LegalNotice && <div>{Secondary.LegalNotice}</div>}
          </section>
        )}

        {CardImage && <Image src={CardImage} alt={ImgAlt} />}
      </main>
    </div>
  );
};

// Function to generate dynamic paths for all projects
export async function generateStaticPaths() {
  const data: { Projects: Record<string, Record<string, Project>> } =
    JSON.parse(
      fs.readFileSync(path.join(process.cwd(), "data", "data.json"), "utf-8")
    );

  // Generate paths for each project under each category
  const paths = Object.entries(data.Projects).flatMap(
    ([categoryKey, projects]) =>
      Object.keys(projects).map((projectKey) => ({
        params: { projectCategory: categoryKey, project: projectKey }
      }))
  );

  return { paths, fallback: false }; // Next.js expects this format
}

export default ProjectPage;
