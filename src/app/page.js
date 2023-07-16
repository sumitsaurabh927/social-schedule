// import connectDB from "@/db/db";

// connectDB.then(() => {
//   console.log('running!');
// })

// const startApp = async () => {
//   try {
//     await connectDB();
//   } catch (err) {
//     console.log('error from main file', err);
//   }
// }
"use client";
import dotenv from "dotenv";
import { useEffect } from "react";
dotenv.config();
export default function Home() {
  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_ENV_ID);
  }, []);
  return (
    <div>
      hi
    </div>
  )
}
