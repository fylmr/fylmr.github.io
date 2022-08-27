<script lang="ts">
    import {cvData} from "../lib/data/store";

    let yearsOld = Date.now() - $cvData.header.birthDate;
    yearsOld = Math.floor(yearsOld / 1000 / 60 / 60 / 24 / 365);

    let yearsString = $cvData.header.yearsOldTemplate(yearsOld);
</script>

<header>
    <h1>{$cvData.header.name}</h1>
    <h2>{$cvData.header.job}</h2>

    <h3>{yearsString}, {$cvData.header.city}, {$cvData.header.country}</h3>
</header>
