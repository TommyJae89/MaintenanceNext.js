-- CreateTable
CREATE TABLE "Task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "taskDescription" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "customerEmail" TEXT NOT NULL,
    "customerPhone" TEXT NOT NULL,
    "receiveDate" DATETIME NOT NULL,
    "priority" TEXT NOT NULL,
    "productColor" TEXT NOT NULL,
    "productBrand" TEXT NOT NULL,
    "productType" TEXT NOT NULL,
    "problemFound" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
