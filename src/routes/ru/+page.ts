import {cvData, cvDataRu} from "../../lib/data/store";


export function load({params}) {
    cvData.set(cvDataRu)
}

