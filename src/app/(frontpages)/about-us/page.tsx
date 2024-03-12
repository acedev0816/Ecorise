"use client";

import TeamProfile from "../_pageComponents/AboutUs/TeamProfile";
import {
  AboutContainer,
  AboutSection,
  HeroContainer, SubHeroSection, TeamContainer, TeamRow, TeamSection, TeamsQouteContainer,
  TeamsQouteSection
} from "../_pageComponents/StyleComponents/StyleComponents";
import Typography from "../_pageComponents/Typography/Typography";

const AboutUs = function () {
  return (
    <>
      <SubHeroSection>
        <HeroContainer className="svg-animate-img">
          <Typography
            className="max-w-7xl text-center font-bold"
            fontFamily="Jura"
            variant="h2"
            gradient="no"
            content="Our Team"
          />
        </HeroContainer>
      </SubHeroSection>

      <TeamsQouteSection>
        <TeamsQouteContainer>
          <Typography
            className="font-bold text-center px-[50px]"
            variant="h5"
            fontFamily="Jura"
            content='"You never change things by fighting the existing reality. To change something, make a new model that makes the existing model obsolete"'
          />
          <Typography variant="h5" fontFamily="Jura" className="dark:text-textColor-100 text-primary text-center font-semibold" content="Buckminster Fuller" />
        </TeamsQouteContainer>
      </TeamsQouteSection>

      <TeamSection>
        <TeamContainer>
          <TeamRow>
            <TeamProfile
              title="Corneile Uys"
              subTitle="-CEO"
              bio="Agricultural and Environmental Entrepreneur, Remediator and Emergency Responder for the last 20+ years. First hand experience in Natural Capital regeneration. Crypto and Real Estate builder and investor."
              image="Corneile-Uys.png"
            />
            <TeamProfile
              title="Patrick T. Anderson"
              subTitle="-CTO"
              bio="Software, Blockchain and Token Engineer with 20+ years of experience. Laser focused on decentralizing power and ownership through community and tech."
              image="Patrick-T.Anderson.png"
            />
            <TeamProfile
              title="Jas"
              subTitle="-Business Development"
              bio="Jas is a founding member of the TrustSwap core team and has helped incubate and launch over 50 blockchain projects. Jas has a passion for decentralization and web3 technology that can empower people and uplift humanity."
              image="jas.jfif"
            />
          </TeamRow>
          <TeamRow>
            <TeamProfile
              title="Charl Cilliers"
              subTitle="-CFO"
              bio="Chartered accountant with 15+ years in financial modeling and project finance. Crypto investor and wildlife enthusiast."
              image="Charl-Cilliers.png"
            />
            <TeamProfile
              title="Viktor Kravchuk"
              subTitle="-Full-stack developer"
              bio="Skilled full stack developer with 7 years of expertise in blockchain and AI technologies. Proficient in creating innovative solutions that leverage both blockchain and AI to drive business success. Proven track record of delivering high-quality projects and leading development teams to success."
              image="2.jpg"
            />
            <TeamProfile
              title="Etienne Berthelot"
              subTitle="-COO"
              bio="5 + Years experience in Business and supply chain development, Previous Head of sales for 'Ecocert' in EastAfrica, ESG consultant and project manager."
              image="Etienne-Berthelot.png"
            />
          </TeamRow>
        </TeamContainer>
      </TeamSection>

      <AboutSection>
        <AboutContainer className="items-center">
          <Typography className="w-5/12 text-[42px] font-semibold" variant="h3" fontFamily="Jura" content="Advisors" />
        </AboutContainer>
      </AboutSection>

      <TeamSection>
        <TeamContainer>
          <TeamRow>
            <TeamProfile
              title="Dr. Sothy Kol-Men"
              subTitle=""
              bio="Co-Founder of www.geniusyield.co & www.genius-x.co. 
              He runs his own regulatory consulting firm to help 
              early-stage projects set up appropriate legal entities 
              to issue tokens and raise funds."
              image="Sothy-Kol-Men.png"
            />
            <TeamProfile
              title="Aaron Levi Yahalom"
              subTitle=""
              bio="GR, Clean air policies EU lobbist, RWA tokenization expert, Sustainable Smart-cities advocate."
              image="aaron.png"
            />
          </TeamRow>
        </TeamContainer>
      </TeamSection>
    </>
  );
};

export default AboutUs;
