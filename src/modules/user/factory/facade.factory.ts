import UserFacade from "../facade/user.facade";
import UserRepository from "../repository/repository";
import AddUserUseCase from "../usecase/add-user/add-user.usecase";
import GetUserUseCase from "../usecase/get-user/get-user.usecase";

export default class UserFacadeFactory{
    static create(){
        const userRepository = new UserRepository()
        const addUserUseCase = new AddUserUseCase(userRepository)
        const getUserUseCase = new GetUserUseCase(userRepository)
        const userFacade = new UserFacade({
            addUseCase: addUserUseCase,
            getUserUseCase: getUserUseCase
        })
        return userFacade
    }
}