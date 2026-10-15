import type { StaticImageData } from "next/image";

import heroSteelFrameErection from "@/assets/images/hero-steel-frame-erection.jpg";
import fabricationBay from "@/assets/images/fabrication-bay.jpg";
import weldingStructure from "@/assets/images/welding-structure.jpg";
import cuttingMachine from "@/assets/images/cutting-machine.jpg";
import grindingFrames from "@/assets/images/grinding-frames.jpg";
import inspectionCaliper from "@/assets/images/inspection-caliper.jpg";
import rawSteelSections from "@/assets/images/raw-steel-sections.jpg";
import platformStairGrating from "@/assets/images/platform-stair-grating.jpg";
import plantStructure from "@/assets/images/plant-structure.jpg";
import columnBasePlate from "@/assets/images/column-base-plate.jpg";
import siteErection from "@/assets/images/site-erection.jpg";
import welderPortrait from "@/assets/images/welder-portrait.jpg";
import stairTower from "@/assets/images/stair-tower.jpg";
import dispatchLifting from "@/assets/images/dispatch-lifting.jpg";
import sectorPower from "@/assets/images/sector-power.jpg";
import sectorChemical from "@/assets/images/sector-chemical.jpg";
import sectorCement from "@/assets/images/sector-cement.jpg";
import sectorAirPollution from "@/assets/images/sector-air-pollution.jpg";
import sectorManufacturing from "@/assets/images/sector-manufacturing.jpg";
import platformsYellowRailings from "@/assets/images/platforms-yellow-railings.jpg";
import tanksStairs from "@/assets/images/tanks-stairs.jpg";

export interface MediaItem {
  src: StaticImageData;
  alt: string;
  /** Original source page, kept for licence records. */
  source: string;
}

/**
 * Representative stock photography (Pexels licence, free for commercial use).
 * These images do not show Automech projects or premises. Replace them with
 * photographs from the Dahigaon works as they become available.
 */
export const media = {
  heroSteelFrameErection: {
    src: heroSteelFrameErection,
    alt: "Red-oxide primed steel frame being erected with a crane on an industrial site",
    source: "https://www.pexels.com/photo/29274538/",
  },
  fabricationBay: {
    src: fabricationBay,
    alt: "Fabricated steel member resting on supports inside a workshop bay",
    source: "https://www.pexels.com/photo/15947587/",
  },
  weldingStructure: {
    src: weldingStructure,
    alt: "Welder joining a large steel assembly in a fabrication shop",
    source: "https://www.pexels.com/photo/16045334/",
  },
  cuttingMachine: {
    src: cuttingMachine,
    alt: "Machine cutting steel plate with sparks",
    source: "https://www.pexels.com/photo/8973680/",
  },
  grindingFrames: {
    src: grindingFrames,
    alt: "Worker grinding welded steel frames on a workshop floor",
    source: "https://www.pexels.com/photo/38847632/",
  },
  inspectionCaliper: {
    src: inspectionCaliper,
    alt: "Caliper measuring the flange of a steel section",
    source: "https://www.pexels.com/photo/36003972/",
  },
  rawSteelSections: {
    src: rawSteelSections,
    alt: "Stacked structural steel sections in a store",
    source: "https://www.pexels.com/photo/36003978/",
  },
  platformStairGrating: {
    src: platformStairGrating,
    alt: "Industrial stair with grating treads and steel handrails",
    source: "https://www.pexels.com/photo/26796714/",
  },
  plantStructure: {
    src: plantStructure,
    alt: "Process plant with steel support structures, platforms and access ladders",
    source: "https://www.pexels.com/photo/15866139/",
  },
  columnBasePlate: {
    src: columnBasePlate,
    alt: "Steel column base plate with gussets fixed by anchor bolts",
    source: "https://www.pexels.com/photo/36449518/",
  },
  siteErection: {
    src: siteErection,
    alt: "Worker fitting steel beams during on-site assembly",
    source: "https://www.pexels.com/photo/35383408/",
  },
  welderPortrait: {
    src: welderPortrait,
    alt: "Welder in protective gear working on a steel component",
    source: "https://www.pexels.com/photo/27757293/",
  },
  stairTower: {
    src: stairTower,
    alt: "Steel stair tower with landings and handrails",
    source: "https://www.pexels.com/photo/16613539/",
  },
  dispatchLifting: {
    src: dispatchLifting,
    alt: "Overhead crane lifting bundled steel members for dispatch",
    source: "https://www.pexels.com/photo/36003980/",
  },
  sectorPower: {
    src: sectorPower,
    alt: "Power station with cooling tower and chimney beside a river",
    source: "https://www.pexels.com/photo/20220791/",
  },
  sectorChemical: {
    src: sectorChemical,
    alt: "Chemical process plant with columns, pipework and steel structures",
    source: "https://www.pexels.com/photo/10666081/",
  },
  sectorCement: {
    src: sectorCement,
    alt: "Cement plant with steel structures, conveyors and access stairs",
    source: "https://www.pexels.com/photo/18468425/",
  },
  sectorAirPollution: {
    src: sectorAirPollution,
    alt: "Large ducting carried on steel support structures with walkways",
    source: "https://www.pexels.com/photo/10546018/",
  },
  sectorManufacturing: {
    src: sectorManufacturing,
    alt: "Factory hall with overhead cranes and elevated steel walkways",
    source: "https://www.pexels.com/photo/10031804/",
  },
  platformsYellowRailings: {
    src: platformsYellowRailings,
    alt: "Multi-level steel platforms with yellow handrails on a process structure",
    source: "https://www.pexels.com/photo/5851547/",
  },
  tanksStairs: {
    src: tanksStairs,
    alt: "Storage tanks with steel stairs and railings",
    source: "https://www.pexels.com/photo/31403876/",
  },
} satisfies Record<string, MediaItem>;

export const weldingVideo = {
  src: "/videos/welding-loop.mp4",
  source: "https://www.pexels.com/video/10641848/",
};

/** Representative image for each capability, keyed by capability id. */
export const capabilityMedia: Record<string, MediaItem> = {
  "boiler-support-structures": media.plantStructure,
  "filtration-support-structures": media.fabricationBay,
  "platforms-railings-stairs": media.platformsYellowRailings,
  "equipment-support-frames": media.columnBasePlate,
  "custom-fabrication": media.weldingStructure,
  "site-setup-assembly": media.siteErection,
};

export const heroVideo = {
  src: "/videos/hero-fabrication.mp4",
  poster: "/videos/hero-fabrication-poster.jpg",
  source: "https://www.pexels.com/video/11887095/",
};

/** Representative image for each industry sector, keyed by industry id. */
export const industryMedia: Record<string, MediaItem> = {
  "power-and-energy": media.sectorPower,
  "chemical-and-process": media.sectorChemical,
  "cement-and-minerals": media.sectorCement,
  "environmental-and-filtration": media.sectorAirPollution,
  "general-manufacturing": media.sectorManufacturing,
};
