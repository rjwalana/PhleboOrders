const PhleboOrder = require("../models/PhleboOrder");

class PhleboOrderDataServiceProvider {
  constructor() {}

  async readallorders() {
    const allorders = await PhleboOrder.find({});
    return await allorders;
  }

  async readorder(id) {
    const order = await PhleboOrder.findById(id, {});
    return await order;
  }

  async create(orderData) {
    const phleboOrder = new PhleboOrder(orderData);
    return await phleboOrder.save();
  }

  async update(id, updatedorderData) {
    const updatedorder = await PhleboOrder.findByIdAndUpdate(
      id,
      updatedorderData
    );
    return await updatedorder;
  }

  async delete(id) {
    const deletedorder = await PhleboOrder.findByIdAndDelete(id, {});
    return await deletedorder;
  }

  async paginate(page, size) {
    const getPagination = (page, size) => {
      const limit = size ? +size : 3;
      const offset = page ? page * limit : 0;

      return { limit, offset };
    };
    const { limit, offset } = getPagination(page, size);

    const data = await PhleboOrder.paginate({}, { limit, offset });
    return {
      totalItems: data.totalDocs,
      PhleboOrders: data.docs,
      totalPages: data.totalPages,
      currentPage: data.page - 1,
    };
  }
}

module.exports = new PhleboOrderDataServiceProvider();
// export default new PhleboOrderDataServiceProvider();
