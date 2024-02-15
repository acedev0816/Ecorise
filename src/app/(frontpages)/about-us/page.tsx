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
              title="Jocelyn Lee"
              subTitle="-Communications Director"
              bio="Highly skilled in company communications and relations, digital marketing and community building for 10+ Years."
              image="Jocelyn-Lee.png"
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
              title="Kyle Hinchey"
              subTitle="-CMO"
              bio="5+ Years experience managing digital channels for B2C. Crypto investor, fund manager and builder. Skills in digital media, with a background in hard asset focused Venture Capital."
              image="Kyle-Hinchey.png"
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
              title="Jeff Kirdeikis"
              subTitle=""
              bio="Jeff is the Founder and CEO of TrustSwap. Jeff is a seasoned
              cryptocurrency veteran and has helped over 40 projects launch
              successfully raising more then 50M in financing. He is invested in
              working with ECORISE and his companies can provide us with a
              platform to launch our IDO, NFTs and assist us to introduce our
              token to millions of users."
              image="Jeff-Kirdeikis.png"
            />
          </TeamRow>
        </TeamContainer>
      </TeamSection>
    </>
  );
};

export default AboutUs;
