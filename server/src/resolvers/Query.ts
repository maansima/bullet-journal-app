import { Context, getUserId } from "../utils"

export default {
  me: (parent, args, ctx: Context, info) => {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info)
  },
  async taskFeed(parent, args, ctx: Context, info) {
    return await ctx.db.query.tasks(
      {
        orderBy: args.orderBy
      },
      info
    )
  }
}
