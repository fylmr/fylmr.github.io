<script lang="ts">
    import {cvData} from "$lib/data/store";
</script>

<div class="languages cv-block">
    <h2>{$cvData.languagesHeader}</h2>
    <table>
        {#each $cvData.languages as language}
            <tr class="language">
                <td>{language.name}</td>
                <td>{language.level}</td>
            </tr>
        {/each}
    </table>
</div>

