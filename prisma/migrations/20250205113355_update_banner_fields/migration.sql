/*
  Warnings:

  - You are about to drop the column `cta` on the `banners` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `banners` table. All the data in the column will be lost.
  - You are about to drop the column `link` on the `banners` table. All the data in the column will be lost.
  - Added the required column `ctaLink` to the `banners` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ctaText` to the `banners` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `banners` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `banners` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subtitle` to the `banners` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "banners" DROP COLUMN "cta",
DROP COLUMN "image",
DROP COLUMN "link",
ADD COLUMN     "ctaLink" TEXT NOT NULL,
ADD COLUMN     "ctaText" TEXT NOT NULL,
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "subtitle" TEXT NOT NULL,
ALTER COLUMN "order" DROP DEFAULT;
