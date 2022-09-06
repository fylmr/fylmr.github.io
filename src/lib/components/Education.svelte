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
