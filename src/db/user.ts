import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export type UserType = {
  name: string
  email: string
}

export async function getUsers() {
  return prisma.user.findMany();
}

export async function postUsers(data: UserType) {
  return prisma.user.create({
    data: data
  })
}

export async function delUsers(id: number) {
  return prisma.user.delete({
    where: {
      id: Number(id),
    }
  })
}

export async function updatalUsers(id: number, data: UserType) {
  return prisma.user.update({
    where: {
      id: Number(id),
    },
    data
  })
}
