import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsString } from "class-validator";

export class CreateTodoDto {
    @ApiProperty()
    @IsString()
    title: string;

    @ApiProperty()
    description: string;
    
    @ApiProperty()
    @IsString()
    status: string;
    
    @ApiProperty()
    @IsDateString()
    deadline: Date;
}
