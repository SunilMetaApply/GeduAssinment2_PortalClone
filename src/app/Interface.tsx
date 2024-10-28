
export interface LoginFormValues{
    email: string;
    password: string;
}

export interface WhatsAppButtonProps {
    phoneNumber: string;
    message: string;
  }

export interface AddStudent {
    fName: string;
    lName: string;
    email: string;
    alternateEmail: string;
    contact: number | null; 
    gender?: string;
    dob?:number | null;
    maritalStatus:string;
    firstLanguage:string;
    country:string;
    passportNumber:string;
    passportExpDate:number|null
}