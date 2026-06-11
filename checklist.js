const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        localStorage.setItem(this.id, this.checked);
        updateProgress()
    });
});

checkboxes.forEach(checkbox => {
    const saved = localStorage.getItem(checkbox.id);
    if (saved === 'true') {
        checkbox.checked = true;
        
    }
});

updateProgress()

function updateProgress() {
    const total = checkboxes.length;
    const checked = document.querySelectorAll('input[type="checkbox"]:checked').length;
    const percent = Math.round((checked / total) * 100);
    
    const bar = document.querySelector('.progress-bar');
    bar.style.width = percent + '%';
    bar.setAttribute('aria-valuenow', percent);
}