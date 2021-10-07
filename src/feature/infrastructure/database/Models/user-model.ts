import { IUserDocument } from './../Documents/user-document';
import { model, Model } from 'mongoose';
import { UserSchema } from '../Schemas/user-schema';

export const UserModel: Model<IUserDocument> = model('user', UserSchema);