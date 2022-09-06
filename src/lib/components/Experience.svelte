<script lang="ts">
    import {cvData} from "$lib/data/store";
    import {format} from 'date-fns'

    function formatExperienceDate(from: Date, to: Date): string {
        let result = "";
        const fromMonthYear = format(from, 'MMM yyyy');
        result += fromMonthYear;

        const toMonthYear = format(to, 'MMM yyyy');
        result += " – " + toMonthYear;

        return result;
    }
</script>

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
