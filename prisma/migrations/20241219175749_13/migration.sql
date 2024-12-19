/*
  Warnings:

  - You are about to drop the column `nombreProductBacklog` on the `MediumBacklog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `MediumBacklog` DROP COLUMN `nombreProductBacklog`,
    ADD COLUMN `nombreMediumBacklog` VARCHAR(191) NOT NULL DEFAULT 'Mb';
