import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {  // Corrected
        type: String,
        required: true,
        minlength: [3, "First name must contain at least 3 characters!"],  // Fixed spelling
        maxlength: [30, "First name cannot exceed 30 characters!"],
    },
    lastName: {  // Corrected
        type: String,
        required: true,
        minlength: [3, "Last name must contain at least 3 characters!"],  // Fixed spelling
        maxlength: [30, "Last name cannot exceed 30 characters!"],
    },
    email: {  // Corrected
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid email!"],
    },
    phone: {
        type: String,
        required: true,
        minlength: [10, "Phone number must contain exactly 10 digits."],  // Fixed spelling
        maxlength: [10, "Phone number must contain exactly 10 digits."],  // Fixed spelling
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
