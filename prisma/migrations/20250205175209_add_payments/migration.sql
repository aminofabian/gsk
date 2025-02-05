/*
  Warnings:

  - The values [ACTIVE,CANCELLED,EXPIRED] on the enum `PaymentStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PaymentStatus_new" AS ENUM ('PENDING', 'COMPLETED', 'FAILED');
ALTER TABLE "subscriptions" ALTER COLUMN "status" TYPE "PaymentStatus_new" USING ("status"::text::"PaymentStatus_new");
ALTER TABLE "payments" ALTER COLUMN "status" TYPE "PaymentStatus_new" USING ("status"::text::"PaymentStatus_new");
ALTER TYPE "PaymentStatus" RENAME TO "PaymentStatus_old";
ALTER TYPE "PaymentStatus_new" RENAME TO "PaymentStatus";
DROP TYPE "PaymentStatus_old";
COMMIT;

-- CreateTable
CREATE TABLE "payments" (
    "id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "status" "PaymentStatus" NOT NULL,
    "transactionId" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "payments_transactionId_key" ON "payments"("transactionId");

-- CreateIndex
CREATE INDEX "payments_userId_idx" ON "payments"("userId");
