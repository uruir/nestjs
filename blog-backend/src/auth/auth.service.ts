import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) { }
    
    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.getUserByName(username)
        if (user && user.password === password) {
            const {username, gender, birthdate} = user
            return {
                username,
                gender,
                birthdate
            }
        }
        return {username: undefined}
    }
    
    async login(user: any) {
        const payload = { username: user.username, sub: user.userId }
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
