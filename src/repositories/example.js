import {readFile} from 'fs/promises';
import {ExampleEntity} from './entities/example.js';

// example repository
export default {
    async getExample() {
        const buffer = await readFile(new URL('./files/example.json', import.meta.url));
        /** @type {[]} */
        const exampleData = JSON.parse(buffer.toString());
        return exampleData.map(ExampleEntity.fromJson);
    }
};
