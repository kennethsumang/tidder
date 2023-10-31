-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "subreddits" TEXT NOT NULL DEFAULT '["reddit"]',
    "lastAccessedOn" DATETIME
);
