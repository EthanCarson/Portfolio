import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { Project } from '../../components/DataTypes'
import fs from 'fs'
import path from 'path'

// Function to get all project slugs from the data file
export const getStaticPaths: GetStaticPaths = async () => {
  const data = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), 'data', 'data.json'), 'utf-8')
  )

  // Collect all the paths for projects across the different categories
  const paths = []

  // Iterate over each category in the 'Projects' section
  for (const category in data.Projects) {
    // For each project within the category
    for (const projectSlug in data.Projects[category]) {
      paths.push({
        params: { project: projectSlug }, // Use the project name as the dynamic part
      })
    }
  }

  return {
    paths,
    fallback: false, // or 'blocking' depending on your preference for SSR
  }
}

// Function to fetch project data based on the slug
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { project } = params as { project: string }
  const data = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), 'data', 'data.json'), 'utf-8')
  )

  // Find the project by the dynamic 'project' slug
  const projectData = data.Projects[project]

  if (!projectData) {
    return {
      notFound: true, // If project data doesn't exist, return a 404
    }
  }

  return {
    props: {
      project: projectData,
    },
  }
}

interface ProjectPageProps {
  project: Project
}

const ProjectPage = ({ project }: ProjectPageProps) => {
  const {
    CardImage,
    HCaption,
    SCaption,
    ImgAlt,
    Link,
    Header,
    Head1,
    PageDesc,
    Secondary,
  } = project

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
  )
}

export default ProjectPage
