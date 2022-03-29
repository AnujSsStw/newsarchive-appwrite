import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { Calendar } from '@mantine/dates';
import React, { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";


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
const db = getFirestore(app);

let arr = [];


class FetchDBnews extends React.Component {

    state = {
        loading: null,
        img: null,
        headline: null

    }

    // async componentDidUpdate(stop) {
    //     let xx = this.props.data
    //     if (xx === null) {
    //         console.log(xx)
    //     } else {
    //         xx = xx.toDateString();
    //         console.log(xx);
    //         const docRef = doc(db, "news", `${xx}`);
    //         const docSnap = await getDoc(docRef);
    //         const stoptimer = docSnap.data().CNN.length;

    //         if (docSnap.exists()) {
    //             console.log("Document data:", docSnap.data().CNN);


    //             for (let i = 0; i < stoptimer; i++) {
    //                 const element = {
    //                     img: docSnap.data().CNN[i].img,
    //                     headline: docSnap.data().CNN[i].headline
    //                 }

    //                 arr.push(element)
    //             }
    //             console.log(arr)
    //             this.state.loading = true;

    //         } else {
    //             // doc.data() will be undefined in this case
    //             console.log("No such document!");
    //         }
    //     }
    // }


    // async componentDidMount() {
    //     let xx = this.props.data
    //     if (xx === null) {
    //         console.log(xx)
    //     } else {
    //         xx = xx.toDateString();
    //         console.log(xx);
    //         const docRef = doc(db, "news", `${xx}`);
    //         const docSnap = await getDoc(docRef);

    //         if (docSnap.exists()) {
    //             console.log("Document data:", docSnap.data().CNN);

    //             this.setState({ loading: false, img: docSnap.data().CNN.img, headline: docSnap.data().CNN.headline })
    //         } else {
    //             // doc.data() will be undefined in this case
    //             console.log("No such document!");
    //         }
    //     }

    // }

    render() {
        const imge = this.state.img
        const head = arr.map((item, index) => {
            return (
                <div key={index}>
                    <h3>{item.headline}</h3>
                </div>
            )
        })
        return (
            <div>
                {this.state.loading ? <div>loading...</div>
                    :
                    <div>
                        <h1>{head}</h1>
                        <img src={imge} alt="" />
                    </div>
                }
            </div>
        )
    }
}

export const Cal = () => {
    const [value, setValue] = useState(null);
    // console.log(value)
    return (
        <div>
            <Calendar value={value} onChange={setValue} />

            <FetchDBnews data={value} />
        </div>
    )
}






