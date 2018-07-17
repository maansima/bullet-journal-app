import { extractFragmentReplacements } from "prisma-binding"
import Query from "./Query"
import { auth } from "./Mutation/auth"
import { AuthPayload } from "./AuthPayload"
import { task } from "./Mutation/task"

export const resolvers = {
  Query,
  Mutation: {
    ...auth,
    ...task
   
  },
  AuthPayload
}

export const fragmentReplacements = extractFragmentReplacements(resolvers)
