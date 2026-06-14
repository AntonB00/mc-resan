const tasks = [
    { id: 'firstCheckbox', text: 'Gör en Synundersökning.' },
    { id: 'secondCheckbox', text: 'Skaffa körkortstillstånd.' },
    { id: 'thirdCheckbox', text: 'Välj handledare / skola.' },
    { id: 'fourthCheckbox', text: 'Börja plugga teori.' },
    { id: 'fifthCheckbox', text: 'Börja övningsköra.' },
    { id: 'sixthCheckbox', text: 'Boka riskutbildningar.' },
    { id: 'seventhCheckbox', text: 'Boka förarprov.' },
    { id: 'eightCheckbox', text: 'Gör riskettan.' },
    { id: 'ninethCheckbox', text: 'Gör risktvåan' },
    { id: 'tenthCheckbox', text: 'Skiv teoriprovet.' },
    { id: 'eleventhCheckbox', text: 'Kör upp.' },
    { id: 'twelvethCheckbox', text: 'Hämta ut ditt körkort' }
];

function getNextTask() {
    return tasks.find(task =>
        localStorage.getItem(task.id) !== 'true'
    );
}


const loadingSpinner = document.querySelector('.Loader')
const nextTask = getNextTask();

setTimeout(() => {
    loadingSpinner.remove();
    if (nextTask) {
    document.getElementById('card-1-Head').textContent = 
        'Nästa uppgift:';
    document.getElementById('card-1').textContent =
        nextTask.text;
} else {
    document.getElementById('card-1').textContent =
        '🎉 Grattis till ditt körkort!';
}
}, 1500);

console.log('nextTask:', nextTask);