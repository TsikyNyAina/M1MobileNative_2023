import { MediaService } from './media.service';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { File } from 'multer';
import { Media } from './entities/media.entity';
import { Option } from 'src/utils/Option';
export declare class MediaController {
    private readonly mediaService;
    constructor(mediaService: MediaService);
    create(file: File, createMediaDto: CreateMediaDto): Promise<Media & CreateMediaDto>;
    findAll(option: Option): Promise<Media[]>;
    findOne(id: string): Promise<Media>;
    update(id: string, updateMediaDto: UpdateMediaDto): Promise<import("typeorm").InsertResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
