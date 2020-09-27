import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config({ path: './config.env' }); // have to import dotenv before app

async function main(city: string): Promise<any> {
  try {
    const weather = await axios.get(
      'https://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          q: city,
          appid: process.env.WEATHER_API_KEY,
        },
      }
    );
    return console.log(weather.data);
  } catch (err) {
    console.log(err);
  }
}

main('portland');
