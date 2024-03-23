import express from 'express';
import dotenv from 'dotenv';

import twilio from 'twilio';
import bodyParser from 'body-parser';



const PORT= 3000;
const app = express();

dotenv.config();

const accountSid=process.env.ACCOUNT_SID;
const authToken=process.env.AUTH_TOKEN;
const verifySid=process.env.VERIFY_SID;
const client = twilio(accountSid, authToken);

app.use(bodyParser.urlencoded({ extended: true }));

const verifyOTP = async (number, otpCode) => {
    try {
        const verification_check = await client.verify.v2.services(verifySid)
            .verificationChecks.create({ to: number, code: otpCode });
        return verification_check.status;
    } catch (error) 
    {
        console.error("Error during OTP verification:", error);
        throw error;
    }
};

app.post('/sendOTP', async (req, res) => {
    const { number } = req.body;
    console.log(number);
    try {
        const verification = await client.verify.v2.services(verifySid)
            .verifications.create({ to: number, channel: "sms" });
        console.log(verification.status);
        res.send("OTP sent successfully");
    } 
    catch (error) 
    {
        console.error("Error sending OTP:", error);
        res.status(500).send("An error occurred while sending OTP");
    }
});

app.post('/verifyOTP', async (req, res) => {
    const { number, otpCode } = req.body;
    console.log(number, otpCode);
    try {
        const verificationStatus = await verifyOTP(number, otpCode);
        if (verificationStatus === "approved") 
        {
            res.send("OTP verified successfully");
        } 
        else if (verificationStatus === "pending") 
        {
            res.send("OTP verification is pending");
        } 
        else 
        {
            res.send("OTP verification failed");
        }
    } 
    catch (error) 
    {
        console.error("Error verifying OTP:", error);
        res.status(500).send("An error occurred during OTP verification");
    }
});



app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
    });



