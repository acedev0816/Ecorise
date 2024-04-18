import tw from "tailwind-styled-components";

export const HeroSection = tw.section`
    py-20 px-4
    bg-[url('/hero-bg-2.jpg')] bg-no-repeat bg-cover bg-center
`;

export const SubHeroSection = tw.section`
    py-10 px-4
    bg-[url('/hero-bg-2.jpg')] bg-no-repeat bg-cover bg-center
`;
    
export const AboutSection = tw.section`
    py-10 px-4
    dark:bg-primary bg-white
    flex flex-col gap-5
`;

export const HeroContainer = tw.div`
    flex flex-col items-center gap-20
    max-w-screen-2xl m-auto
`;

export const AboutContainer = tw.div`
    flex items-stretch md:gap-10 
    max-w-screen-2xl m-auto
`;

export const ButtonWrapper = tw.div`
    flex gap-10 items-center justify-center
    max-w-screen-2xl m-auto
`;

export const FeatureSection = tw.section`
    py-10 px-4
    dark:bg-primary bg-white
    flex flex-col gap-20
`;

export const ImpactSection = tw.section`
    dark:bg-primary bg-white
    py-20 px-4
`;

export const ImpactCol = tw.div`
    mx-10
    flex flex-col gap-8
`;

export const ImpactContainer = tw.div`
    flex items-center gap-20 justify-between
    max-w-screen-2xl m-auto
`;

export const EcoSystemSection = tw.section`
    dark:bg-primary bg-white
    py-20 px-4
    flex flex-col gap-20
`;

export const EcoSystemContainer = tw.div`
    flex items-center gap-16
    max-w-screen-2xl m-auto
`;

export const EcoSystemBox = tw.div`
    flex flex-col gap-2
    p-5 md:p-10
    border-2 border-textColor-100
    rounded-3xl	
    md:skew-x-[-10deg]
    min-h-[400px]
    md:mx-10
`;

export const AssetsSection = tw.section`
    dark:bg-primary bg-white
    py-2 px-4    
`;

export const AssetsContainer = tw.div`
    flex items-center gap-2 justify-between
    max-w-screen-2xl mx-auto
`;

export const AssetsCol = tw.div`
    md:w-1/2
    mx-10			
`;

export const AssetsImages = tw.div`
    flex  flex-wrap justify-center
    mx-10
`;

export const IncomeSection = tw.section`
    dark:bg-primary bg-white
    px-4 mt-5
`;

export const IncomeContainer = tw.div`
    flex items-center gap-20
    max-w-screen-2xl m-auto 
`;

export const IncomeCol = tw.div`
    md:w-2/5
    mx-4
`;

export const OverlapSection = tw.div`
    dark:bg-primary bg-white
    py-10 px-4
`;

export const OverlapContainer = tw.div`
    flex items-center
    max-w-screen-2xl m-auto
`;

export const OverlayCard = tw.div`
    p-5 md:p-10
    rounded-3xl
    border-[2px] border-textColor-100
    md:skew-x-[-5deg]
    md:mx-12
`;

export const ProjectSection = tw.div`
    dark:bg-primary bg-white
    py-20 px-4
    flex flex-col gap-20
`;

export const ProjectContainer = tw.div`
    flex items-center gap-8
    max-w-screen-2xl m-auto
`;

export const PartnersSection = tw.div`
    dark:bg-primary bg-white
    py-20 px-4
`;

export const PartnersContainer = tw.div`
    flex items-center gap-20 flex-wrap justify-center
    max-w-screen-2xl m-auto
`;

export const TestimonialSection = tw.div`
    dark:bg-primary bg-white
    py-20 px-4
    flex flex-col gap-16
`;

export const TestimonialContainer = tw.div`
    flex items-s gap-10
    max-w-screen-2xl m-auto
`;

export const TeamsQouteContainer = tw.div`
    flex flex-col gap-2
    max-w-screen-lg m-auto
`;

export const TeamsQouteSection = tw.section`
    py-20 px-4
    dark:bg-primary bg-white
    flex flex-col gap-20
`;

export const TokenizeContainer = tw.div`
    flex flex-col gap-2
    max-w-screen-lg m-auto
`;

export const TokenizeSection = tw.section`
    py-20 px-4
    dark:bg-primary bg-white
    flex flex-col gap-20
`;

export const TeamSection = tw.section`
    dark:bg-primary bg-white
    pt-10 pb-20 px-4
`;

export const TeamRow = tw.div`
    grid xs:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5
`;

export const TeamContainer = tw.div`
    flex flex-col gap-10 
    max-w-screen-2xl m-auto
`;