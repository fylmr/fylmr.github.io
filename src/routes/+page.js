import {redirect} from '@sveltejs/kit';
import {cvData, cvDataEn} from "$lib/data/store.js";

export function load({params}) {

    cvData.set(cvDataEn);
    throw redirect(301, "/en");
}
