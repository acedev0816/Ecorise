import Image from "next/image";
import { FC } from "react";
import tw from "tailwind-styled-components";
import Typography from "../Typography/Typography";

interface TeamProfileProp {
  title: string;
  subTitle: string;
  bio: string;
  image: string;
}

const ImageOptions = {
  width: 163,
  height: 211,
};

const TeamProfile: FC<TeamProfileProp> = function ({
  title,
  subTitle,
  bio,
  image,
}) {
  const CardWrapper = tw.div`
        flex gap-5
        landingPageGradientBg
        px-3 py-3
        rounded-md
        min-h-[100px]
        flex-col
        sm:flex-row
        items-center
        sm:items-start
    `;

  const CardContent = tw.div`
        flex flex-col w-full sm:w-[60%] items-center
    `;

  return (
    <CardWrapper>
      <Image
        src={"/Team/" + image}
        alt="Team Member"
        width={ImageOptions.width}
        height={ImageOptions.height}
        className="rounded-md w-[70%] sm:w-[45%] h-full object-cover	"
      />
      <CardContent>
        <Typography
          variant="h5"
          className="dark:text-white text-primary font-bold"
          fontFamily="Jura"
          content={title}
        />
        <Typography
          variant="p"
          className="dark:text-textColor-100 text-primary font-bold"
          fontFamily="Jura"
          content={subTitle}
        />
        <Typography
          className="text-opacity-80 mt-2"
          variant="p"
          fontFamily="Jura"
          content={bio}
        />
      </CardContent>
    </CardWrapper>
  );
};

export default TeamProfile;
