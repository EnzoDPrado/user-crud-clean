import Id from "../../../@shared/domain/value-object/id.value-object";
import User from "../../domain/user.entity";
import UserGateWay from "../../gateway/user.gateway";
import  { AddUserInputDto, AddUserOutPutDto }  from "./add-user.dto";

export default class AddUserUseCase{
    private _userRepository: UserGateWay

    constructor(userRepository: UserGateWay){
        this._userRepository = userRepository
    }

    async execute(input:AddUserInputDto): Promise<AddUserOutPutDto>{
        const user = new User({
            id: new Id(input.id),
            name: input.name,
            email: input.email,
            password: input.password,
            birthDate: input.birthDate,
        })

        this._userRepository.add(user)

        return {
            id: user.id.id,
            name: user.name,
            email: user.email,
            password: user.password,
            birthDate: user.birthDate,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        }
    }
}