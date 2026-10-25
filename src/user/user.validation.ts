import z from "zod"

export const createUserSchema = z.strictObject({
  name: z.string(),
  age: z.number(),
  email: z.email()
})

export const createUserQuerySchema = z.strictObject({
  name: z.string(),
})

export type CreateUserDto = z.infer<typeof createUserSchema>