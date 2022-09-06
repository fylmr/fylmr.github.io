<script lang="ts">
    import {cvData} from "$lib/data/store.ts";
    import differenceInCalendarYears from 'date-fns/differenceInCalendarYears'
    import {cvDataEn, cvDataRu} from "$lib/data/store.js";

    let yearsOld = differenceInCalendarYears(
        new Date(),
        $cvData.header.birthDate
    );

    let yearsString = $cvData.header.yearsOldTemplate(yearsOld);

</script>

<svelte:head>
    <title>{$cvData.header.name} — {$cvData.header.job}</title>
</svelte:head>

<header>
    <div class="lang-versions">
        <h1>{$cvData.header.name}</h1>
        <a href="/" on:click={() => $cvData = cvDataRu}>RU</a>
        <a href="/" on:click={() => $cvData = cvDataEn}>EN</a>
    </div>

    <h2>{$cvData.header.job}</h2>
    <span>{yearsString}, {$cvData.header.city}, {$cvData.header.country}</span>

    <div class="contacts">
        {#each $cvData.header.contacts as contact}
            <div class="contact">
                <span class="serviceName">{contact.serviceName}:</span>
                <span class="serviceValue"><a href="{contact.serviceLink}">{contact.value}</a></span>
            </div>
        {/each}
    </div>

    <div class="technologies">
        {$cvData.whatIWorkWithHeader}: {$cvData.whatIWorkWith.join(", ")}
    </div>
</header>

<style>
    .lang-versions {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .lang-versions > h1 {
        flex: 1 auto;
    }

    .lang-versions > a {
        margin-left: 1rem;
    }
</style>
