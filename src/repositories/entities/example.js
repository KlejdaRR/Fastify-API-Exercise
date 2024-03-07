
export class ExampleEntity {
    constructor({ id, name }) {
        this.id = id;
        this.name = name;
    }

    static fromJson(json) {
        return new ExampleEntity({
            id: json.id,
            name: json.name
        });
    }
}
