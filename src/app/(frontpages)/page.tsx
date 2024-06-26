"use client";

import { toast } from 'react-toastify';
import tw from "tailwind-styled-components";
import Typography from "./_pageComponents/Typography/Typography";
import Image from "next/image";
import Button from "./_pageComponents/Button/Button";
import {
  AboutContainer,
  AboutSection,
  AssetsCol,
  AssetsContainer,
  AssetsImages,
  AssetsSection,
  ButtonWrapper,
  EcoSystemBox,
  EcoSystemContainer,
  EcoSystemSection,
  FeatureSection,
  HeroContainer,
  HeroSection,
  ImpactCol,
  ImpactContainer,
  ImpactSection,
  IncomeCol,
  IncomeContainer,
  IncomeSection,
  OverlapContainer,
  OverlapSection,
  OverlayCard,
  PartnersContainer,
  PartnersSection,
  ProjectContainer,
  ProjectSection,
  TestimonialContainer,
  TestimonialSection,
} from "./_pageComponents/StyleComponents/StyleComponents";
import Card from "./_pageComponents/Card/Card";
import CardRect from "./_pageComponents/Card/CardRect";
import ProjectCard from "./_pageComponents/ProjectCard/ProjectCard";
import Testimonial from "./_pageComponents/Testimonial/Testimonial";
import HeroAnimationSVG from "./_pageComponents/HeroAnimationSVG/HeroAnimationSVG";
import styles from "./front.module.css";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";

