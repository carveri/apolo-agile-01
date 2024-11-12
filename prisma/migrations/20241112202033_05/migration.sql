/*
  Warnings:

  - You are about to drop the column `parametroDiscrepancia` on the `Historia` table. All the data in the column will be lost.
  - You are about to drop the column `pesoDiscrepancia` on the `Historia` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Historia` DROP COLUMN `parametroDiscrepancia`,
    DROP COLUMN `pesoDiscrepancia`,
    ADD COLUMN `equipo3` INTEGER NOT NULL DEFAULT 10,
    ADD COLUMN `peso1` INTEGER NOT NULL DEFAULT 100,
    ADD COLUMN `peso2` INTEGER NOT NULL DEFAULT 100,
    ADD COLUMN `peso3` INTEGER NOT NULL DEFAULT 100,
    ADD COLUMN `presupuesto2` INTEGER NOT NULL DEFAULT 10,
    ADD COLUMN `tiempo1` INTEGER NOT NULL DEFAULT 10;
