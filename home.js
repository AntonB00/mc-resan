const tasks = [
    { id: 'firstCheckbox', text: 'Körkortstillstånd.' },
    { id: 'secondCheckbox', text: 'Hitta handledare / skola.' },
    { id: 'thirdCheckbox', text: 'Börja plugga teori.' },
    { id: 'fourthCheckbox', text: 'Första lektionen.' },
    { id: 'fifthCheckbox', text: 'Riskettan.' },
    { id: 'sixthCheckbox', text: 'Lektion i trafik.' },
    { id: 'seventhCheckbox', text: 'Risktvåan.' },
    { id: 'eightCheckbox', text: 'Teoriprov.' },
    { id: 'ninthCheckbox', text: 'Uppkörning.' }
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