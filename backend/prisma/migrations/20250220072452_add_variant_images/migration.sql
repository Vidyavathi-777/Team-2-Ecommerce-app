/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `ProductVariant` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ProductImage" ADD COLUMN     "variantId" TEXT;

-- AlterTable
ALTER TABLE "ProductVariant" DROP COLUMN "imageUrl";

-- AddForeignKey
ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_variantId_fkey" FOREIGN KEY ("variantId") REFERENCES "ProductVariant"("id") ON DELETE SET NULL ON UPDATE CASCADE;