const LandingPage = function () {
  const [subscriberEmail, setSubscriberEmail] = useState("");

  const onJoinUs = () => {
    window.open("mailto:info@ecorise.finance");
  };
  const onSubscribe = (e: any) => {
    (async () => {
      const url = "https://api.sender.net/v2/subscribers";
      const token =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNzhjNjNiNGUyNzEwN2Q2NzkxZWZlODQ2NjNiYjc3MDUyOTIyMTJiY2M2NTcwZDczZjk2MzgwZjk1MDk1YzU2Njc2MmM2NzFhMTZiYzE4MDgiLCJpYXQiOiIxNzEyNzAwMDE3LjI5NzA4OSIsIm5iZiI6IjE3MTI3MDAwMTcuMjk3MDk0IiwiZXhwIjoiNDg2NjMwMzYxNy4yOTQ1MTciLCJzdWIiOiI4NjgyNTQiLCJzY29wZXMiOltdfQ.pY-190AipetMYpViEFV6rhWt-O4lNgUdCMN2q2Ekg3yUFSF7Cct9_V0ExLVsN267ceCRXn-uI8cfYAsbkS3sJA";
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      };
      const group_id = "dLA2yr";

      // get subscribers
      // axios
      //   .get(url, {
      //     headers,
      //   })
      //   .then((response) => {
      //     console.log("get subscribers response", response);
      //   });
      // add a new subscriber
      try{
        let data = {
          email: subscriberEmail,
          firstname: "Eco",
          lastname: "Rise",
          groups: [group_id],
          fields: { name: "ecorise" },
          trigger_automation: false,
        };
        const { data: response } = await axios.post(url, data, {
          headers,
        });
        toast('Succeeded to register a subscriber email.', {type: 'success'})
      } catch {
        toast('Failed to register subscriber email.', {type: 'error'})
      }

    })();
  };
  return (
    <>
      <HeroSection>
        <HeroContainer className="svg-animate-img">
          <Typography
            className="max-w-7xl text-[32px] md:text-[64px] text-center font-bold"
            fontFamily="Jura"
            variant="h1"
            gradient="yes"
            content="An Asset Tokenization Platform For Regenerative Finance"
          />
          <HeroAnimationSVG />

          <Typography
            className="font-normal max-w-4xl text-center dark:text-white text-white"
            variant="h5"
            gradient="no"
            content="The ECOBASED platform allows regenerative projects to tokenize, launch and trade in a secure, compliant and fully regulated ecosystem."
          />
        </HeroContainer>
      </HeroSection>

      <AboutSection>
        <AboutContainer className="items-center flex-col lg:flex-row">
          <Typography
            className="break-words flex-1 leading-relaxed text-[24px] md:text-[42px] font-semibold"
            variant="h3"
            fontFamily="Jura"
            content="ECOBASED utilizes Web3, AI and Climate Technologies to accelerate the transition toward a Regenerative Impact Economy."
          />
          <Image
            src={`/globe-dark.svg`}
            alt="Ecobased"
            width={575}
            height={635}
          />
        </AboutContainer>
        <ButtonWrapper className="flex-col md:flex-row">
          <Button
            variant="outlined"
            size="sm"
            rounded="xl"
            fontFamily="Michroma"
            value="VIEW PROJECTS"
            comingSoon
          />
          <Button
            variant="outlined"
            size="sm"
            rounded="xl"
            fontFamily="Michroma"
            value="HOW IT WORKS"
            comingSoon
          />
          <Button
            variant="outlined"
            size="sm"
            rounded="xl"
            fontFamily="Michroma"
            value="VIEW OUR BLOGS"
            onClick={() => window.open("https://medium.com/@corneile.uys")}
          />
        </ButtonWrapper>
      </AboutSection>

      <FeatureSection>
        <AboutContainer>
          <Typography
            className="font-bold text-center px-[50px]"
            variant="h5"
            fontFamily="Jura"
            content="ECOBASED makes impact investing easy by democratizing access to natural capital markets and using Ai to identify and predict market growth in business focused on Regenerative Finance (ReFi), Climate Tech and Eco Credits (carbon, water, biodiversity)."
          />
        </AboutContainer>
        <AboutContainer className="flex-col lg:flex-row gap-5">
          <Card
            heading="Launchpad"
            icon="bitcoin"
            text={[
              "Connects VC impact investors with established and grassroot ReFi projects",
              "Launches Tokenized assets and tap into Web3 liquidity",
              "Democratizes funding and impact investment access for everyone with a smartphone and internet access",
            ]}
          />
          <Card
            heading="Marketplace"
            icon="bitcoin"
            text={[
              "Trade tokenized assets 24/7, like eco credits, data & asset NFTs",
              "Global Marketplace access",
              'Decentralized credit union for the "unbanked"',
            ]}
          />
          <Card
            heading="Asset Tokenization"
            icon="bitcoin"
            text={[
              "Utilizing tech like Ai, Blockchain, DMRV (Digital Measuring, Reporting and Verification) to verify asset data and value",
              "Create marketable NFTs that meet ESG and SDG criteria for balance sheets",
              "Transparent and publicly viewable data, easy to audit",
            ]}
          />
        </AboutContainer>
      </FeatureSection>

      <ImpactSection>
        <ImpactContainer className="flex-col md:flex-row">
          <ImpactCol>
            <Typography
              variant="h4"
              content="For Impact Projects"
              fontFamily="Jura"
              className="font-bold text-center"
            />
            <CardRect
              heading="Fund your Project"
              content="List your project on the ECOBASED platform and get funded."
              icon="dollar"
            />
            <CardRect
              heading="Community Collaboration"
              content="Tap into the ECOBASED DAO network of projects to assist you in bringing your project to the next level."
              icon="community"
            />
            <CardRect
              heading="ECOBASED Tech and Talent"
              content="Get support from the ECOBASED team and access to our cutting edge technology."
              icon="qr"
            />
            <CardRect
              heading="Marketing Strategy"
              content="Assistance with pre and post fundraise marketing."
              icon="chart"
            />
          </ImpactCol>
          <ImpactCol>
            <Typography
              variant="h4"
              content="For Impact Investors"
              fontFamily="Jura"
              className="font-bold text-center"
            />
            <CardRect
              heading="Invest in eco credits"
              content="The carbon, water and biodiversity credit market is set to 10x or more in the next 10 years."
              icon="chart"
            />
            <CardRect
              heading="Invest in ReFi NFTs and Projects"
              content="Effortlessly Comply with ESG and UN SDG criteria."
              icon="dollar"
            />
            <CardRect
              heading="Invest in Climate Tech"
              content="Climate Data captured provides valuable insights into ecosystems at risk."
              icon="qr"
            />
            <CardRect
              heading="Invest in Renewables"
              content="Solar, Hydro and waste-to-energy tech is growing rapidly."
              icon="community"
            />
          </ImpactCol>
        </ImpactContainer>
      </ImpactSection>

      <EcoSystemSection>
        <EcoSystemContainer>
          <Typography
            variant="h4"
            fontFamily="Jura"
            className="font-bold text-center"
            content="A Platform that scales the ReFi ecosystem"
          />
        </EcoSystemContainer>
        <EcoSystemContainer className="flex-col md:flex-row">
          <EcoSystemBox>
            <Typography
              variant="h3"
              fontFamily="Jura"
              className="dark:text-textColor-100 text-primary font-bold"
              content="B2C (For Token holders)"
            />
            <Typography
              variant="h5"
              className="leading-relaxed mt-12"
              fontFamily="Jura"
              content="∙ Early access to Refi projects"
            />
            <Typography
              variant="h5"
              className="leading-relaxed"
              fontFamily="Jura"
              content="∙ Stake ECO to earn rewards"
            />
            <Typography
              variant="h5"
              className="leading-relaxed"
              fontFamily="Jura"
              content="∙ Discounts on fees"
            />
          </EcoSystemBox>
          <EcoSystemBox>
            <Typography
              variant="h3"
              fontFamily="Jura"
              className="dark:text-textColor-100 text-primary font-bold"
              content="B2C (For Business)"
            />
            <Typography
              variant="h5"
              className="leading-relaxed"
              fontFamily="Jura"
              content="∙ Align with ESG and SDG criteria"
            />
            <Typography
              variant="h5"
              className="leading-relaxed"
              fontFamily="Jura"
              content="∙ Ability to list projects"
            />
            <Typography
              variant="h5"
              className="leading-relaxed"
              fontFamily="Jura"
              content="∙ Network access"
            />
            <Typography
              variant="h5"
              className="leading-relaxed"
              fontFamily="Jura"
              content="∙ Tech stack access"
            />
          </EcoSystemBox>
        </EcoSystemContainer>
      </EcoSystemSection>

      <AssetsSection>
        <AssetsContainer className="flex-col md:flex-row">
          <AssetsCol>
            <Typography
              variant="h1"
              className="dark:text-[#D9D9D9] text-[32px] md:text-[64px] text-primary tracking-[5px] dark:text-opacity-80 leading-[1.5] font-semibold mb-10"
              fontFamily="Poppins"
              content="Start making an IMPACT, invest in ECOBASED assets"
            />
            <Button
              className="inline-block min-w-[244px] min-h-[60px] mb-10 md:mb-0"
              variant="gradient"
              size="lg"
              rounded="xl"
              fontFamily="Poppins"
              value="Join Us"
              onClick={onJoinUs}
            />
          </AssetsCol>
          <AssetsImages>
            <Image
              src={"/asset-new-1.png"}
              alt="Asset Image"
              width={343}
              height={302}
              className="md:w-1/2 dark:block hidden"
            />
            <Image
              src={"/asset-new-2.png"}
              alt="Asset Image"
              width={343}
              height={302}
              className="md:w-1/2 md:translate-x-[-50px] dark:block hidden"
            />
            <Image
              src={"/asset-new-3.png"}
              alt="Asset Image"
              width={343}
              height={302}
              className="md:w-1/2 dark:block hidden"
            />
            <Image
              src={"/asset-new-4.png"}
              alt="Asset Image"
              width={343}
              height={302}
              className="md:w-1/2 md:translate-x-[-50px] dark:block hidden"
            />
            <Image
              src={"/asset-light-1.png"}
              alt="Asset Image"
              width={343}
              height={302}
              className="md:w-1/2 dark:hidden block"
            />
            <Image
              src={"/asset-light-2.png"}
              alt="Asset Image"
              width={343}
              height={302}
              className="md:w-1/2 md:translate-x-[-50px] dark:hidden block"
            />
            <Image
              src={"/asset-light-3.png"}
              alt="Asset Image"
              width={343}
              height={302}
              className="md:w-1/2 dark:hidden block"
            />
            <Image
              src={"/asset-light-4.png"}
              alt="Asset Image"
              width={343}
              height={302}
              className="md:w-1/2 md:translate-x-[-50px] dark:hidden block"
            />
          </AssetsImages>
        </AssetsContainer>
      </AssetsSection>

      <IncomeSection>
        <IncomeContainer className="flex-col md:flex-row">
          <Image
            src={"/nature-image-2.png"}
            alt="Nature Image"
            width={561}
            height={435}
            className="md:w-1/2"
          />
          <IncomeCol>
            <Typography
              variant="h1"
              className="break-words dark:text-[#D9D9D9] dark:text-opacity-80 text-[32px] md:text-[64px] leading-relaxed font-semibold mb-10 leading-tight md:tracking-[5px]"
              fontFamily="Poppins"
              content="Automatically receive income"
            />
            <Typography
              variant="h4"
              className="dark:text-[#BDBDBD] text-primary leading-relaxed lg:pr-[60px]"
              fontFamily="Jura"
              content="Platform revenues is shared with you everyday. Your money grows while your asset values increase."
            />
          </IncomeCol>
        </IncomeContainer>
      </IncomeSection>

      {/* <OverlapSection>
        <OverlapContainer className="flex-col md:flex-row gap-4">
          <OverlayCard className="md:w-1/2">
            <Typography
              variant="h4"
              className="mb-8"
              fontFamily="Jura"
              content="Invest into your most important asset, the ecosystems that sustain life on earth. Invest in our collective future on this planet, restore and protect our life affirming biospheres."
            />
            <Typography
              variant="h4"
              fontFamily="Jura"
              content="You can continuously have a bigger impact by buying more assets. Mass adoption of impact investments will turn our current trajectory of endless resource extraction into sustained regeneration of a thriving biosphere."
            />
          </OverlayCard>
          <OverlayCard className="md:w-1/2">
            <Typography
              variant="h4"
              className="mb-8"
              fontFamily="Jura"
              content="The greater your impact, the greater your reward multiplier ***"
            />
            <Typography
              variant="h4"
              fontFamily="Jura"
              content="Earn additional bonus rewards when you buy more assets."
            />
          </OverlayCard>
        </OverlapContainer>
      </OverlapSection> */}

      <ProjectSection>
        {/* <ProjectContainer>
          <Typography
            variant="h4"
            fontFamily="Jura"
            className="font-bold text-center"
            content="Invest into projects that are ecosystem and climate positive."
          />
        </ProjectContainer>
        <ProjectContainer className="flex-col md:flex-row">
          <ProjectCard
            title="Ambodipesy, Madagascar"
            content="Reforestation"
            image="/projects/project-1.png"
          />
          <ProjectCard
            title="Barberton, South Africa"
            content="Regenerative Agriculture"
            image="/projects/project-2.png"
          />
          <ProjectCard
            title="Kentucky, USA"
            content="Mining Rehabilitation"
            image="/projects/project-3.png"
          />
        </ProjectContainer> */}
        <div className="flex items-center mx-auto md:w-1/2">
          <input
            type="text"
            name="nft-title"
            id="nft-title"
            autoComplete="nft-title"
            className={`${styles.inputdashboard} rounded-l-lg`}
            placeholder="Enter your Email..."
            value={subscriberEmail}
            onChange={(e) => setSubscriberEmail(e.target.value)}
          />
          <Button
            className="ml-0 px-1 rounded-r-lg"
            variant="gradient"
            size="lg"
            fontFamily="Poppins"
            value="Subscribe"
            onClick={onSubscribe}
          />
        </div>
      </ProjectSection>

      <PartnersSection>
        <PartnersContainer>
          <Typography
            variant="h4"
            fontFamily="Jura"
            className="font-bold text-center mb-12"
            content="Strategic partners"
          />
        </PartnersContainer>
        <PartnersContainer>
          <div className="flex items-center">
            <Image
              src={"/partners/OpenForestProtocol.png"}
              alt="OpenForestProtocol"
              width={100}
              height={100}
              className="mx-6 "
            />
            <Link href={"https://www.openforestprotocol.org/"}>
              <Typography
                variant="h4"
                fontFamily="Jura"
                className="font-bold"
                content="Open Forest Protocol"
              />
            </Link>
          </div>
          <div className="flex items-center">
            <Image
              src={"/partners/dClimate.png"}
              alt="dClimate"
              width={100}
              height={100}
              className="mx-6 "
            />
            <Link href={"https://www.dclimate.net/"}>
              <Typography
                variant="h4"
                fontFamily="Jura"
                className="font-bold"
                content="dClimate"
              />
            </Link>
          </div>
          <div className="flex items-center">
            <Image
              src={"/partners/solidworld.png"}
              alt="solidworld"
              width={100}
              height={100}
              className="mx-6 "
            />
            <Link href={"https://www.solid.world/"}>
              <Typography
                variant="h4"
                fontFamily="Jura"
                className="font-bold"
                content="Solid World"
              />
            </Link>
          </div>
          <div className="flex items-center">
            <Image
              src={"/partners/digitalgaia.png"}
              alt="digitalgaia"
              width={100}
              height={100}
              className="mx-6 "
            />
            <Link href={"https://www.digitalgaia.earth/"}>
              <Typography
                variant="h4"
                fontFamily="Jura"
                className="font-bold"
                content="Digital Gaia"
              />
            </Link>
          </div>
          <div className="flex items-center">
            <Image
              src={"/partners/Shamba.png"}
              alt="Shamba"
              width={100}
              height={100}
              className="mx-6 "
            />
            <Link href={"https://shamba.network/"}>
              <Typography
                variant="h4"
                fontFamily="Jura"
                className="font-bold"
                content="Shamba Network"
              />
            </Link>
          </div>
          <div className="flex items-center">
            <Image
              src={"/partners/futurequestdao1.png"}
              alt="futurequestdao"
              width={100}
              height={100}
              className="mx-6 "
            />
            <Link href={"https://future.quest/"}>
              <Typography
                variant="h4"
                fontFamily="Jura"
                className="font-bold"
                content="Future Quest DAO"
              />
            </Link>
          </div>
        </PartnersContainer>
      </PartnersSection>

      <PartnersSection>
        <PartnersContainer>
          <Typography
            variant="h4"
            fontFamily="Jura"
            className="font-bold text-center mb-12"
            content="Wallets"
          />
        </PartnersContainer>
        <PartnersContainer>
          <Image
            src={"/partners/meta-mask.png"}
            alt="Meta Mask"
            width={285}
            height={85}
            className="mx-6 dark:block hidden"
          />
          <Image
            src={"/partners/trust-wallet.png"}
            alt="Trust Wallet"
            width={257}
            height={75}
            className="mx-6 dark:block hidden"
          />
          <Image
            src={"/partners/wallet-connect.png"}
            alt="Wallet Connect"
            width={318}
            height={55}
            className="mx-6 dark:block hidden"
          />
          <Image
            src={"/partners/exodus.png"}
            alt="Exodus"
            width={285}
            height={60}
            className="mx-6 dark:block hidden"
          />
          <Image
            src={"/partners/meta-mask-light.png"}
            alt="Meta Mask"
            width={285}
            height={85}
            className="mx-6 dark:hidden block"
          />
          <Image
            src={"/partners/trust-wallet-light.png"}
            alt="Trust Wallet"
            width={257}
            height={75}
            className="mx-6 dark:hidden block"
          />
          <Image
            src={"/partners/wallet-connet-light.png"}
            alt="Wallet Connect"
            width={318}
            height={55}
            className="mx-6 dark:hidden block"
          />
          <Image
            src={"/partners/exodus-light.png"}
            alt="Exodus"
            width={285}
            height={60}
            className="mx-6 dark:hidden block"
          />
        </PartnersContainer>
      </PartnersSection>

      <TestimonialSection>
        <TestimonialContainer>
          <Typography
            variant="h4"
            fontFamily="Jura"
            className="font-bold text-center"
            content="Testimonials"
          />
        </TestimonialContainer>
        <TestimonialContainer className="flex-col md:flex-row">
          <Testimonial
            author="Kennedy Ng'ang'a from Shamba Network"
            rating={5}
            review="ECOBASED fills a vital funding need in the regenerative finance space"
          />
          <Testimonial
            author="Future Quest DAO"
            rating={4}
            review={[
              "We are proud to support the innovative work of Ecobased and congratulate them on being one of the winners of our $1M Grant Pool!",
              "@ECOBASEDDAO is a Blockchain solution for investing in Natural Capital.",
            ]}
          />
          <Testimonial
            author="OPEN FOREST PROTOCOL"
            rating={4}
            review="#OFP will be able to onboard more people thanks to the strategic relationship with #ECOBASED, allowing for more transparent #MRV usage across the board."
          />
        </TestimonialContainer>
      </TestimonialSection>
    </>
  );
};

export default LandingPage;
