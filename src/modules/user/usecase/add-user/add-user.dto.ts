export interface AddUserInputDto{
    id?: string
    name: string;
    email: string;
    password: string;
    birthDate: Date;
}

export interface AddUserOutPutDto{
    id?: string
    name: string;
    email: string;
    password: string;
    birthDate: Date;
    createdAt: Date
    updatedAt: Date
}