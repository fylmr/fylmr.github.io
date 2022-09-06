<script lang="ts">
    import {cvData} from "$lib/data/store";
</script>

<div class="skills cv-block">
    <h2>{$cvData.additionalSkillsHeader}</h2>
    <ul>
        {#each $cvData.additionalSkills as skill}
            <li>{@html skill.descriptionHtml}</li>
        {/each}
    </ul>
</div>
