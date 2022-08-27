<script lang="ts">
    import {cvData} from "$lib/data/store.ts";

    let yearsOld = Date.now() - $cvData.header.birthDate;
    yearsOld = Math.floor(yearsOld / 1000 / 60 / 60 / 24 / 365);

    let yearsString = $cvData.header.yearsOldTemplate(yearsOld);

</script>

<svelte:head>
    <title>{$cvData.header.name} — {$cvData.header.job}</title>
</svelte:head>

<header>
    <h1>{$cvData.header.name}</h1>
    <h2>{$cvData.header.job}</h2>
    <h3>{yearsString}, {$cvData.header.city}, {$cvData.header.country}</h3>

    <div class="contacts">
        {#each $cvData.header.contacts as contact}
            <div class="contact">
                <span class="serviceName">{contact.serviceName}:</span>
                <span class="serviceValue"><a href="{contact.serviceLink}">{contact.value}</a></span>
            </div>
        {/each}
    </div>
</header>
