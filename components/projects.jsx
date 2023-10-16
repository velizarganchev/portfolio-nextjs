import ProjectItem from "./projectItem"
import jsondb from "@/jsondb/projects"

export default function Projects() {
    
    const projects = jsondb.projects;
    return (
        <div id="projects" className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest uppercase text-[#549475]">Projects</p>
                <h2 className="py-2">What I&apos;ve Build</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project) =>
                        <ProjectItem key={project.id} project={project} />
                    )}
                </div>
            </div>
        </div>
    )
}
