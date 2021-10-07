import 'reflect-metadata';
import { ExpressConfig } from './feature/infrastructure/config/express-config';
import { DatabaseMoongose } from './feature/infrastructure/database/connect-database';
import * as dotEnv from 'dotenv';

class Index {

    private expressConfig: ExpressConfig;

    constructor() {
        dotEnv.config();
        this.expressConfig = new ExpressConfig();
    }

    init(): void {
        this.expressConfig.init();
        DatabaseMoongose.getInstance().connectionMongoose(process.env.URL_MONGO);
    }
}

const index = new Index();
index.init();