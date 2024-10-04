import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResonse } from "@/types/ApiResponse";
import { string } from "zod";

export async function sendVerificationEmail(
    email: string,
    username:string,
    verifyCode:string
):Promise<ApiResonse>{
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Mystry message | Verfication Email',
            react: VerificationEmail({username,otp:verifyCode}),
          });
        return {success:true,message:'verification email send successfuly'}
    } catch (emailError) {
        console.error("Error sending verification Email",emailError);
        return {success:false,message:'Failed to send verification email'}
    }
}