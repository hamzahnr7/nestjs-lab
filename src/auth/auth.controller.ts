import { Controller, Post, Body, Req } from '@nestjs/common'
import { AuthService } from './auth.service'

interface UserPass {
    username: string
    password: string
}

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('loginUser')
    loginUser(@Body() data: UserPass) {
        const user = data.username
        const pass = data.password
        return this.authService.validateUser(user, pass)
    }

    @Post()
    cekToken(@Req() req: any) {
        const token = req.headers.authorization?.split(' ')[1]
        return this.authService.checkToken(token)
    }
}
