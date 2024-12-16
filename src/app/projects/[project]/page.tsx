import fs from "fs";
import path from "path";
import Image from "next/image";
import { Project } from "../../components/DataTypes";

interface ProjectPageProps {
  project: Project;
}

const ProjectPage = async ({ params }: { params: { project: string } }) => {
  const { project } = params;

  // Fetching the data directly inside the async function
  const data = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "data", "data.json"), "utf-8")
  );

  // Finding the project data by the dynamic 'project' slug
  const projectData = data.Projects[project];

  if (!projectData) {
    return <div>Project not found</div>; // Handle project not found
  }

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
  } = projectData;

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
export async function generateProjectPaths() {
  const data = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "data", "data.json"), "utf-8")
  );

  const paths = [];

  // Iterate over the categories and projects to generate paths
  for (const category in data.Projects) {
    for (const projectSlug in data.Projects[category]) {
      paths.push({
        params: { project: projectSlug } // Use the project key as the dynamic part
      });
    }
  }

  return paths;
}

export default ProjectPage;
