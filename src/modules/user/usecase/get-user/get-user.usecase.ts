import User from "../../domain/user.entity";
import UserGateWay from "../../gateway/user.gateway";
import { getUserInputDto } from "./get-user.dto";

export default class GetUserUseCase{
    private _userRepository: UserGateWay

    constructor(userRepository: UserGateWay){
        this._userRepository = userRepository
    }

    async execute(input: getUserInputDto): Promise<User>{
        const user = this._userRepository.get(input.userId)
        return user
    }
}