function updateClockAndDate() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
    const year = now.getFullYear();
    const dateString = `${day}.${month}.${year}.`;

    document.getElementById('clock').textContent = timeString;
    document.getElementById('date').textContent = dateString;
}

setInterval(updateClockAndDate, 1000);
updateClockAndDate(); // Initial call to display clock immediately
