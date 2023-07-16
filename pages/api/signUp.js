// import bcrypt from 'bcrypt';
// import User from '@/models/user';

// export default async function signUpController(req, res) {
//     try {
//         if (req.method === 'POST') {
//             const { name, email, password } = req.body;
//             if (!name || !email || !password) {
//                 return res.status(400).json({ message: 'All fields are required' });
//             }
//             const hashPass = await bcrypt.hash(password, 12);
//             const user = new User({
//                 name,
//                 email,
//                 password: hashPass,
//             });
//             const savedUser = await user.save();
//             return res.status(201).json(savedUser);
//         }
//     } catch (error) {
//         console.log('signup function error:', error.message);
//         return res.status(500).json({ message: 'Error in signUp function' });
//     }
// };