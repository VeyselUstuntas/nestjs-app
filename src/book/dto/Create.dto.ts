import { IsNotEmpty, IsNumber, IsString, Length } from "class-validator";

export class CreateDto {

    @IsNotEmpty({message:"Kitap Başlığı girin"})
    @IsString()
    @Length(3,100)
    name: string;

    @IsNotEmpty()
    @IsString()
    @Length(3,1000)
    content: string;

    @IsNotEmpty()
    @IsNumber()
    pageCount: number;

}