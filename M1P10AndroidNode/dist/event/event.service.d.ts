import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';
import { FindManyOptions, Repository, SelectQueryBuilder } from 'typeorm';
export declare class EventService {
    #private;
    private readonly repository;
    get query(): SelectQueryBuilder<Event>;
    constructor(repository: Repository<Event>);
    create(createEventDto: CreateEventDto): Promise<Event & CreateEventDto>;
    findAll(option: FindManyOptions<Event>): Promise<Event[]>;
    findOne(id: number): Promise<Event>;
    update(id: number, updateEventDto: UpdateEventDto): Promise<import("typeorm").InsertResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
