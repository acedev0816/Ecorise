import Image from "next/image";
import tw from "tailwind-styled-components";
import Button from "../Button/Button";
import Link from "next/link";
import Typography from "../Typography/Typography";

const Footer = function() {

    const FooterWrapper = tw.footer`
        dark:bg-primary bg-white 
        pt-20 pb-5 px-4
        flex flex-col gap-20
        
    `;

    const FooterContainer = tw.div`
        flex items-start gap-2 justify-center
        max-w-screen-2xl m-auto
        w-full
    `;

    const FooterLogo = tw.div`
        flex flex-col gap-10
        w-1/2
    `;

    const FooterLinks = tw.div`
        flex flex-col gap-6
        w-1/5
    `;

    const SocialLinks = tw.div`
        flex items-center gap-8
        mt-10
    `;

    return <FooterWrapper>
        <FooterContainer>
            <FooterLogo>
                <Image className="dark:block hidden" src={'/logo-dark.svg'} width={215} height={60} alt="EcoRise" />
                <Image className="dark:hidden block " src={'/logo-light.svg'} width={215} height={60} alt="EcoRise" />
                <Button className="self-start min-w-[224px] min-h-[60px] tracking-[5px]" variant="outlined" size="lg" rounded="xl" value="Email Signup" />
            </FooterLogo>
            <FooterLinks className="w-[15%]">
                <Typography variant="h5" fontFamily="Michroma" content="Links" />
                <Link href={'#'} className="text-xl dark:text-white text-primary dark:text-opacity-50 hover:text-opacity-100">Press</Link>
                <Link href={'#'} className="text-xl dark:text-white text-primary dark:text-opacity-50 hover:text-opacity-100">Blogs</Link>
                <Link href={'#'} className="text-xl dark:text-white text-primary dark:text-opacity-50 hover:text-opacity-100">FAQ</Link>
            </FooterLinks>
            <FooterLinks>
                <Typography variant="h5" fontFamily="Michroma" content="Company" />
                <Link href={'#'} className="text-xl dark:text-white text-primary dark:text-opacity-50 hover:text-opacity-100">Our Team</Link>
                <Link href={'#'} className="text-xl dark:text-white text-primary dark:text-opacity-50 hover:text-opacity-100">Partner With Us</Link>
                <Link href={'#'} className="text-xl dark:text-white text-primary dark:text-opacity-50 hover:text-opacity-100">Privacy &amp; Policy</Link>
            </FooterLinks>
            <FooterLinks>
                <Typography variant="h5" fontFamily="Michroma" content="Contact" />
                <Link href={'#'} className="text-xl dark:text-white text-primary dark:text-opacity-50 hover:text-opacity-100 underline">info@ecorise.finance</Link>
                <SocialLinks>
                    <Link href={'#'} className="text-xl text-white text-opacity-50 hover:text-opacity-100">
                        <Image src={'/youtube.svg'} alt="Youtube" width={25} height={16} className="dark:block hidden" />
                        <Image src={'/youtube-light.svg'} alt="Youtube" width={25} height={16} className="dark:hidden block"/>
                    </Link>
                    <Link href={'#'} className="text-xl text-white text-opacity-50 hover:text-opacity-100">
                        <Image src={'/discord.svg'} alt="Discord" width={25} height={16} className="dark:block hidden" />
                        <Image src={'/discord-light.svg'} alt="Discord" width={25} height={16} className="dark:hidden block" />
                    </Link>
                    <Link href={'#'} className="text-xl text-white text-opacity-50 hover:text-opacity-100">
                        <Image src={'/instagram.svg'} alt="Instagram" width={25} height={16} className="dark:block hidden" />
                        <Image src={'/instagram-light.svg'} alt="Instagram" width={25} height={16} className="dark:hidden block" />
                    </Link>
                </SocialLinks>
            </FooterLinks>
        </FooterContainer>
        <FooterContainer>
            <Link href={'#'} className="text-center dark:text-white font-medium text-primary dark:text-opacity-50">Terms &amp; Conditions</Link>
        </FooterContainer>
    </FooterWrapper>

}

export default Footer;