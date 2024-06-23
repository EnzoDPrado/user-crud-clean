import GetUserUseCase from "./get-user.usecase"

const MockRepository = () => {
    return {
        add: jest.fn(),
        get: jest.fn()
    }
}

describe("get user usecase test", () => {
    it("should call the get method", () => {
        const userRepository = MockRepository()
        const getUser = new GetUserUseCase(userRepository)

        getUser.execute({userId: "1"})

        expect(userRepository.get).toHaveBeenCalled()

    })
})