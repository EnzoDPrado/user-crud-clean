import BaseEntity from "../../@shared/domain/entity/base.entity";
import Id from "../../@shared/domain/value-object/id.value-object";

type UserProps = {
    id?: Id
    name: string;
    email: string;
    password: string;
    birthDate: Date;
};

export default class User extends BaseEntity {
  private _name: string;
  private _email: string;
  private _password: string;
  private _birthDate: Date;

  constructor(props: UserProps) {
    super(props.id);

    this._name = props.name;
    this._email = props.email;
    this._password = props.password;
    this._birthDate = props.birthDate;
  }

  get name(): string{
    return this._name
  }

  get email(): string{
    return this._email
  }

  get password(): string{
    return this._password
  }

  get birthDate(): Date{
    return this._birthDate
  }
}
