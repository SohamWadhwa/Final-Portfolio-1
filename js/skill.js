import { ProgressBar } from "../Elements/progressBar.js";

const percentageList = new Map([
    ['html', 50],
    ['css', 50],
    ['javascript', 50],
    ['nodejs', 20],
    ['c', 80],
    ['cpp', 60],
    ['python', 20],
    ['sql', 85],
    ['dsa', 15]
]);

document.addEventListener('DOMContentLoaded', () => {
    const skills = document.getElementsByClassName('skill-element');

    for (let skill of skills) {
        // Extract skill name from the first div inside progress-txt
        const progressTxt = skill.querySelector('.progress-txt div:first-child');
        if (!progressTxt) {
            console.error(`.progress-txt not found in skill element with id ${skill.id}`);
            continue;
        }

        const skillName = skill.id.toLowerCase(); // Use the lowercase ID directly
        const percentage = percentageList.get(skillName) || 0;

        console.log(`Skill: ${skillName}, Percentage: ${percentage}`);

        if (!skill.id) {
            console.error(`Skill element missing id for ${skillName}`);
            continue;
        }

        const progressBar = new ProgressBar({
            progress: percentage,
            height: "8px",
            backgroundColor: "#0000001a",
            fillColor: "#ff3366",
            rounded: true,
            duration: 1000,
        });

        try {
            // Mount the progress bar inside the skill element
            progressBar.mount(`#${skill.id}`);
        } catch (error) {
            console.error(`Failed to mount progress bar for #${skill.id}:`, error);
        }
    }
});


    
    