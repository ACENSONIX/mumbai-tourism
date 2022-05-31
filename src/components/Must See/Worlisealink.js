import React from "react";
import { useState, useEffect } from "react";
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { db } from '../../firebase-config';
const Worlisealink = () => {
    const [usersComment, setUsersComment] = useState([]);
    const [comments, setComments] = useState("");
    const userCollectionRef = collection(db, "Worlisealink");
    useEffect(() => {
        const getUsersComments = async () => {
            try {
                const data = await getDocs(userCollectionRef);
                setUsersComment(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
                console.log(usersComment);
            } catch (error) {
                console.log(error);
            }
        };
        getUsersComments();
    });
    const Post = async () => {
        await addDoc(userCollectionRef, { Name: "Sahil", Comment: comments });
    };
    return (
        <>
            <h1>This is must see</h1>
            <div className="flex justify-center">
                <div className="mb-3 xl:w-96">
                    <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label inline-block mb-2 text-gray-700"
                    >
                        Write your Review Here
                    </label>
                    <textarea onChange={(e) => {
                        setComments(e.target.value);
                    }}
                        className="form-control
  block
  w-full
  px-3
  py-1.5
  text-base
  font-normal
  text-gray-700
  bg-white bg-clip-padding
  border border-solid border-gray-300
  rounded
  transition
  ease-in-out
  m-0
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
"
                        id="exampleFormControlTextarea1"
                        rows={3}
                        placeholder="Your message"
                        defaultValue={""}
                    />
                </div>
            </div>
            <div className="flex space-x-2 justify-center">
                <button onClick={Post}
                    type="button"
                    className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                Post
                </button>
            </div>
            {
                usersComment.map((usersComment, index) => {
                    return (
                        <div key={index}>
                            <h1>{usersComment.Name + ' : ' + usersComment.Comment}</h1>
                        </div>
                    );
                })
            }
        </>
    );
};
export default Worlisealink;