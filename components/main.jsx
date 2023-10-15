import { AiOutlineMail } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Main() {
    return (
        <div id="home" className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="uppercase text-sm tracking-widest text-gray-600">Let&apos;s Build something together</p>
                    <h1 className="p-4 text-gray-700">Hi, I&apos;m <span className="text-[#549475]">Velizar</span></h1>
                    <h1 className=" p-2 text-gray-700"> A Full Stack Web Developer</h1>
                    <p className="p-4 text-gray-600 max-w-[70%] m-auto">
                        I&apos;m focused on building responsive front-end web applications
                        integrating back-end technologies.
                    </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto p-4">
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaLinkedinIn />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaGithub />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <AiOutlineMail />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <BsPersonLinesFill />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
