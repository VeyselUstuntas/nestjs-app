import { IsEmail, IsNotEmpty, IsNumber, IsString, Length } from "class-validator";

export class CreateDto {
    
    @IsString()
    @IsNotEmpty({message:"Başlık Boş Bırakılamaz!!"})
    @Length(5,600,{message:"Başlık 5 ile 600 karakter aralığında olmalıdır."})
    title: string;

    @IsString()
    @IsNotEmpty({message:"Blog İçerik Boş Bırakılamaz!!"})
    @Length(100,6000,{message:"Blog içeriği 100 ile 6000 karakter aralığında olmalıdır."})
    content: string;   

    // @IsEmail()
    // @IsNumber()

}