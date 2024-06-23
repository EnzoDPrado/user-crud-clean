import Id from "../value-object/id.value-object"
import AggregateRoot from "./aggregate-root.interface"

export default class BaseEntity implements AggregateRoot{
    private _id: Id
    private _createdAt: Date
    private _updateadAt: Date


    constructor(id?: Id){
        this._id = id
        this._createdAt = new Date()
        this._updateadAt = new Date()
    }

    get id(): Id{
        return this._id
    }

    get createdAt():Date{
        return this._createdAt
    }
    get updatedAt():Date{
        return this._updateadAt
    }

    set updatedAt(updatedAt: Date){
        this._updateadAt = updatedAt
    }

}