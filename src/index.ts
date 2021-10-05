import { CreateUserUseCase } from './feature/application/create-user-use-case';
import { ViewUserCase } from './feature/application/view-user-use-case';
import { UserArrayRepository } from './feature/infrastructure/user-array-repository';

class Index {
    main(_args?: any) {
        const userArrayRepository = new UserArrayRepository();
        const viewUserCase = new ViewUserCase(userArrayRepository);
        const createUserUseCase = new CreateUserUseCase(userArrayRepository);
        console.log(createUserUseCase.createAll({
            name: 'Celmira Cifuentes',
            email: 'cf@gmail.com',
            password: '323sd.ds',
            age: 78
        }));
    }
}

const index = new Index();
index.main();