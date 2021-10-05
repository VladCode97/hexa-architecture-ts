import { ViewUserCase } from './src/feature/application/view-user-use-case';
import { UserArrayRepository } from './src/feature/infrastructure/user-array-repository';

class Index {
    main(args?: any) {
        const viewUserCase = new ViewUserCase(new UserArrayRepository());
        console.log(viewUserCase.viewAllUsers());
    }
}

const index = new Index();
index.main();