import { Media } from 'src/media/entities/media.entity';
import { User } from 'src/user/entities';
export declare class Event {
    id: number;
    description: string;
    createdAt: Date;
    DeletedAt: number;
    userId: number;
    user: User;
    media: Media[];
}
