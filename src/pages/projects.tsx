import ProjectCard from '@/components/ProjectCard'
import { NextPage } from 'next'
import { InferGetStaticPropsType } from 'next'
import projects from '../../data/projects.json'

const Projects: NextPage<null> = ({ projects }: getStaticPropsType) => {
  return (
    <div className='mt-10'>
      <p className='text-2xl sm:text-4xl font-bold'>My Projects</p>
      <div className='mt-5 flex flex-wrap'>
        {projects.items.map((project) => (
          <div key={project.id} className='w-full md:w-1/2 sm:pr-4 mb-5 '>
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              href={project.href}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

type getStaticPropsType = InferGetStaticPropsType<typeof getStaticProps>

export async function getStaticProps() {
  return {
    props: {
      projects,
    },
  }
}
export default Projects
