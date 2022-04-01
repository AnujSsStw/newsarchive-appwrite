import React, { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import { useEffect } from "react";

export const NewsFeeds = (xx) => {
    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState([]);
    const [news2, setNews2] = useState([]);
    const date = xx.dates.toDateString()

    useEffect(() => {
        async function start() {
            const docRef = doc(db, "news", `${date}`);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setLoading(false);
                setNews(docSnap.data().News_18);

                setNews2(docSnap.data().indiatoday);
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                setLoading(true)
            }
        }
        start()
    }, [date])

    news.reverse();
    news2.reverse();

    return (

        <section className='dark:bg-gray-800 w-full'>
            {loading ? <div>Loading...</div> :
                <div>

                    {news.map((news, index) => {
                        return (
                            <div key={index} >
                                <h2>{news.headline}</h2>
                                <img src={news.img} alt="news" />
                            </div>
                        )
                    })}


                    {news2.map((news2, index) => {
                        return (
                            <div key={index}>
                                <h2>{news2.headline}</h2>
                                <img src={news2.img} alt="news" />
                            </div>
                        )
                    })}


                </div>
            }
        </section >
    )
}