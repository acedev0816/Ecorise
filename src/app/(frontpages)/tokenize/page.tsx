"use client"

import { useState } from 'react';
import { HeroContainer, SubHeroSection, TokenizeSection, TokenizeContainer } from "../_pageComponents/StyleComponents/StyleComponents";
import Typography from "../_pageComponents/Typography/Typography";
import Button from "../_pageComponents/Button/Button";
import { FolderIcon } from '@heroicons/react/24/solid'
import styles from '../front.module.css';

export default function Page() {
  const [dragging, setDragging] = useState(false);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    console.log('File dropped:', file);
    // Handle the dropped file here, e.g., upload it or process it.
  };

  return (
    <div className="w-full">
      <SubHeroSection>
        <HeroContainer className="svg-animate-img">
          <Typography
            className="max-w-7xl text-center font-bold"
            fontFamily="Jura"
            variant="h2"
            gradient="no"
            content="Tokenize"
          />
        </HeroContainer>
      </SubHeroSection>
      <form className='px-5'>
        <p className="mt-10 dark:bg-primary bg-white flex flex-col gap-20 text-5xl leading-relaxed dark:text-white text-primary font-bold text-center">
          Upload NFT
        </p>
        <p className="mt-5 dark:bg-primary bg-white flex flex-col gap-20 text-2xl leading-relaxed dark:text-white text-primary text-center">
          Please provide necessary information for tokenizing your data.
        </p>
        <div className="mt-10 container mx-auto max-w-4xl space-y-6">
          <label htmlFor="cover-photo" className="mx-auto dark:bg-primary bg-white flex flex-col gap-20 text-1xl leading-relaxed dark:text-white text-primary">
            Please upload your file(Image, Video, Audio).
          </label>
          <div className={`mt-2 flex justify-center rounded-lg border border-dashed border-white-900/25 px-6 py-10 ${dragging ? 'bg-gray-200' : ''}`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <div className="text-center">
              <FolderIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
              <div className="mt-4 flex text-sm">
                <p className="pl-1">drag & drop a file or </p>
                <label
                  htmlFor="file-upload"
                  className="ml-3 relative "
                >
                  <span className="dark:bg-primary bg-white flex flex-col text-1xl dark:text-white text-primary underline">browse</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                </label>
              </div>
              <p className="text-xs leading-5 text-gray-600">File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG. Max size: 100 MB</p>
            </div>
          </div>
          <label htmlFor="nft-title" className="dark:bg-primary bg-white flex flex-col gap-20 text-1xl leading-relaxed dark:text-white text-primary">
            What is the title of your NFT?
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="nft-title"
              id="nft-title"
              autoComplete="nft-title"
              className={`${styles.input}`} placeholder='e.g. “Digital Artwork Title”'
            />
          </div>
          <label htmlFor="nft-title" className="dark:bg-primary bg-white flex flex-col gap-20 text-1xl leading-relaxed dark:text-white text-primary">
            Provide a brief description of your NFT
          </label>
          <div className="mt-2">
            <textarea
              rows={3}
              name="nft-title"
              id="nft-title"
              autoComplete="nft-title"
              className={`${styles.input}`} placeholder='e.g. “This Artwork represents the journey of self-discovery.”'
            />
          </div>
          <label htmlFor="nft-title" className="dark:bg-primary bg-white flex flex-col gap-20 text-1xl leading-relaxed dark:text-white text-primary">
            What is the category of your NFT?
          </label>
          <div className="mt-2">
            <select
              name="nft-title"
              id="nft-title"
              autoComplete="nft-title"
              className={`${styles.input}`}
            >
              <option value="musicnft">Music NFTs</option>
              <option value="gamenft">Gaming NFTs</option>
              <option value="artwork">Artwork</option>
              <option value="game">Gaming</option>
              <option value="artnft">Art NFTs</option>
              <option value="domanname">Domain names</option>
              <option value="fashion">Fashion</option>
              <option value="fashionnft">Fashion NFTs</option>
              <option value="collectible">Collectibles</option>
              <option value="domainnft">Domain nfts</option>
              <option value="memenft">Meme NFTs</option>
              <option value="meme">Memes</option>
              <option value="music">Music</option>
              <option value="realworldasset">Real-world assets</option>
              <option value="sport">Sports</option>
              <option value="tradingcard">Trading cards</option>
              <option value="generativeart">Generative art</option>
              <option value="pfpandavatar">Pfps and avatars</option>
              <option value="decentraland">Decentraland</option>
              <option value="eventticket">Event tickets</option>
              <option value="musicandmedia">Music and Media</option>
              <option value="photonft">Photography NFTs</option>
              <option value="definingnftcategorie">Defining nft categories</option>
              <option value="identity">Identity</option>
            </select>
          </div>
          <label htmlFor="nft-title" className="dark:bg-primary bg-white flex flex-col gap-20 text-1xl leading-relaxed dark:text-white text-primary">
            Add tags to your NFT (Seprated by Commas).
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="nft-title"
              id="nft-title"
              autoComplete="nft-title"
              className={`${styles.input}`} placeholder='e.g. “Abstract, Contemporary, Digital Art”'
            />
          </div>
          <label htmlFor="nft-title" className="dark:bg-primary bg-white flex flex-col gap-20 text-1xl leading-relaxed dark:text-white text-primary">
            Specify the duration of the tokenized data.
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="nft-title"
              id="nft-title"
              autoComplete="nft-title"
              className={`${styles.input}`} placeholder='e.g. “30 Days”'
            />
          </div>
          <label htmlFor="nft-title" className="dark:bg-primary bg-white flex flex-col gap-20 text-1xl leading-relaxed dark:text-white text-primary">
            Select the blockchain platform to mint your NFT.
          </label>
          <div className="mt-2">
            <select
              name="nft-title"
              id="nft-title"
              className={`${styles.input}`}
            >
              <option value="bitcoin" title="/Untitled.png">Bitcoin</option>
              <option value="Ethereum" title="/eth.svg">Ethereum</option>
            </select>
          </div>
          <div></div>
          <Button className="mt-2 w-[13rem]" variant="gradient" size="lg" fontFamily="Poppins" rounded="xl3" value='Tokenize' />
        </div>
      </form>
    </div>
  );
}
