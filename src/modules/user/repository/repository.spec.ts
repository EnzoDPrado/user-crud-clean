import { db } from "../../../knex_config/knexInstance";
import { AddUserInputDto } from "../usecase/add-user/add-user.dto"
import AddUserUseCase from "../usecase/add-user/add-user.usecase"
import UserRepository from "./repository"

describe("Test repository", () => {

    const userRepository = new UserRepository();

    afterAll(async () => {
        await db.destroy();
      });

    it("Should add a user", async () => {
        const usecase = new AddUserUseCase(userRepository)

        const user: AddUserInputDto = {
            id: "1",
            name: "Enzo D. Prado",
            email: "enzodp1501@gmail.com",
            birthDate: new Date(2006, 0, 15),
            password: "123123"
        }

        const result = await usecase.execute(user)
        expect(result.id).toBe("1")
    })
})