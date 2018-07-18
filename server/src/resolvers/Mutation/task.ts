import * as bcrypt from "bcryptjs"
import * as jwt from "jsonwebtoken"
import { Context, getUserId } from "../../utils"

export const task = {
  async createTask(parent, args, ctx: Context, info) {
    const id = getUserId(ctx)

    const task = await ctx.db.mutation.createTask(
      {
        data: {
          text: args.text,
          author: {
            connect: {
              id: id
            }
          }
        }
      },
      info
    )
    return task
  },
  async follow(parent, args, ctx, info) {
    const id = getUserId(ctx)
    const updatedUser = await ctx.db.mutation.updateUser(
      {
        data: {
          following: {
            connect: {
              username: args.follow_username
            }
          }
        },
        where: {
          id: id
        }
      },
      info
    )
    return updatedUser
  },
  async unfollow(parent, args, ctx, info) {
    const id = getUserId(ctx)
    const updatedUser = await ctx.db.mutation.updateUser(
      {
        data: {
          following: {
            disconnect: {
              username: args.unfollow_username
            }
          }
        },
        where: {
          id: id
        }
      },
      info
    )
    return updatedUser
  }
}
