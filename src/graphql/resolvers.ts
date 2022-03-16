export const resolvers = {
  Query: {
    users: (_parent: any, { search }: String, ctx: any) => {
      console.log("ALGO");
      if (search) {
        return ctx.prisma.users.findMany({
          where: {
            OR: [
              {
                username: {
                  contains: search.toString().toLocaleLowerCase(),
                },
              },
              {
                email: {
                  contains: search.toString().toLocaleLowerCase(),
                },
              },
            ],
          },
        });
      }

      console.log("GENERAL");
      return ctx.prisma.users.findMany();
    },
  },
};
