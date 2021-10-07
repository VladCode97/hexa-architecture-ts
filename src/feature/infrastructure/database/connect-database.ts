import { connect } from 'mongoose';
import * as dotEnv from 'dotenv';

export class DatabaseMoongose {

    private static databaseMongoose: DatabaseMoongose = undefined;

    private constructor() { }

    public static getInstance(): DatabaseMoongose {
        if (DatabaseMoongose.databaseMongoose === undefined) {
            DatabaseMoongose.databaseMongoose = new DatabaseMoongose();
        }
        return DatabaseMoongose.databaseMongoose;
    }

    public connectionMongoose(urlMongo: string) {
        return connect(urlMongo);
    }

}