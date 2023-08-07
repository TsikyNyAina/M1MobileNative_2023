import { ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
export declare const databaseConfigValidator: Joi.ObjectSchema<any>;
export declare const getDatabaseConfig: (configService: ConfigService) => any;
