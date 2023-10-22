import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    onSnapshot,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "./firebase-config";

const useHandleForm = (initialVal = {}) => {
    const [value, setValue] = useState(initialVal);
    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        });
    };
    return {
        value,
        handleChange,
    };
};

const FirebaseApp = () => {
    const postRef = collection(db, "posts");
    const { value, handleChange } = useHandleForm();
    const [postId, setPostId] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // getDocs(postRef)
        //     .then((snapshot) => {
        //         const postsArr = [];
        //         snapshot.docs.forEach((doc) => {
        //             postsArr.push({ id: doc.id, ...doc.data() });
        //         });
        //         setPosts(postsArr);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });

        onSnapshot(postRef, (snapshot) => {
            const postArr = [];
            snapshot.docs.forEach((doc) => {
                postArr.push({ id: doc.id, ...doc.data() });
                setPosts(postArr);
            });
        });
    }, [postRef]);

    const handleSubmit = (e) => {
        e.preventDefault();
        addDoc(postRef, { ...value })
            .then(() => {
                console.log("success");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleSubmitDeleteForm = async (e) => {
        e.preventDefault();
        if (postId) {
            try {
                const deleteRef = doc(db, "posts", postId);
                await deleteDoc(deleteRef);
                console.log("success");
            } catch (err) {
                console.log(
                    "🚀 ~ file: FirebaseApp.js:53 ~ handleSubmitDeleteForm ~ err:",
                    err
                );
            }
        }
    };

    return (
        <div className="p-10">
            <div className="mx-auto w-full max-w-[500px] shadow-md rounded p-5 mb-5">
                <form action="submit">
                    <input
                        onChange={handleChange}
                        name="title"
                        type="text"
                        className="w-full p-3 mb-5 border border-gray-400 rounded outline-none"
                        placeholder="Enter Title"
                    />
                    <input
                        onChange={handleChange}
                        name="author"
                        type="text"
                        className="w-full p-3 mb-5 border border-gray-400 rounded outline-none"
                        placeholder="Enter Author"
                    />

                    <button
                        onClick={handleSubmit}
                        className="w-full p-3 text-white bg-blue-500 rounded">
                        Submit
                    </button>
                </form>
            </div>
            <div className="mx-auto mb-5 w-full max-w-[500px] shadow-md rounded p-5">
                <form action="submit">
                    <input
                        value={postId}
                        onChange={(e) => setPostId(e.target.value)}
                        type="text"
                        className="w-full p-3 mb-5 border border-gray-400 rounded outline-none"
                        placeholder="Enter ID"
                    />
                    <button
                        onClick={handleSubmitDeleteForm}
                        className="w-full p-3 text-white bg-red-500 rounded">
                        Remove post
                    </button>
                </form>
            </div>

            <div className="mx-auto w-full max-w-[500px] shadow-md rounded p-5">
                {posts.length > 0 &&
                    posts.map((item) => {
                        return (
                            <p key={item.id}>
                                {item.title} - {item.author}
                            </p>
                        );
                    })}
            </div>
        </div>
    );
};

export default FirebaseApp;
