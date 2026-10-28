import type { CapabilityItem } from "@/types";

/**
 * Automech Industries - Structural Fabrication Capabilities
 * Strictly adheres to verified scope: support frameworks, access systems, and site setup.
 * Does NOT claim complete OEM boiler or filtration machinery manufacture.
 */
export const capabilitiesData: CapabilityItem[] = [
  {
    id: "boiler-support-structures",
    slug: "boiler-support-structures",
    title: "Boiler Support Structures",
    structuralCategory: "support-structures",
    shortDescription:
      "Steel columns, beams, frameworks and access platforms for boilers and associated equipment.",
    detailedScope: [
      "Heavy column and beam structural framing designed for thermal load allowances",
      "Staging platforms and burner access levels fabricated to engineering drawings",
      "Ducting support trestles and cable-tray bridging systems",
      "Base plates, gussets, anchor cage assemblies, and high-tensile connection brackets",
    ],
    keyFeatures: [
      "Rigid load-bearing structural design compliance",
      "Fabricated from certified structural steel sections (IS 2062 / equivalent)",
      "Surface preparation and protective industrial coating options",
    ],
    scopeBoundaries:
      "Scope strictly covers external structural steel support framing, galleries, and staging. Automech Industries does not manufacture boiler pressure parts, internal drums, or pressure piping.",
  },
  {
    id: "filtration-support-structures",
    slug: "filtration-support-structures",
    title: "Filtration System Structures",
    structuralCategory: "support-structures",
    shortDescription:
      "Support frames, towers, bases and platforms for filtration systems and dust collection equipment.",
    detailedScope: [
      "Multi-tier elevated towers for dust collector and baghouse installations",
      "Heavy skid frame bases for skid-mounted industrial filter packages",
      "Hopper support frameworks and discharge access levels",
      "Vibration-damping structural bases and brace systems",
    ],
    keyFeatures: [
      "High dimensional accuracy for skid-mounted equipment alignment",
      "Gusseted joint reinforcements for cyclic and dynamic load distribution",
      "Pre-match marking for rapid bolting on client sites",
    ],
    scopeBoundaries:
      "Scope covers structural frames, skid bases, and mounting towers. Automech does not produce internal filtration membranes, bags, or proprietary filter mechanisms.",
  },
  {
    id: "platforms-railings-stairs",
    slug: "platforms-railings-stairs",
    title: "Platforms, Stairs & Railings",
    structuralCategory: "access-systems",
    shortDescription:
      "Platforms, walkways, stairs, ladders and railings for access throughout industrial facilities.",
    detailedScope: [
      "Serrated grating and chequered plate mezzanine platforms",
      "Industrial stringer stairs with standard rise-and-run geometry",
      "Safety cages and vertical ladder systems with intermediate rest landings",
      "Two-rail and three-rail tubular or angle handrail systems with kick-plates (toe-boards)",
    ],
    keyFeatures: [
      "Compliance with industrial safety and clearance standards",
      "Ergonomic handrail terminations and secure kick-plate welding",
      "Modular fabrication for straightforward on-site bolt-up assembly",
    ],
    scopeBoundaries:
      "Fabrication is executed strictly against approved engineering layouts and plant safety guidelines.",
  },
  {
    id: "equipment-support-frames",
    slug: "equipment-support-frames",
    title: "Equipment Frames & Skids",
    structuralCategory: "support-structures",
    shortDescription:
      "Steel frames, skids, motor supports and pump bases for industrial machinery and equipment.",
    detailedScope: [
      "Structural steel channel and beam foundation skids",
      "Machined motor stool plates and adjustable level brackets",
      "Header and manifold structural saddles",
      "Vibration isolator mounting pedestals",
    ],
    keyFeatures: [
      "Precision hole pitch drilling and slotted foundation slots",
      "Stress-relieved weld details where specified by client drawing",
      "Heavy base stiffness to prevent equipment shaft misalignment",
    ],
    scopeBoundaries:
      "Structural framing only. Electrical drives, pumps, motors, and instrumentation are procured or supplied separately by client/OEM.",
  },
  {
    id: "custom-fabrication",
    slug: "custom-fabrication",
    title: "Custom Components & Assemblies",
    structuralCategory: "custom-fabrication",
    shortDescription:
      "Steel components and welded assemblies made from plates, channels, angles and pipes.",
    detailedScope: [
      "Built-up plate girders and heavy structural column sections",
      "Pipe racks, cable bridge gantries, and utility trestles",
      "Industrial chutes, non-pressure hoppers, and transition hoods",
      "Flanged duct structural segments and stiffened panels",
    ],
    keyFeatures: [
      "Execution strictly aligned with client weld procedure specifications (WPS)",
      "Strict tolerance monitoring on diagonals, camber, and sweep",
      "Full traceability of raw steel mill test certs when requested",
    ],
    scopeBoundaries:
      "Manufactured strictly against client approved drawings. Automech provides fabrication craftsmanship and dimensional conformance.",
  },
  {
    id: "site-setup-assembly",
    slug: "site-setup-assembly",
    title: "On-Site Assembly & Installation",
    structuralCategory: "site-services",
    shortDescription: "On-site structural assembly, positioning, alignment, bolting and welding.",
    detailedScope: [
      "Pre-assembly layout and trial assembly at plant or site ground level",
      "Erection of fabricated structural columns, trusses, and platforms",
      "Torque-controlled high-strength friction grip (HSFG) bolting",
      "Site fit-up welding, touch-up corrosion protection, and final level verification",
    ],
    keyFeatures: [
      "Coordination with client civil engineers for foundation anchor bolt verification",
      "Experienced erection foremen managing safety protocols",
      "Specialist subcontractor support for heavy mobile crane lifts and NDT testing",
    ],
    scopeBoundaries:
      "On-site services are executed in coordination with client site safety regimes and work permits.",
  },
];
