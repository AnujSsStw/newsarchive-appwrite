import { Calendar } from "@mantine/dates";
import React, { useState } from "react";
import { NewsFeeds } from "./trying";
import dateFormat from "dateformat";
const now = new Date();
const datesss = dateFormat(now, "yyyy-mm-dd" );


export const Cal = () => {
  const [value, setValue] = useState(now);
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
