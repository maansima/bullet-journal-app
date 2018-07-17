import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { Context, getUserId } from "../../utils";

export const task = {
  async createTask(parent, args, ctx: Context, info) {
    const id = getUserId(ctx);
    const task = await ctx.db.mutation.createTask(
      {
        data: {
          text: args.text, 
          status: args.status, 
          author: {
            connect: {
              id: id
            }
          }
        }
      },
      info
    );
    return task;
  }
};