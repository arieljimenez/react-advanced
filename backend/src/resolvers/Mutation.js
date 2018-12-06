const mutations = {
  async createItem(parent, args, ctx, info){
    //TODO: check if the user is logged in

    const items = await ctx.db.mutation.createItem({
      data: {
        ...args
      }
    }, info);

    return items;
  }
};

module.exports = mutations;
