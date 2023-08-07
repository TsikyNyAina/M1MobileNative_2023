import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { SelectQueryBuilder, Repository, FindManyOptions } from 'typeorm';
import { Media } from './entities/media.entity';
export declare class MediaService {
    #private;
    private readonly repository;
    get query(): SelectQueryBuilder<Media>;
    constructor(repository: Repository<Media>);
    create(createMediaDto: CreateMediaDto): Promise<Media & CreateMediaDto>;
    findAll(option: FindManyOptions<Media>): Promise<Media[]>;
    findOne(id: number): Promise<Media>;
    update(id: number, updateMediaDto: UpdateMediaDto): Promise<import("typeorm").InsertResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
