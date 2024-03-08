"use client";

import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
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
import Select from "react-dropdown-select";
import Image from "next/image";
import { useAccount } from "wagmi";

const MAX_RETRY = 8;
const CHECK_INTERVAL = 4000;

export default function Page() {
  type ChainNetOptionStruct = {
    value: string;
    label: string;
    src: string;
  };

  const [imgUrl, setImgUrl] = useState<string>("");

  const { address } = useAccount();
  const [minting, setMinting] = useState<boolean>(false);

  const actionIdRef = useRef<string>("");
  const counterRef = useRef<number>(0);

  const netOptionArray: ChainNetOptionStruct[] = [
    { value: "polygon ", label: "polygon ", src: "/polygon.png" },
    { value: "ethereum", label: "ethereum", src: "/eth.svg" },
    { value: "solana", label: "solana", src: "/solana.png" },
  ];

  type NFTCategoryStruct = {
    value: string;
    label: string;
  };

  const categoryArray: NFTCategoryStruct[] = [
    { value: "real_asset", label: "Real World Assets" },
    { value: "regen_finance", label: "Regenerative Finance" },
    { value: "climate", label: "Climate Data" },
    { value: "other", label: "Other" },
  ];

  const [category, setCategory] = useState<NFTCategoryStruct[]>([
    { value: "real_asset", label: "Real World Assets" },
  ]);
  const [netSelected, setNetSelected] = useState<ChainNetOptionStruct[]>([
    { value: "polygon", label: "polygon", src: "/polygon.png" },
  ]);
  const [dragging, setDragging] = useState(false);
  const [data, setData] = useState<any>({
    title: "",
    description: "",
    category: "real_asset",
    tags: "",
    duration: "",
    platform: "polygon",
  });
  const [showModal, setShowModal] = useState<boolean>(false);
  const [tokenURL, setTokenURL] = useState<string>("");

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };
  const fileRef = useRef<HTMLInputElement>(null);

  const updateMintStatus = async () => {
    console.log("updateMintStatus: start");
    const res = await axios.get(`/api/nft/status?id=${actionIdRef.current}`);
    console.log("updateMintStatus", res);
    counterRef.current += 1;

    // check if success
    const status = res?.data?.data?.onChain?.status;
    if (status === "success") {
      const { contractAddress, tokenId } = res?.data?.data?.onChain;
      const url = `https://mumbai.polygonscan.com/token/${contractAddress}?a=${tokenId}`;
      setTokenURL(url);
      setShowModal(true);
      setMinting(false);
    } else if (counterRef.current < MAX_RETRY) {
      setTimeout(updateMintStatus, CHECK_INTERVAL);
    } else {
      setMinting(false);
    }
  };

  const upload = async (file: any) => {
    const formData = new FormData();
    formData.append("image", file);
    const res = await axios.post("/api/nft/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const path = res.data.data;
    console.log("upload res", path);
    setImgUrl(path);
  };

  const handleImgSelect = () => {
    if (fileRef.current?.files) upload(fileRef.current.files[0]);
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    let file = null;
    if (e.dataTransfer?.items && e.dataTransfer.items[0].kind == "file")
      file = e.dataTransfer.items[0].getAsFile();
    else if (e.dataTransfer.files) file = e.dataTransfer.files[0];
    if (file) {
      upload(file);
    }
    setDragging(false);
  };

  const onTokenize = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      if (!address) {
        alert("Please connect wallet.");
        return;
      }
      console.log("data", data);
      if (imgUrl) {
        setMinting(true);
        const res = await axios.post("/api/nft/mint", {
          ...data,
          recipient: address,
          img: imgUrl,
        });
        const id = res?.data?.data?.actionId;
        if (id) {
          actionIdRef.current = id;
          setTimeout(updateMintStatus, CHECK_INTERVAL);
        }
      }
    },
    [imgUrl, data]
  );

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
            className={`mt-2 flex justify-center rounded-lg border border-dashed border-white-900/25 px-6 py-10 bg-contain bg-center bg-no-repeat`}
            style={imgUrl ? { backgroundImage: `url(${imgUrl})` } : {}}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <div className="text-center">
              <FolderIcon
                className={`mx-auto h-12 w-12 text-gray-300 ${
                  imgUrl ? "text-transparent" : ""
                }`}
                aria-hidden="true"
              />
              <div className="mt-4 flex text-sm">
                <p className="pl-1">drag & drop a file or </p>
                <label htmlFor="file-upload" className="ml-3 relative ">
                  <span className="dark:bg-transparent flex flex-col text-1xl dark:text-white text-primary underline">
                    browse
                  </span>
                  <input
                    id="file-upload"
                    name="image"
                    type="file"
                    className="sr-only"
                    ref={fileRef}
                    onChange={handleImgSelect}
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
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
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
                  <div className={`${styles.collectionName}`}>{item.label}</div>
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
              disabled={true}
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
                  <div className={`${styles.collectionName}`}>{item.label}</div>
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
            loading={minting}
          />
        </div>
      </form>
      {showModal && (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-sky-800 outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold">Ecorise</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <span className="bg-transparent text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">
                <p className="my-2 text-blueGray-500 text-lg leading-relaxed">
                  Successfully minted an &nbsp;
                  <a
                    href={tokenURL}
                    className="font-medium text-blue-600 dark:text-sky-300 hover:underline"
                  >
                    NFT
                  </a>
                </p>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-red-500 background-transparent hover:bg-slate-200 dark:hover:bg-sky-900 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                {/* <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                // onClick={() => setShowModal(false)}
              >
                Save Changes
              </button> */}
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal && (
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      )}
    </div>
  );
}
