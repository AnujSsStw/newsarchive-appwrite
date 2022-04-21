import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { Calendar } from "@mantine/dates";
import React, { useState } from "react";
import { NewsFeeds } from "./trying";

const firebaseConfig = {
  apiKey: "AIzaSyCz7bQHB_QnBLwtl1fPPPu7BonKQx45UWQ",
  authDomain: "newarchive-1804f.firebaseapp.com",
  projectId: "newarchive-1804f",
  storageBucket: "newarchive-1804f.appspot.com",
  messagingSenderId: "1044080316873",
  appId: "1:1044080316873:web:86a6316a0c6abff0351818",
  measurementId: "G-5BSDE1R0F1",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const today = new Date();

export const Cal = () => {
  const [value, setValue] = useState(today);
  // console.log(value)
  return (
    <div className="flex flex-col md:flex-row">
      <section className="dark:bg-gray-900 md:min-h-screen shadow-xl p-8">
        <h1 className="logo">News Archiver</h1>
        <Calendar
          value={value}
          onChange={setValue}
          className="md:sticky md:top-14 dark:bg-gray-100 rounded-xl m-auto"
        />
        <p className="mt-5 text-green-500">Check log if loading...</p>
      </section>
      <NewsFeeds dates={value} />
    </div>
  );
};
