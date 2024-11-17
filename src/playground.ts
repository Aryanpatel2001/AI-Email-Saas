import { db } from "@/server/db";

await db.user.create({
  data: {
    emailAddress: "test12@gmail.com",
    firstName: "elliottee",
    lastName: "chong2",
  },
});

console.log("done");
