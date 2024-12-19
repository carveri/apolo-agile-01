/*
  Warnings:

  - You are about to drop the `Prueba` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `mediumBacklogId` to the `Historia` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Historia` ADD COLUMN `mediumBacklogId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `Prueba`;

-- CreateTable
CREATE TABLE `MediumBacklog` (
    `id` VARCHAR(191) NOT NULL,
    `nombreProductBacklog` VARCHAR(191) NOT NULL DEFAULT 'Mb',
    `created_at` VARCHAR(191) NOT NULL,
    `hora_at` VARCHAR(191) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Plugin` (
    `id` VARCHAR(191) NOT NULL,
    `nombrePlugin` VARCHAR(191) NOT NULL,
    `created_at` VARCHAR(191) NOT NULL,
    `hora_at` VARCHAR(191) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `Plugin_nombrePlugin_key`(`nombrePlugin`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Historia_mediumBacklogId_fkey` ON `Historia`(`mediumBacklogId`);

-- AddForeignKey
ALTER TABLE `Historia` ADD CONSTRAINT `Historia_mediumBacklogId_fkey` FOREIGN KEY (`mediumBacklogId`) REFERENCES `MediumBacklog`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
