class GenericRepository {
    constructor(model) {
      this.model = model;
    }
  
    async GetEverythingAsync() {
      return await this.model.findAll();
    }
  
    async CreateAsync(data) {
      return await this.model.create(data);
    }
  
    async UpdateAsync(id, data) {
      const instance = await this.model.findByPk(id);
      if (instance) {
        return await instance.update(data);
      }
      return null;
    }
  
    async DeleteAsync(id) {
      const instance = await this.model.findByPk(id);
      if (instance) {
        await instance.destroy();
        return true;
      }
      return false;
    }
  
    async VerifyDataExistenceAsync(query) {
      const instance = await this.model.findOne({ where: query });
      return instance !== null;
    }
}
  
export default GenericRepository;
  