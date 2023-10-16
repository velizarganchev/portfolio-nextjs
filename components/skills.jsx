import Image from "next/image";

export default function Skills() {
    const skills = [
        {
            title: "HTML",
            image: "/assets/skills/html.png"
        },
        {
            title: "Css",
            image: "/assets/skills/css.png"
        },
        {
            title: "JavaScript",
            image: "/assets/skills/javascript.png"
        },
        {
            title: "React",
            image: "/assets/skills/react.png"
        },
        {
            title: "Tailwind",
            image: "/assets/skills/tailwind.png"
        },
        {
            title: "Firebase",
            image: "/assets/skills/firebase.png"
        },
        {
            title: "Github",
            image: "/assets/skills/github.png"
        },
        {
            title: "Next",
            image: "/assets/skills/nextjs.png"
        },
        {
            title: "MongoDb",
            image: "/assets/skills/mongo.png"
        },
        {
            title: "AWS",
            image: "/assets/skills/aws.png"
        }
        ,
        {
            title: "Node",
            image: "/assets/skills/node.png"
        },
        {
            title: "Shopify",
            image: "/assets/skills/shopify.png"
        },
    ]
    return (
        <div id="skills" className="w-full lg:h-screen p-2">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <p className="text-xl tracking-widest uppercase text-[#549475]">Skills</p>
                <h2 className="py-4">What I Can Do</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((s) =>
                        <div key={s.title} className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                            <div className="grid grid-cols-2 gap-4 justify-center items-center">
                                <div className="m-auto">
                                    <Image src={s.image} width={64} height={64} alt="HTML Image" />
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <h3>{s.title}</h3>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
