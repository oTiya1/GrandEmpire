import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.table.createMany({
    data: [
      { tableNumber: 1, seats: 2 },
      { tableNumber: 2, seats: 2 },
      { tableNumber: 3, seats: 2 },
      { tableNumber: 4, seats: 2 },

      { tableNumber: 5, seats: 4 },
      { tableNumber: 6, seats: 4 },
      { tableNumber: 7, seats: 4 },
      { tableNumber: 8, seats: 4 },
      { tableNumber: 9, seats: 4 },

      { tableNumber: 10, seats: 6 },
      { tableNumber: 11, seats: 6 },
      { tableNumber: 12, seats: 6 },
    ],
  });

  console.log("Tables seeded successfully");
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());