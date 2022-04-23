import React, { useState, useEffect } from "react";
import { Appwrite } from "appwrite";
import dateFormat from "dateformat";
const sdk = new Appwrite();

sdk
  .setEndpoint("http://localhost:6969/v1") // Your API Endpoint
  .setProject("62626701c37ffb568013"); // Your project ID

export const NewsFeeds = (xx) => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  const collId = xx.dates;
  const datesss = dateFormat(collId, "yyyy-mm-dd");

  useEffect(() => {
    async function start() {
      await sdk.database.listDocuments(datesss).then(
        (response) => {
          setLoading(false);

          setNews(response.documents);
        }, // Success
        (error) => {
          console.log("No such document!");
          setLoading(true);
        } // Error
      );
    }
    start();
  }, [collId, datesss]);

  news.reverse();
  const Divider = () => <hr className="sidebar-hr" />;
  return (
    <section className="dark:bg-gray-800 w-full p-7 min-h-screen">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {news.map((news, index) => {
            return (
              <div key={index}>
                {news.webN === "News18" ? (
                  <div className="feed">
                    <div className="flex-none w-60 ml-auto mr-auto relative">
                      <img src={news.src} alt="news" />
                    </div>
                    <h2>{news.topic}</h2>
                  </div>
                ) : null}
              </div>
            );
          })}

          <Divider />
          
          {news.map((news2, index) => {
            return (
              <div key={index}>
                {news2.webN === "IndiaToday" ? (
                  <div className="feed">
                    <div className="flex-none w-60 ml-auto mr-auto relative">
                      <img src={news2.src} alt="news" />
                    </div>
                    <h2>{news2.topic}</h2>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
