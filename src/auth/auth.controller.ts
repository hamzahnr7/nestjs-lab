import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

interface userPass {
    username: string;
    password: string;
}


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    
    @Post('loginUser')
    loginUser(@Body() data: userPass) {
        const user = data.username;
        const pass = data.password;
        return this.authService.validateUser(user, pass);
    }
}
