-- AlterTable
ALTER TABLE `Historia` ADD COLUMN `parametroDiscrepancia` INTEGER NOT NULL DEFAULT 10,
    ADD COLUMN `pesoDiscrepancia` INTEGER NOT NULL DEFAULT 100;
