import User from "../domain/user.entity";

export interface AddUserFacadeInputDto{
    id?: string
    name: string;
    email: string;
    password: string;
    birthDate: Date;
}

export interface GetUserFacadeInputDto{
    id?: string
}

export default interface UserFacadeInterface{
    addUser(input:AddUserFacadeInputDto): Promise<void>
    getUser(input: GetUserFacadeInputDto): Promise<User>
}