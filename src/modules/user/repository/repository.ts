import User from "../domain/user.entity";
import UserGateWay from "../gateway/user.gateway";
import { db } from "../../../knex_config/knexInstance";

export default class UserRepository implements UserGateWay {
  async add(user: User): Promise<void> {
    try {
      await db("tbl_user").insert({
        id: user.id.id,
        name: user.name,
        email: user.email,
        password: user.password,
        birthDate: user.birthDate,
      });
    } catch (error) {
      throw new Error(`Error during operation ${error}`);
    }
  }

  async get(id: string): Promise<User> {
    const result: User = await db("tbl_user").where({ id }).first();
    if (!result) {
      throw new Error("User not found.");
    }
    return new User({
      id: result.id,
      email: result.email,
      birthDate: result.birthDate,
      name: result.name,
      password: result.password,
    });
  }
}
