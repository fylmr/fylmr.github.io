<script lang="ts">
    import {cvData} from "$lib/data/store.ts";
    import differenceInCalendarYears from 'date-fns/differenceInCalendarYears'

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
    <h1>{$cvData.header.name}</h1>
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
