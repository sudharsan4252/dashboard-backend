import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();
async function main() {
  // create two dummy articles
  const post1 = await prisma.article.upsert({
    where: { email: "sudharsan4252@gmail.com" }, // Assuming email is unique
    update: {},
    create: {
      fname: 'sudharsan',
      lname: 'P',
      email: "sudharsan4252@gmail.com",
      Dob: "2004-02-25",
      Rollno:"2ithh49",
    },
  });

  const post2 = await prisma.article.upsert({
    where: { email: "sudharsan123@gmail.com" }, // Assuming email is unique
    update: {},
    create: {
      fname: 'sudharsan',
      lname: 'P',
      email: "sudharsan123@gmail.com",
      Dob: "2004-02-25",
      Rollno:"343438u3"
    },
  });

  console.log({ post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
