// getterSetter example
class User {
    private _name: string;
    constructor(name: string) {
        this._name = name;
    }
    get name(): string {
        return this._name;
    }
    set name(newName: string) {
        if (newName.length > 0) {
            this._name = newName;
        } else {
            console.log("Name cannot be empty");
        }
    }
}

let user = new User("Mir Khan");
console.log("Getter and Setter example:");
console.log(user.name);