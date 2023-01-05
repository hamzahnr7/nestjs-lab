import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) {}
    private readonly users = [
        {
            userId: 1,
            username: 'hamzah',
            password: '123456',
          }
    ]

    async findUser(username: string) {
        return this.users.find(user => user.username === username);
    }
    
    async validateUser(username: string, password: string) {
        const user = await this.findUser(username);
        if (user && user.password === password) {
            const payload = {...user};
            return { access_token: this.jwtService.sign(payload) }
        }
        return null;
    }
}
