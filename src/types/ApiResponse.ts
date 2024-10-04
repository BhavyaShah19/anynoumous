import { Message } from "@/model/User";
export interface ApiResonse{
    success:boolean;
    message:String;
    isAcceptingMessage?:boolean;
    messages?:Array<Message>;
}