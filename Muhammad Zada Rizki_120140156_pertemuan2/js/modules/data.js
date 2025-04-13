export const getWeatherData = async (city = 'Jakarta') => {
    try {
        // Simulasi API call dengan timeout
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Simulasi data cuaca
        const weatherData = {
            location: city,
            temp: Math.floor(Math.random() * 15) + 20,
            desc: ['Cerah', 'Berawan', 'Hujan ringan', 'Kabut'][Math.floor(Math.random() * 4)],
            icon: ['☀️', '⛅', '🌧️', '🌫️'][Math.floor(Math.random() * 4)]
        };
        
        return weatherData;
    } catch (error) {
        console.error('Gagal mengambil data cuaca:', error);
        return null;
    }
};