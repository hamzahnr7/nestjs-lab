import { IsNotEmpty } from "class-validator";

export class GetToken {
    @IsNotEmpty()
    grant_type: string;
    
    @IsNotEmpty()
    client_id: string;

    @IsNotEmpty()
    client_secret: string;    
}

export class GetAuthToken {
    @IsNotEmpty()
    payload: any;
    
    @IsNotEmpty()
    bearer: any;
    
}