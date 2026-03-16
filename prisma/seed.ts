import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.table.createMany({
    data: [
      { tableNumber: 1, seats: 2 },
      { tableNumber: 2, seats: 4 },
      { tableNumber: 3, seats: 4 },
      { tableNumber: 4, seats: 6 },
      { tableNumber: 5, seats: 8 },
    ],
    skipDuplicates: true,
  });

  console.log("Tables seeded successfully");
}

main()
  .catch((e) => {
    console.error("Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });