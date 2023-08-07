import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FindManyOptions } from 'typeorm';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import("./entities").User & CreateUserDto>;
    findAll(option: FindManyOptions): Promise<import("./entities").User[]>;
    findOne(id: string): Promise<import("./entities").User>;
    findOneBy(username: string, password: string): Promise<import("./entities").User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("typeorm").InsertResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
