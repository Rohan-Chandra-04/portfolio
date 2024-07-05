
import {projects} from "../constants/projects"

function Projects(){
    return(
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">Projects</h1>
            <div>
                {
                    projects.map((project, index)=>{
                        return(
                        <div className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4">
                            <img width={150} height={150} src={project.img} alt="oroject image cmg soon" className="mb-6 rounded"/>
                        </div>
                    
                        
                            <div className="w-full max-w-full lg:w-3/4">
                                <h6 className="mb-2 font-semibold text-2xl">{project.title}</h6>
                                <p className="mb-4 text-neutral-400 text-1xl">{project.details}</p>
                            </div>

                        </div>
                        )
                    })
                }
                
            </div>
        </div>
        
    )
}

export default Projects