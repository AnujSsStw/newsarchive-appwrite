import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { Calendar } from '@mantine/dates';
import React, { useState } from "react";
import { NewsFeeds } from "./trying";



const firebaseConfig = {
    apiKey: "AIzaSyCz7bQHB_QnBLwtl1fPPPu7BonKQx45UWQ",
    authDomain: "newarchive-1804f.firebaseapp.com",
    projectId: "newarchive-1804f",
    storageBucket: "newarchive-1804f.appspot.com",
    messagingSenderId: "1044080316873",
    appId: "1:1044080316873:web:86a6316a0c6abff0351818",
    measurementId: "G-5BSDE1R0F1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const today = new Date();



// class FetchDBnews extends React.Component {

//     state = {
//         loading: null,
//         news: []
//     }

//     componentDidUpdate() {
//         const date = this.props.setDate.toDateString()
//         if (date !== null) {
//             console.log(date)
//         }
//     }

//     async componentDidMount() {
//         const date = this.props.setDate.toDateString()
//         const docRef = doc(db, "news", `${date}`);
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//             console.log("Document data:", docSnap.data().CNN);

//             this.setState({ loading: false, news: docSnap.data().CNN })
//         } else {
//             // doc.data() will be undefined in this case
//             console.log("No such document!");
//         }
//     }

//     render() {
//         if (this.state.loading) {
//             return <div>Loading...</div>;
//         }
//         if (!this.state.news.length) {
//             return <div>No news</div>
//         }

//         return (
//             <div>
//                 {this.state.news.map((news, index) => {
//                     return (
//                         <div key={index}>
//                             <div>{news.headline}</div>
//                             <img src={news.img} alt="news" />
//                         </div>
//                     )
//                 })}
//             </div>
//         )
//     }
// }

export const Cal = () => {
    const [value, setValue] = useState(today);
    // console.log(value)
    return (
        <div className="flex flex-col md:flex-row">
            <section className="dark:bg-gray-900 md:min-h-screen shadow-xl p-8">
                <h1 className="logo">News Archiver</h1>
                <Calendar value={value} onChange={setValue} className='md:sticky md:top-14 dark:bg-gray-100 rounded-xl m-auto' />

            </section>
            <NewsFeeds dates={value} />
        </div>
    )
}






