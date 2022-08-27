<script lang="ts">
    import {cvData} from "$lib/data/store";
    import {format} from 'date-fns'
    import PageHeader from "$lib/components/PageHeader.svelte";

    function formatExperienceDate(from: Date, to: Date | null): string {
        let result = "";
        const fromMonthYear = format(from, 'MMM yyyy');
        result += fromMonthYear;
        if (to) {
            const toMonthYear = format(to, 'MMM yyyy');
            result += " – " + toMonthYear;
        } else {
            result += " – ...";
        }

        return result;
    }
</script>

<PageHeader/>

<main>
    <div class="experience">
        <h2>{$cvData.experienceHeader}</h2>
        {#each $cvData.companies as company}
            <div class="company">
                <h3>{company.companyName}</h3>
                <div class="dates">
                    {formatExperienceDate(company.startDate, company.endDate)}
                </div>

                {#each company.projects as project}
                    <div class="project">
                        <h4>{project.name}</h4>
                        <div class="description">
                            {project.description}
                        </div>
                    </div>
                {/each}
            </div>
        {/each}
    </div>

    <div class="education">
        <h2>{$cvData.educationHeader}</h2>
        {#each $cvData.education as edu}
            <div class="edu">
                <h3>{edu.school}</h3>
                <h4>{edu.position}</h4>
                <div class="dates">
                    {formatExperienceDate(edu.startDate, edu.endDate)}
                </div>
                <p class="description">{edu.description}</p>
            </div>
        {/each}
    </div>
</main>
