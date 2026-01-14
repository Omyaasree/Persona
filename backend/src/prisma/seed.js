import prisma from "../lib/prisma.js";

async function main() {
  const existing = await prisma.user.findUnique({
    where: { id: "system" },
  });

  if (!existing) {
    await prisma.user.create({
      data: {
        id: "system",
        username: "system",
        email: "system@persona.local",
        password: "not-used",
      },
    });

    console.log("✅ System user created");
  } else {
    console.log("ℹ️ System user already exists");
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
