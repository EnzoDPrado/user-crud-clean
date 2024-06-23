import UserGateWay from "../../gateway/user.gateway"
import { AddUserInputDto } from "./add-user.dto"
import AddUserUseCase from "./add-user.usecase"

const mockRepository = () => {
    return {
        add: jest.fn(),
        get: jest.fn()
    }
}

describe("add user tests", () => {
    it("Should add a user", async () => {
        const userRepository = mockRepository()
        const usecase = new AddUserUseCase(userRepository)

        const user: AddUserInputDto = {
            id: "1",
            name: "Enzo D. Prado",
            email: "enzodp1501@gmail.com",
            birthDate: new Date(2006, 0, 15),
            password: "123123"
        }

        const result = await usecase.execute(user)

        expect(userRepository.add).toHaveBeenCalled()
        expect(result.id).toBe("1")
    })
})