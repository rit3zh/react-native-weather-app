<p align="center">
    <p align="center">
    <img src="./assets/weather_mockup.png">
    <img src="./assets/logo.png" width=500>
</p>

<p align="center">
<a href="https://github.com/rit3zh/react-native-weather-app" target="_blank">
    <img src="https://forthebadge.com/images/badges/built-with-love.svg"/>
  </a>
</p>

  <p align="center">
<p align="center">
<a href="https://github.com/rit3zh/react-native-weather-app" target="_blank">
    <img src="https://img.shields.io/badge/Made_with-React_native-blue" alt="Build Status">
  </a>
  <a href="https://github.com/rit3zh/react-native-weather-app" target="_blank">
    <img src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" alt="Build Status">
  </a>
  <a href="https://github.com/rit3zh/react-native-weather-app" target="_blank">
    <img src="https://img.shields.io/badge/License-Boost_1.0-lightblue.svg" alt="Codecov" />
  </a>
  <a href="https://github.com/rit3zh/react-native-weather-app" target="_blank">
    <img src="https://img.shields.io/badge/License-ISC-blue.svg" alt="License">
  </a>
  <a href="https://github.com/rit3zh/react-native-weather-app" target="_blank">
    <img src="https://badgen.net/github/release/Naereen/Strapdown.js" alt="License">
  </a>

</p>

<p align="center">
  <a href="https://www.buymeacoffee.com/rit3zh" target="_blank">
    <img src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png" />
  </a>
  
</p>

# Weather App

**React Native Weather** is an open-source, feature-rich weather application designed to provide accurate and up-to-date weather forecasts. With a clean and intuitive user interface, it ensures you always stay informed about the weather conditions in your area and beyond.

## Features 🚀

- **Fetch Default Location**: Automatically detects and displays weather for your current location.

- **Real-Time Weather Data**: Fetches weather updates in real time using the OpenWeather API.

- **Firebase Integration**: Leverages Firebase for real-time data synchronization, including history and search.

- **Search Locations**: Search for weather details of any city or location with instant results.

- **Real-Time History**: Automatically updates your weather search history in real time.

- **User-Friendly Interface**: Minimalistic and responsive design for a seamless experience.

## Screenshots

|                                                                                         |                                                                                         |                                                                                             |
| :-------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: |
| <img width="1604" alt="screen shot 2017-08-07 at 12 18 15 pm" src="./assets/intro.png"> |  <img width="1604" alt="screen shot 2017-08-07 at 12 18 15 pm" src="./assets/ss1.png">  | <img width="1604" alt="screen shot 2017-08-07 at 12 18 15 pm" src="./assets/recent_ss.png"> |
| <img width="1604" alt="screen shot 2017-08-07 at 12 18 15 pm" src="./assets/japan.png"> | <img width="1604" alt="screen shot 2017-08-07 at 12 18 15 pm" src="./assets/state.png"> |  <img width="1604" alt="screen shot 2017-08-07 at 12 18 15 pm" src="./assets/search.png">   |

|

Here's the updated section with a placeholder for the Firebase configuration:

## How to Use the App 🚀

To get started with the WeatherApp, follow these steps:

1. **Clone the Repository**  
   Clone the app's source code:

   ```bash
   git clone https://github.com/rit3zh/react-native-weather-app
   cd react-native-weather-app
   ```

2. **Set Up Environment Variables**  
   Create a `.env` file in the project root with the following content:

   ```env
   EXPO_PUBLIC_USER_SECRET_KEY=<YOUR_USER_SECRET_KEY> #anything unique
   EXPO_PUBLIC_WEATHER_API_KEY=<YOUR_WEATHER_API_KEY> #https://openweathermap.org/
   EXPO_PUBLIC_WEATHER_CURRENT_API_KEY=<YOUR_CURRENT_WEATHER_API_KEY> #Not required
   EXPO_PUBLIC_IP_KEY=<YOUR_IP_API_KEY> #https://ipinfo.io
   ```

   Replace `<YOUR_USER_SECRET_KEY>`, `<YOUR_WEATHER_API_KEY>`, `<YOUR_CURRENT_WEATHER_API_KEY>`, and `<YOUR_IP_API_KEY>` with your own keys.

3. **Configure Firebase**  
   Set up Firebase by creating a `db/index.ts` file and adding the following code:

   ```typescript
   import { initializeApp, FirebaseOptions } from "firebase/app";
   import { getFirestore } from "firebase/firestore";

   const firebaseConfig: FirebaseOptions = {
     apiKey: "<YOUR_API_KEY>",
     authDomain: "<YOUR_AUTH_DOMAIN>",
     projectId: "<YOUR_PROJECT_ID>",
     storageBucket: "<YOUR_STORAGE_BUCKET>",
     messagingSenderId: "<YOUR_MESSAGING_SENDER_ID>",
     appId: "<YOUR_APP_ID>",
     measurementId: "<YOUR_MEASUREMENT_ID>",
   };

   export const app = initializeApp(firebaseConfig);
   export const db = getFirestore(app);
   ```

   Replace placeholders like `<YOUR_API_KEY>` with your Firebase configuration.

4. **Install Dependencies**  
   Install all required packages:

   ```bash
   npm install
   ```

5. **Run the Application**:

   ```bash
   yarn start --reset-cache
   ```

6. **Explore the App**
   - Access real-time weather updates.
   - Search for weather in other cities.
   - Check your weather search history.

---

### ⭐ Consider leaving a Star if you like this repository. ⭐
