import type { IndustryItem } from "@/types";

/**
 * Automech Industries - Target Industry Sectors
 * Oriented towards industrial procurement managers, project managers, and EPC contractors across India.
 * Note: No unverified client names or unauthorized trademarks are referenced.
 */
export const industriesData: IndustryItem[] = [
  {
    id: "sugar-and-cement",
    slug: "sugar-and-cement",
    title: "Sugar & Cement Plants",
    targetProcurementRole: "Works Managers & Capital Equipment Procurement Leads",
    description:
      "Heavy-duty transfer tower framing, conveyor gallery walkways, cane handling gantry steel, juice clarification and boiling house supports, crusher access structures, and non-pressure hopper systems.",
    applicableStructures: [
      "Conveyor gallery inspection walkways with handrails and kick-plates",
      "Transfer point structural staging and chute support steel",
      "Cane handling gantry frames and bagasse conveyor galleries",
      "Non-pressure surge hopper and juice tank support framework",
      "Mill drive motor mounting skids and structural bases",
    ],
  },
  {
    id: "chemical-and-refineries",
    slug: "chemical-and-refineries",
    title: "Chemical Processing & Refineries",
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
    id: "power-and-energy",
    slug: "power-and-energy",
    title: "Power & Energy",
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
    id: "industrial-filtration",
    slug: "industrial-filtration",
    title: "Industrial Filtration Systems",
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
    id: "machinery-manufacturing",
    slug: "machinery-manufacturing",
    title: "Machinery & Manufacturing",
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
