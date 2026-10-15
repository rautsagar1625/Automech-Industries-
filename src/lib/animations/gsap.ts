import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Flag to track whether GSAP plugins have been initialized in the browser.
 */
let isInitialized = false;

/**
 * Safely initialize GSAP plugins on the client.
 * Registers ScrollTrigger and sets default configurations.
 */
export function initGSAP(): typeof gsap {
  if (typeof window !== "undefined" && !isInitialized) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.config({
      nullTargetWarn: false,
    });
    isInitialized = true;
  }
  return gsap;
}

export { gsap, ScrollTrigger };
