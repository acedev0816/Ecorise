"use client";

import {
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  HeroContainer,
  SubHeroSection,
  TokenizeSection,
  TokenizeContainer,
} from "../_pageComponents/StyleComponents/StyleComponents";
import Typography from "../_pageComponents/Typography/Typography";
import Button from "../_pageComponents/Button/Button";
import { WifiIcon } from "@heroicons/react/24/solid";
import styles from "../front.module.css";
import axios from "@/util/axios";
import Select from "@/app/_components/select";
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
    { value: "polygon ", label: "polygon ", src: "/check-mark.svg" },
    { value: "ethereum", label: "ethereum", src: "/eth.svg" },
    { value: "solana", label: "solana", src: "/solana.png" },
  ];

  const [category, setCategory] = useState<string[]>(["grassland"]);
  const CATEGORIES: any[] = [
    { value: "grassland", label: "Grassland" },
    { value: "forest", label: "Forest" },
    { value: "jungle", label: "Jungle" },
    { value: "desert", label: "Desert" },
    { value: "coastal", label: "Coastal" },
    { value: "bush", label: "Bush" },
    { value: "urban", label: "Urban" },
  ];

  const SERVICES: any[] = [
    { value: "carbon_sequestration", label: "Carbon Sequestration" },
    { value: "healthy_sqil", label: "Healthy Sqil" },
    { value: "healthy_forest", label: "Healthy Forest" },
    { value: "clean_water", label: "Clean Water" },
    { value: "bio_diversity", label: "Biodiversity" },
    { value: "flood_mitigation", label: "Flood Mitigation" },
    { value: "erosion_control", label: "Erosion Control" },
  ];
  const [services, setServices] = useState<any[]>(["carbon_sequestration"]);

  const [business, setBusiness] = useState<string[]>(["agriculture"]);
  const BUSINESSES: any[] = [
    { value: "agriculture", label: "Agriculture" },
    { value: "forestry", label: "Forestry" },
    { value: "rehabilitation", label: "Rehabilitation" },
    { value: "restoration", label: "Restoration" },
    { value: "conservation", label: "Conservation" },
    { value: "regeneration", label: "Regeneration" },
    { value: "other", label: "Other" },
  ];

  const [asset, setAsset] = useState<string[]>(["real_estate"]);
  const ASSETS: any[] = [
    { value: "real_estate", label: "Real Estate" },
    { value: "trees", label: "Trees" },
    { value: "hardware", label: "Hardware" },
    { value: "data", label: "Data" },
    { value: "rights_to_yield", label: "Rights to yield" },
    { value: "vehicles", label: "Vehicles" },
    { value: "other", label: "Other" },
  ];

  const [dragging, setDragging] = useState(false);
  const [data, setData] = useState<any>({
    title: "",
    description: "",
    category: "real_asset",
    tags: "",
    duration: "",
    platform: "polygon",
  });
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };
  const fileRef = useRef<HTMLInputElement>(null);

  const handleImgSelect = () => {
    if (fileRef.current?.files) 
    {
      // upload(fileRef.current.files[0]);
    }
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    let file = null;
    if (e.dataTransfer?.items && e.dataTransfer.items[0].kind == "file")
      file = e.dataTransfer.items[0].getAsFile();
    else if (e.dataTransfer.files) file = e.dataTransfer.files[0];
    if (file) {
    }
    setDragging(false);
  };

  const getSelectedLabel = (value: string, options: any[]) => {
    for (const option of options) {
      if (option.value === value) return option.label;
    }
    return "";
  };

  const getSelectedLabels = (values: string[], options: any[]) => {
    const selOptions = options.filter(
      (v: any) => values.indexOf(v.value) !== -1
    );
    const selLabels = selOptions.map((v: any) => v.label);
    const ret = selLabels.join(", ");
    console.log(
      "getSelectedLabels: values, options, ret",
      values,
      options,
      ret
    );
    return ret;
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
            content="Ai Regenerative Value Estimator"
          />
        </HeroContainer>
      </SubHeroSection>
      <form className="px-5">
        <p className="mt-5 dark:bg-primary bg-white flex flex-col gap-20 text-2xl leading-relaxed dark:text-white text-primary text-center">
          Please provide necessary information for AI estimate
        </p>
        <div className="mt-10 container mx-auto max-w-4xl space-y-6">
          <label
            htmlFor="nft-title"
            className="dark:bg-primary bg-white flex flex-col gap-20 text-1xl leading-relaxed dark:text-white text-primary"
          >
            Project Name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="nft-title"
              id="nft-title"
              autoComplete="nft-title"
              className={`${styles.input}`}
              placeholder="e.g. “Digital Artwork”"
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
          </div>
          <label
            htmlFor="nft-title"
            className="dark:bg-primary bg-white flex flex-col gap-20 text-1xl leading-relaxed dark:text-white text-primary"
          >
            Project Size
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="nft-title"
              id="nft-title"
              autoComplete="nft-title"
              className={`${styles.input}`}
              placeholder="Size in Hectares, Acres"
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
          </div>

          <label
            htmlFor="nft-title"
            className="dark:bg-primary bg-white flex flex-col gap-20 text-1xl leading-relaxed dark:text-white text-primary"
          >
            Locaiton
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="nft-title"
              id="nft-title"
              autoComplete="nft-title"
              className={`${styles.input}`}
              placeholder="e.g. ”MENDOCINO, CALIFORNIA, USA”"
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
          </div>
          <label
            htmlFor="category"
            className="dark:bg-primary bg-white flex flex-col gap-20 text-1xl leading-relaxed dark:text-white text-primary"
          >
            Ecosystem
          </label>
          <div className="mt-2">
            <Select
              name="category"
              options={CATEGORIES}
              values={category}
              onChange={(values) => {
                setCategory(values);
              }}
            />
          </div>
          <label
            htmlFor="category"
            className="dark:bg-primary bg-white flex flex-col gap-20 text-1xl leading-relaxed dark:text-white text-primary"
          >
            Ecosystem Services
          </label>
          <div className="mt-2">
            <Select
              options={SERVICES}
              multi
              values={services}
              onChange={(values) => {
                setServices(values);
              }}
            />
          </div>
          <label
            htmlFor="cover-photo"
            className="mx-auto dark:bg-primary bg-white flex flex-col gap-20 text-1xl leading-relaxed dark:text-white text-primary"
          >
            Property boundary
          </label>
          <div
            className={`mt-2 flex justify-center rounded-lg border border-dashed border-white-900/25 px-6 py-10 bg-contain bg-center bg-no-repeat`}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <div className="text-center">
              <WifiIcon
                className={`mx-auto h-12 w-12 text-gray-300 ${
                  imgUrl ? "text-transparent" : ""
                }`}
                aria-hidden="true"
              />
              <div className="mt-4 flex text-sm">
                <p className="">
                  Draw a KML file of the property bounds on Google Earth, save
                  and upload{" "}
                </p>
                <label htmlFor="file-upload" className="ml-2 relative ">
                  <span className="dark:bg-transparent flex flex-col text-1xl dark:text-white text-primary underline">
                    here
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
                File types supported: GeoJson. Max size: 10 MB
              </p>
            </div>
          </div>
          <label
            htmlFor="category"
            className="dark:bg-primary bg-white flex flex-col gap-20 text-1xl leading-relaxed dark:text-white text-primary"
          >
            Business
          </label>
          <div className="mt-2">
            <Select
              options={BUSINESSES}
              values={business}
              onChange={(values) => {
                setBusiness(values);
              }}
            />
          </div>

          <label
            htmlFor="nft-tag"
            className="dark:bg-primary bg-white flex flex-col gap-20 text-1xl leading-relaxed dark:text-white text-primary"
          >
            Revenue
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="nft-tag"
              id="nft-tag"
              autoComplete="nft-tag"
              className={`${styles.input}`}
              placeholder="$ in revenue per year"
              onChange={(e) => setData({ ...data, tags: e.target.value })}
              value={data.tags}
            />
          </div>

          <label
            htmlFor="category"
            className="dark:bg-primary bg-white flex flex-col gap-20 text-1xl leading-relaxed dark:text-white text-primary"
          >
            Assets to tokenize
          </label>
          <div className="mt-2">
            <Select
              options={ASSETS}
              values={asset}
              onChange={(values) => {
                setAsset(values);
              }}
            />
          </div>
          <div className={`${styles.result}`}>
            <h6 className="text-center text-1xl">
              Regenerative value estimate
            </h6>
            <h6 className="text-center text-1xl">$ --- </h6>
          </div>
          {/* <Button
            className="mt-2 w-[13rem]"
            variant="gradient"
            size="lg"
            fontFamily="Poppins"
            rounded="xl3"
            value="Tokenize"
            loading={minting}
          /> */}
        </div>
      </form>
    </div>
  );
}
