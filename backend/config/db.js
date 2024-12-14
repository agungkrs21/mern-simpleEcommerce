import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        // eslint-disable-next-line no-undef
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        // eslint-disable-next-line no-undef
        process.exit(1); // code 1 berarti gagal, kode 0 berarti berhasil
        
    }
}