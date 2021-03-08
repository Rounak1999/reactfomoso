export const mapConfig = {
  apiGoogle: process.env.REACT_APP_MAP_GOOGLE,
  apiMapBox: process.env.REACT_APP_MAP_MAPBOX
};

export const firebaseConfig = {
  apiKey: "AIzaSyDb2lCHPeSsa70jSBFTE0NPAieMbBk93_8",
  authDomain: "fir-auth-minimal.firebaseapp.com",
  databaseURL: "fir-auth-minimal",
  projectId: "fir-auth-minimal.appspot.com",
  storageBucket:"fir-auth-minimal.appspot.com",
  messagingSenderId: "531325036275",
  appId: "1:531325036275:web:53bcb597e0eecb4ac17986",
  measurementId: "G-YE0JR4XFEX"
};
console.log(firebaseConfig,"config data")

export const cloudinaryConfig = {
  cloudinaryKey: process.env.REACT_APP_CLOUDINARY_KEY,
  cloudinaryPreset: process.env.REACT_APP_CLOUDINARY_PRESET,
  cloudinaryUrl: process.env.REACT_APP_CLOUDINARY_URL
};

export const googleAnalyticsConfig = process.env.REACT_APP_GA_MEASUREMENT_ID;
