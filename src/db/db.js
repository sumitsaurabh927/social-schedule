// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.NEXT_MONGO_URL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log(process.env.NEXT_MONGO_URL);
//         console.log('connected to db');
//     } catch (err) {
//         console.log('connect db err: ', err.message);
//         process.exit(1);
//     }
// }

// connectDB();

// export default connectDB;