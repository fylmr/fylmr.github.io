<script lang="ts">
    import {cvData} from "$lib/data/store";
    import {format} from 'date-fns'
    import PageHeader from "$lib/components/PageHeader.svelte";
    import Languages from "$lib/components/Languages.svelte";

    function formatExperienceDate(from: Date, to: Date): string {
        let result = "";
        const fromMonthYear = format(from, 'MMM yyyy');
        result += fromMonthYear;

        const toMonthYear = format(to, 'MMM yyyy');
        result += " – " + toMonthYear;

        return result;
    }
</script>

<PageHeader/>

<main>
    <div class="experience cv-block">
        <h2>{$cvData.experienceHeader}</h2>
        {#each $cvData.companies as company}
            <div class="company">
                <h3>{company.companyName}</h3>
                <span class="dates">
                    {formatExperienceDate(company.startDate, company.endDate)}
                </span>

                {#each company.projects as project}
                    <div class="project">
                        {#if (project.link)}
                            <h4><a href="{project.link}">{project.name}</a></h4>
                        {/if}
                        {#if (!project.link)}
                            <h4>{project.name}</h4>
                        {/if}
                        <div class="description">
                            {project.description}
                        </div>
                        <div class="project-technologies">
                            {project.technologies.join(", ")}
                        </div>
                    </div>
                {/each}
            </div>
        {/each}
    </div>

    <div class="education cv-block">
        <h2>{$cvData.educationHeader}</h2>
        {#each $cvData.education as edu}
            <div class="edu">
                <h3>{edu.school}</h3>
                <span class="dates">
                    {formatExperienceDate(edu.startDate, edu.endDate)}
                </span>
                <h4 class="edu-position">{edu.position}</h4>
                <p class="description">{edu.description}</p>
            </div>
        {/each}
    </div>

    <div class="skills cv-block">
        <h2>{$cvData.additionalSkillsHeader}</h2>
        <ul>
            {#each $cvData.additionalSkills as skill}
                <li>{@html skill.descriptionHtml}</li>
            {/each}
        </ul>
    </div>

    <Languages/>
</main>

