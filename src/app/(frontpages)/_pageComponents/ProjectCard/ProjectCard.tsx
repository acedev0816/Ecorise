import Image from "next/image";
import { FC } from "react";
import tw from "tailwind-styled-components";
import Typography from "../Typography/Typography";

interface ProjectCardProps {
    title: string;
    content: string;
    image: string;
}

const ProjectCard: FC<ProjectCardProps> = function({
    title,
    content,
    image
}){

    const ProjectWrapper = tw.div`
        flex flex-col
        landingPageProjectGradientBg
        p-6
        rounded-xl
    `;

    return <ProjectWrapper>
        <Image
            src={image}
            alt={title}
            width={240}
            height={302}
            className="w-full mb-4 rounded-xl"
        />
        <Typography variant="h6" fontFamily="Jura" className="font-bold" content={title} />
        <Typography variant="p" fontFamily="Jura" className="font-semibold dark:text-opacity-70" content={content} />
    </ProjectWrapper>
}

export default ProjectCard;