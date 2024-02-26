"use client";

import { FormEvent, useRef, useState } from "react";
import {
  HeroContainer,
  SubHeroSection,
  TokenizeSection,
  TokenizeContainer,
} from "../_pageComponents/StyleComponents/StyleComponents";
import Typography from "../_pageComponents/Typography/Typography";
import Button from "../_pageComponents/Button/Button";
import { FolderIcon } from "@heroicons/react/24/solid";
import styles from "../front.module.css";
import axios from "../../../util/axios";
import Select from 'react-dropdown-select';
import Image from "next/image";

export default function Page() {
  type ChainNetOptionStruct = {
    value: string;
    label: string;
    src: string;
  };

  const netOptionArray: ChainNetOptionStruct[] = [
    { value: "bitcoin", label: 'bitcoin', src: '/bitcoin3.svg' },
    { value: "ethereum", label: 'ethereum', src: '/eth.svg' }
  ];

  type NFTCategoryStruct = {
    value: string;
    label: string;
  };

  const categoryArray: NFTCategoryStruct[] = [
    { value: "music", label: "Music NFTs" },
    { value: "game", label: "Gaming NFTs" },
    { value: "artwork", label: "Artwork" },
    { value: "identity", label: "Identity" }
  ];

  const [category, setCategory] = useState<NFTCategoryStruct[]>([{ value: "music", label: "Music NFTs" }]);
  const [netSelected, setNetSelected] = useState<ChainNetOptionStruct[]>([{ value: "bitcoin", label: 'bitcoin', src: '/bitcoin3.svg' }]);
  const [dragging, setDragging] = useState(false);
  const [data, setData] = useState<any>({
    title: '',
    description: '',
    category: 'music',
    tags: '',
    duration: '',
    platform: 'bitcoin'
  })

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
    console.log("File dropped:", file);
    // Handle the dropped file here, e.g., upload it or process it.
  };
  const fileRef = useRef<HTMLInputElement>(null);

  const onTokenize = (event: FormEvent) => {
    event.preventDefault();
    alert("mint");
    console.log("data", data);
    if (fileRef.current?.files) {

      const formData = new FormData();
      formData.append("image", fileRef.current.files[0]);
      formData.append("title", data.title);
      formData.append("category", data.category);
      formData.append("tags", data.tags);
      formData.append("description", data.description);
      formData.append("duration", data.duration);

      axios
        .post("/api/nft/mint", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log("res", res);
        })
        .catch((err) => {
          console.log("error", err);
        });
    }
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
      <form className="px-5" onSubmit={onTokenize}>
        <p className="mt-10 dark:bg-primary bg-white flex flex-col gap-20 text-5xl leading-relaxed dark:text-white text-primary font-bold text-center">
          Upload NFT
        </p>
        <p className="mt-5 dark:bg-primary bg-white flex flex-col gap-20 text-2xl leading-relaxed dark:text-white text-primary text-center">
          Please provide necessary information for tokenizing your data.
        </p>
        <div className="mt-10 container mx-auto max-w-4xl space-y-6">
          <label
            htmlFor="cover-photo"
            className="mx-auto dark:bg-primary bg-white flex flex-col gap-20 text-1xl leading-relaxed dark:text-white text-primary"
          >
            Please upload your file(Image, Video, Audio).
          </label>
          <div
            className={`mt-2 flex justify-center rounded-lg border border-dashed border-white-900/25 px-6 py-10 ${dragging ? "bg-gray-200" : ""
              }`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <div className="text-center">
              <FolderIcon
                className="mx-auto h-12 w-12 text-gray-300"
                aria-hidden="true"
              />
              <div className="mt-4 flex text-sm">
                <p className="pl-1">drag & drop a file or </p>
                <label htmlFor="file-upload" className="ml-3 relative ">
                  <span className="dark:bg-primary bg-white flex flex-col text-1xl dark:text-white text-primary underline">
                    browse
                  </span>
                  <input
                    id="file-upload"
                    name="image"
                    type="file"
                    className="sr-only"
                    ref={fileRef}
                  />
                </label>
              </div>
              <p className="text-xs leading-5 text-gray-600">
                File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV,
                OGG. Max size: 100 MB
              </p>
            </div>
          </div>
          <label
            htmlFor="nft-title"
            className="dark:bg-primary bg-white flex flex-col gap-20 text-1xl leading-relaxed dark:text-white text-primary"
          >
            What is the title of your NFT?
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="nft-title"
              id="nft-title"
              autoComplete="nft-title"
              className={`${styles.input}`}
              placeholder="e.g. “Digital Artwork Title”"
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
          </div>
          <label
            htmlFor="nft-description"
            className="dark:bg-primary bg-white flex flex-col gap-20 text-1xl leading-relaxed dark:text-white text-primary"
          >
            Provide a brief description of your NFT
          </label>
          <div className="mt-2">
            <textarea
              rows={3}
              name="nft-description"
              id="nft-description"
              autoComplete="nft-description"
              className={`${styles.input}`}
              placeholder="e.g. “This Artwork represents the journey of self-discovery.”"
              value={data.description}
              onChange={(e) => setData({ ...data, description: e.target.value })}
            />
          </div>
          <label
            htmlFor="category"
            className="dark:bg-primary bg-white flex flex-col gap-20 text-1xl leading-relaxed dark:text-white text-primary"
          >
            What is the category of your NFT?
          </label>
          <div className="mt-2">
            <Select
              options={categoryArray}
              name="category"
              values={category}
              closeOnScroll={true}
              className={`${styles.select}`}
              closeOnClickInput={true}
              onChange={([col]) => {
                setCategory([col]);
              }}
              itemRenderer={({ item, methods }) => (
                <div
                  className={`${styles.collection}`}
                  onClick={() => {
                    methods.clearAll();
                    methods.addItem(item);
                  }}
                >
                  <div className={`${styles.collectionName}`}>
                    {item.label}
                  </div>
                </div>
              )}
              contentRenderer={({ props: { values } }) =>
                values.length > 0 ? (
                  <div className={`${styles.collectioninput}`}>
                    <div className={`${styles.collectionName}`}>
                      {values[0].label}
                    </div>
                  </div>
                ) : (
                  <div className={`${styles.collectioninput}`} />
                )
              }
            />
{/* to acer : Maybe you should modify my onChage function. I did not delete your code. please repair it. */}
            {/* <select
              name="category"
              className={`${styles.input}`}
              value={data.category}
              onChange={(e)=>setData({...data, category: e.target.value})}
            >
              <option value="music">Music NFTs</option>
              <option value="game">Gaming NFTs</option>
              <option value="artwork">Artwork</option>
              <option value="identity">Identity</option>
            </select> */}
          </div>
          <label
            htmlFor="nft-tag"
            className="dark:bg-primary bg-white flex flex-col gap-20 text-1xl leading-relaxed dark:text-white text-primary"
          >
            Add tags to your NFT (Seprated by Commas).
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="nft-tag"
              id="nft-tag"
              autoComplete="nft-tag"
              className={`${styles.input}`}
              placeholder="e.g. “Abstract, Contemporary, Digital Art”"
              onChange={(e) => setData({ ...data, tags: e.target.value })}
              value={data.tags}
            />
          </div>
          <label
            htmlFor="tokenize-duration"
            className="dark:bg-primary bg-white flex flex-col gap-20 text-1xl leading-relaxed dark:text-white text-primary"
          >
            Specify the duration of the tokenized data.
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="tokenize-duration"
              id="tokenize-duration"
              autoComplete="tokenize-duration"
              className={`${styles.input}`}
              placeholder="e.g. “30 Days”"
              value={data.duration}
              onChange={(e) => setData({ ...data, duration: e.target.value })}
            />
          </div>
          <label
            htmlFor="nft-platform"
            className="dark:bg-primary bg-white flex flex-col gap-20 text-1xl leading-relaxed dark:text-white text-primary"
          >
            Select the blockchain platform to mint your NFT.
          </label>
          <div className="mt-2">
            <Select
              options={netOptionArray}
              name="nft-platform"
              values={netSelected}
              closeOnScroll={true}
              className={`${styles.select}`}
              closeOnClickInput={true}
              onChange={([col]) => {
                setNetSelected([col]);
              }}
              itemRenderer={({ item, methods }) => (
                <div
                  className={`${styles.collection}`}
                  onClick={() => {
                    methods.clearAll();
                    methods.addItem(item);
                  }}
                >
                  <Image
                    src={item.src}
                    alt="EcoRise"
                    width={32}
                    height={32}
                    className={`${styles.collectionLogo}`}
                  />
                  <div className={`${styles.collectionName}`}>
                    {item.label}
                  </div>
                </div>
              )}
              contentRenderer={({ props: { values } }) =>
                values.length > 0 ? (
                  <div className={`${styles.collectioninput}`}>
                    <Image
                      src={values[0].src}
                      alt="EcoRise"
                      width={32}
                      height={32}
                      className={`${styles.collectionLogo}`}
                    />
                    <div className={`${styles.collectionName}`}>
                      {values[0].label}
                    </div>
                  </div>
                ) : (
                  <div className={`${styles.collectioninput}`} />
                )
              }
            />
          </div>
          <div></div>
          <Button
            className="mt-2 w-[13rem]"
            variant="gradient"
            size="lg"
            fontFamily="Poppins"
            rounded="xl3"
            value="Tokenize"
          />
        </div>
      </form>
    </div>
  );
}
