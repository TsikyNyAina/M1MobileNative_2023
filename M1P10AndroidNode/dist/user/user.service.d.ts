import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities';
import { FindManyOptions, Repository, SelectQueryBuilder } from 'typeorm';
export declare class UserService {
    #private;
    private readonly repository;
    get query(): SelectQueryBuilder<User>;
    constructor(repository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<User & CreateUserDto>;
    findAll(option: FindManyOptions<User>): Promise<User[]>;
    findOne(id: number): Promise<User>;
    findOneBy(usernom: string, mdp: string): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<import("typeorm").InsertResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
