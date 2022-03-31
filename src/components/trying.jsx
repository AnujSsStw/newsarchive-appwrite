import React, { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import { useEffect } from "react";

export const Xx = (xx) => {
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

    return (

        <div>
            {loading ? <div>Loading...</div> :
                <div>
                    <div>
                        {news.map((news, index) => {
                            return (
                                <div key={index}>
                                    <div className="text-center text-5xl">{news.headline}</div>
                                    <img src={news.img} alt="news" />
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        {news2.map((news2, index) => {
                            return (
                                <div key={index}>
                                    <div className="text-center text-5xl">{news2.headline}</div>
                                    <img src={news2.img} alt="news" />
                                </div>
                            )
                        })}

                    </div>
                </div>
            }
        </div >
    )
}