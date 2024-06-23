import User from "../domain/user.entity";

export default interface UserGateWay{
    add(user: User): Promise<void>
    get(id: string): Promise<User>
}