import Image from "next/image"
import Link from "next/link"
import { RiRadioButtonFill } from "react-icons/ri"
import { useRouter } from "next/router"
import jsondb from "@/jsondb/projects"

export default function ProjectDetails() {

    const router = useRouter();
    const { projectId } = router.query;
    const project = jsondb.projects.find((p) => p.id === projectId);

    return (
        <div className='w-full'>
            {project ? <>
                <div className='w-screen h-[50vh] relative'>
                    <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                    <Image
                        className='absolute z-1'
                        layout='fill'
                        objectFit='cover'
                        priority
                        src={project && project.bgImage}
                        alt='/'
                    />
                    <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                        <h2 className='py-2'>{project.title}</h2>
                        <h3>{`${project.frameworks[0]} / ${project.frameworks[1]} / ${project.frameworks[2]}`}</h3>
                    </div>
                </div>
                <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                    <div className='col-span-4'>
                        <p className="text-xl py-2 tracking-widest uppercase text-[#549475]">Project</p>
                        <h2 className="py-2">Overview</h2>
                        <p>
                            {project.description}
                        </p>
                        <a
                            href='https://github.com/fireclint/property-finder'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
                        </a>
                        <a
                            href='https://property-finder-development.web.app/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <button className='px-8 py-2 mt-4'>Demo</button>
                        </a>
                    </div>
                    <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
                        <div className='p-2'>
                            <p className='text-center font-bold pb-2'>Technologies</p>
                            <div className='grid grid-cols-3 md:grid-cols-1'>
                                {
                                    project.frameworks.map((fr) =>
                                        <p key={fr} className='text-gray-600 py-2 flex items-center'>
                                            <RiRadioButtonFill className='pr-1' /> {fr}
                                        </p>)
                                }
                            </div>
                        </div>
                    </div>
                    <Link href='/#projects'>
                        <p className='underline cursor-pointer'>Back</p>
                    </Link>
                </div></> : <div>Loding....</div>
            }
        </div>
    );
};  
