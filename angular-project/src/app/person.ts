export class Person {
    public name: string;
    public id: string;

    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    public setInfo(name, id) {
        this.name = name;
        this.id = id;
    }

    public toString(): string {
        let ret: string;

        ret = '{"id":"' + this.id + '","name":"' + this.name + '"}';

        return ret;
    }
}
