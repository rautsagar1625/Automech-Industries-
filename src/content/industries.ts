import type { IndustryItem } from "@/types";

/**
 * Automech Industries - Target Industry Sectors
 * Oriented towards industrial procurement managers, project managers, and EPC contractors across India.
 * Note: No unverified client names or unauthorized trademarks are referenced.
 */
export const industriesData: IndustryItem[] = [
  {
    id: "power-and-energy",
    slug: "power-and-energy",
    title: "Power Generation & Auxiliary Systems",
    targetProcurementRole: "Head of Plant Procurement & EPC Project Managers",
    description:
      "Structural steel framing, boiler staging platforms, auxiliary equipment supports, and piping bridge structures for thermal, biomass, and captive energy installations.",
    applicableStructures: [
      "Boiler equipment auxiliary support frameworks",
      "Draft fan and air preheater support stools",
      "Flue gas ducting trestles and expansion guide frames",
      "Multi-tier boiler operational maintenance galleries",
    ],
  },
  {
    id: "chemical-and-process",
    slug: "chemical-and-process",
    title: "Chemical & Process Industries",
    targetProcurementRole: "Project Engineering Heads & Mechanical Package In-charge",
    description:
      "Stiffened skid frames, process vessel access structures, corrosion-resistant coated stair towers, and inter-unit utility pipe racks.",
    applicableStructures: [
      "Process equipment skid foundations and mounting stools",
      "Inter-plant pipe racks, cable bridge gantries, and crossover stairs",
      "Vessel inspection catwalks and perimeter safety cages",
      "Pump house baseplates and vibration isolation frames",
    ],
  },
  {
    id: "cement-and-minerals",
    slug: "cement-and-minerals",
    title: "Cement, Sugar & Bulk Material Processing",
    targetProcurementRole: "Works Managers & Capital Equipment Procurement Leads",
    description:
      "Heavy-duty transfer tower framing, conveyor gallery walkways, crusher building access structures, and non-pressure hopper support systems.",
    applicableStructures: [
      "Conveyor gallery inspection walkways with handrails and kick-plates",
      "Transfer point structural staging and chute support steel",
      "Non-pressure surge hopper support framework",
      "Mill drive motor mounting skids and structural bases",
    ],
  },
  {
    id: "environmental-and-filtration",
    slug: "environmental-and-filtration",
    title: "Air Pollution Control & Filtration Engineering",
    targetProcurementRole: "OEM System Integrators & Mechanical Supply Chain Managers",
    description:
      "Elevated staging structures, baghouse filter towers, cyclone separator frames, and scrubbers access stairs fabricated to OEM partner drawings.",
    applicableStructures: [
      "Baghouse multi-tier support towers and hopper discharge staging",
      "Electrostatic precipitator (ESP) walkway platforms and ladder systems",
      "Industrial dust collector skid frames",
      "Ductwork bracing trusses and header support stands",
    ],
  },
  {
    id: "general-manufacturing",
    slug: "general-manufacturing",
    title: "General Heavy Manufacturing & Industrial Plants",
    targetProcurementRole: "Plant Engineering Heads & Maintenance Directors",
    description:
      "Custom structural steel fabrication for factory expansion, mezzanine storage platforms, machine foundation frames, and internal utility gantries.",
    applicableStructures: [
      "Structural steel mezzanine platforms with load-bearing columns",
      "Heavy machine foundation base frames and leveling stools",
      "Factory interior stairs, fire egress ladders, and walkway railings",
      "Custom built-up structural weldments and brackets",
    ],
  },
];
