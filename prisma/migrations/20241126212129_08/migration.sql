/*
  Warnings:

  - You are about to drop the column `equipo3` on the `Historia` table. All the data in the column will be lost.
  - You are about to drop the column `presupuesto2` on the `Historia` table. All the data in the column will be lost.
  - You are about to drop the column `tiempo1` on the `Historia` table. All the data in the column will be lost.
  - Added the required column `como` to the `Historia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `para` to the `Historia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quiero` to the `Historia` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Historia` DROP COLUMN `equipo3`,
    DROP COLUMN `presupuesto2`,
    DROP COLUMN `tiempo1`,
    ADD COLUMN `como` VARCHAR(191) NOT NULL,
    ADD COLUMN `para` VARCHAR(191) NOT NULL,
    ADD COLUMN `quiero` VARCHAR(191) NOT NULL;
