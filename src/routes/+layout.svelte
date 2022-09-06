<script lang="ts">
    import PageHeader from "$lib/components/PageHeader.svelte";
    import Experience from "$lib/components/Experience.svelte";
    import Education from "$lib/components/Education.svelte";
    import OtherSkills from "$lib/components/OtherSkills.svelte";
    import Languages from "$lib/components/Languages.svelte";
    import {onMount} from "svelte";
    import {cvData, cvDataEn, cvDataRu} from "../lib/data/store";

    onMount(() => {
        const path = window.location.pathname;
        switch (path) {
            case "/ru":
                $cvData = cvDataRu;
                break;
            default:
                $cvData = cvDataEn;
                break;
        }
    })
</script>

<PageHeader/>

<main>
    <Experience/>

    <Education/>

    <OtherSkills/>

    <Languages/>
</main>

