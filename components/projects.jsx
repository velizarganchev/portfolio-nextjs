import ProjectItem from "./projectItem"
import propertyImage from "../public/assets/projects/property.jpg"
import criptoImage from "../public/assets/projects/crypto.jpg"
import netflixImage from "../public/assets/projects/netflix.jpg"
import twitchImage from "../public/assets/projects/twitch.jpg"

export default function Projects() {
    return (
        <div className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest uppercase text-[#549475]">Projects</p>
                <h2 className="py-2">What I&apos;ve Build</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <ProjectItem title="Property App" framework="React JS" backgroundImg={propertyImage} projectUrl="/property" />
                    <ProjectItem title="Crypto App" framework="React JS" backgroundImg={criptoImage} projectUrl="/crypto" />
                    <ProjectItem title="Netflix App" framework="React JS" backgroundImg={netflixImage} projectUrl="/netflix" />
                    <ProjectItem title="Twitch App" framework="React JS" backgroundImg={twitchImage} projectUrl="/twitch" />
                </div>
            </div>
        </div>
    )
}
