import { updateTime, startClock } from './modules/utils.js';
import { getWeatherData } from './modules/data.js';
import NotesManager from './app.js';

const initApp = async () => {
    // Inisialisasi waktu
    updateTime();
    startClock();
    
    // Inisialisasi manajer catatan
    const notesManager = new NotesManager();
    
    // Setup event listener untuk tambah catatan
    document.getElementById('addNoteBtn').addEventListener('click', () => {
        const noteInput = document.getElementById('noteInput');
        notesManager.addNote(noteInput.value);
        noteInput.value = '';
    });
    
    // Setup event listener untuk input catatan (Enter key)
    document.getElementById('noteInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const noteInput = document.getElementById('noteInput');
            notesManager.addNote(noteInput.value);
            noteInput.value = '';
        }
    });
    
    // Setup event listener untuk update cuaca
    document.getElementById('updateWeatherBtn').addEventListener('click', async () => {
        const cityInput = document.getElementById('cityInput');
        const city = cityInput.value.trim() || 'Jakarta';
        const weatherData = await getWeatherData(city);
        updateWeatherDisplay(weatherData);
        cityInput.value = '';
    });
    
    // Load data cuaca awal
    const initialWeatherData = await getWeatherData();
    updateWeatherDisplay(initialWeatherData);
};

const updateWeatherDisplay = (weatherData) => {
    if (weatherData) {
        document.getElementById('weatherLocation').textContent = weatherData.location;
        document.getElementById('weatherTemp').textContent = `${weatherData.temp}°C`;
        document.getElementById('weatherDesc').textContent = weatherData.desc;
        document.getElementById('weatherIcon').textContent = weatherData.icon;
    }
};

document.addEventListener('DOMContentLoaded', initApp);