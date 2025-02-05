/*
  Warnings:

  - You are about to drop the column `ctaLink` on the `banners` table. All the data in the column will be lost.
  - You are about to drop the column `ctaText` on the `banners` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `banners` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `banners` table. All the data in the column will be lost.
  - You are about to drop the column `subtitle` on the `banners` table. All the data in the column will be lost.
  - Added the required column `cta` to the `banners` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `banners` table without a default value. This is not possible if the table is not empty.
  - Added the required column `link` to the `banners` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "banners" DROP COLUMN "ctaLink",
DROP COLUMN "ctaText",
DROP COLUMN "date",
DROP COLUMN "imageUrl",
DROP COLUMN "subtitle",
ADD COLUMN     "cta" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "link" TEXT NOT NULL,
ALTER COLUMN "order" SET DEFAULT 0;
