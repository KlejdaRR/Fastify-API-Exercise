
export class GetExampleDto {
    constructor({ name }) {
        this.name = name;
    }

    /**
     *
     * @param {ExampleEntity} exampleEntity
     * @returns {GetExampleDto}
     */
    static fromExampleEntity(exampleEntity) {
        return new GetExampleDto({
            name: exampleEntity.name,
        });
    }

}
