import { Body, Controller, Get, HttpStatus, Param, Post, Res, NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { ValidateObjectId } from 'src/shared/pipes/validate-object-id.pipes';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get('all')
    async getUsers(@Res() res) {
        const users = await this.userService.getUsers()
        return res.status(HttpStatus.OK).json(users)
    }

    @Get(':userID')
    async getUser(@Res() res, @Param('userID', new ValidateObjectId()) userID) {
        console.info('查找用户', userID)
        const user = await this.userService.getUser(userID)
        if (!user) throw new NotFoundException('User does not exist!')
        return res.status(HttpStatus.OK).json(user)
    }

    @Post('/create')
    async addUser(@Res() res, @Body() createUserDTO: CreateUserDTO) {
        console.info('新用户', createUserDTO)
        const newUser = await this.userService.addUser(createUserDTO)
        return res.status(HttpStatus.OK).json({
            message: "User has been submitted successfully!",
            user: newUser
        })
    }
}
