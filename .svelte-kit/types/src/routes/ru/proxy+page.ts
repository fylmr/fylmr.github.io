// @ts-nocheck
/** @type {import('./$types').PageLoad} */
import {cvData, cvDataRu} from "../../lib/data/store";

/** */
export function load() {
    cvData.set(cvDataRu);
}
