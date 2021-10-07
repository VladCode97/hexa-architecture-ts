import { Container } from 'typedi';
import { createExpressServer, useContainer } from 'routing-controllers';
import { UserController } from '../controllers/user-controller';

export class ExpressConfig {

    public init(): void {
        useContainer(Container)
        createExpressServer({
            controllers: [
                UserController
            ]
        }).listen(process.env.PORT, () => console.log(`http://localhost:${process.env.PORT}`));
    }


}

