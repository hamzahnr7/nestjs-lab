import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserService } from 'src/user/user.service'

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserService
    ) {}

    async validateUser(username: string, password: string) {
        const user = await this.userService.loginUser(username, password)
        if (user && user.password === password && user.username === username) {
            const payload = { id: user.id }
            return { access_token: this.jwtService.sign(payload) }
        }
        return null
    }

    async checkToken(token: string) {
        const data = this.jwtService.verify(token)
        if (data) {
            return data
        }
        return 'Token Invalid'
    }
}
