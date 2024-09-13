document.addEventListener('DOMContentLoaded', () => {
    const addSectionButton = document.getElementById('addSection');
    const removeSectionButton = document.getElementById('removeSection');
    const calculateButton = document.getElementById('cgpaBtn');
    const inputContainer = document.getElementById('boxInput');

    // Function to add a new section
    addSectionButton.addEventListener('click', () => {
        const newSection = document.createElement('div');
        newSection.classList.add('inputBox');
        newSection.innerHTML = `
            <input type="number" min="0" max="4" placeholder="0-4" class="inputGp">
            <input type="number" min="1" max="6" placeholder="1-6" class="inputCredit">
        `;
        inputContainer.appendChild(newSection);
    });

    // Function to remove the last section
    removeSectionButton.addEventListener('click', () => {
        const sections = document.querySelectorAll('.inputBox');
        if (sections.length > 0) {
            sections[sections.length - 1].remove();
        }
    });

    // Function to calculate CGPA
    calculateButton.addEventListener('click', () => {
        const gradePoints = document.querySelectorAll('.inputGp');
        const creditHours = document.querySelectorAll('.inputCredit');
        let totalPoints = 0;
        let totalHours = 0;

        gradePoints.forEach((input, index) => {
            const gradePoint = parseFloat(input.value) || 0;
            const creditHour = parseFloat(creditHours[index].value) || 0;
            totalPoints += gradePoint * creditHour;
            totalHours += creditHour;
        });

        const cgpa = totalHours > 0 ? (totalPoints / totalHours).toFixed(2) : 0;
        document.getElementById('cgpaOutput').textContent = `: ${cgpa}`;

        // Using a switch statement to assign letter grades based on CGPA
        switch (true) {
            case (cgpa >= 3.7):
                document.getElementById('gradeLetterOutput').textContent = 'A';
                break;
            case (cgpa >= 3.3):
                document.getElementById('gradeLetterOutput').textContent = 'B+';
                break;
            case (cgpa >= 3.0):
                document.getElementById('gradeLetterOutput').textContent = 'B';
                break;
            case (cgpa >= 2.7):
                document.getElementById('gradeLetterOutput').textContent = 'C+';
                break;
            case (cgpa >= 2.0):
                document.getElementById('gradeLetterOutput').textContent = 'C';
                break;
            default:
                document.getElementById('gradeLetterOutput').textContent = 'F';
                break;
        }
    });
});
