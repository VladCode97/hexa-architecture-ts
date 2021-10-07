import { IUser } from '../../../domain/entities/user-entity';
import { Document } from 'mongoose';

export interface IUserDocument extends Document, IUser { }