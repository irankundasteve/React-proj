const { v4: uuid } = require('uuid');

class BaseRepository {
  constructor(collection) {
    this.collection = collection;
  }

  findAll(filterFn = null) {
    return filterFn ? this.collection.filter(filterFn) : [...this.collection];
  }

  findById(id) {
    return this.collection.find((item) => item.id === id) || null;
  }

  create(payload) {
    const entity = {
      ...payload,
      id: payload.id || uuid(),
      createdAt: payload.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    this.collection.push(entity);
    return entity;
  }

  update(id, patch) {
    const index = this.collection.findIndex((item) => item.id === id);
    if (index === -1) {
      return null;
    }

    this.collection[index] = {
      ...this.collection[index],
      ...patch,
      id,
      updatedAt: new Date().toISOString()
    };

    return this.collection[index];
  }

  remove(id) {
    const index = this.collection.findIndex((item) => item.id === id);
    if (index === -1) {
      return false;
    }
    this.collection.splice(index, 1);
    return true;
  }
}

module.exports = BaseRepository;
