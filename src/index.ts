import axios from 'axios';

async function main(city: string): Promise<any> {
  try {
    const weather = await axios.get(
      'https://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          q: city,
          appid: '6b86ee37e1608d9a2c8bf38b2b9d2d22',
        },
      }
    );
    return console.log(weather.data);
  } catch (err) {
    console.log(err);
  }
}

main('portland');
