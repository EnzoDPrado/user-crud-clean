import UseCaseInterface from "../../@shared/domain/usecase/use-case.interface";
import User from "../domain/user.entity";
import UserFacadeInterface, { AddUserFacadeInputDto, GetUserFacadeInputDto } from "./user.facade.interface";

export interface UseCasesProps{
    addUseCase: UseCaseInterface
    getUserUseCase: UseCaseInterface
}

export default class UserFacade implements UserFacadeInterface{

    private _addUseCase: UseCaseInterface
    private _getUserUseCase: UseCaseInterface

    constructor(usecasesProps: UseCasesProps){
        this._addUseCase = usecasesProps.addUseCase
        this._getUserUseCase = usecasesProps.getUserUseCase
    }

    addUser(input: AddUserFacadeInputDto): Promise<void> {
        return this._addUseCase.execute(input)
    }
    getUser(input: GetUserFacadeInputDto): Promise<User> {
        return this._getUserUseCase.execute(input)
    }
}