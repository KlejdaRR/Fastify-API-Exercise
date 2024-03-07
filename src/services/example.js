import exampleRepository from '../repositories/example.js';

export default {
   async getExample() {
         return exampleRepository.getExample();
   }
}
