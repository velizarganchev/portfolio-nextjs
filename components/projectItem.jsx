import Image from "next/image"
import Link from "next/link"

export default function ProjectItem(props) {
    return (
        <div className="relative flex items-center justify-center w-full h-auto shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#549475] to-[#70dea0]">
            <Image className="rounded-xl group-hover:opacity-10" src={props.backgroundImg} alt="Property image" />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-2xl text-white tracking-wider text-center">{props.title}</h3>
                <p className="pb-4 pt-2 text-white text-center">{props.framework}</p>
                <Link href={props.projectUrl}>
                    <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">More Info</p>
                </Link>
            </div>
        </div>
    )
}
