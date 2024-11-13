/*
  Warnings:

  - You are about to alter the column `presupuestoHistoria` on the `Historia` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `tiempoHistoria` on the `Historia` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `Historia` MODIFY `presupuestoHistoria` INTEGER NOT NULL DEFAULT 100000,
    MODIFY `tiempoHistoria` INTEGER NOT NULL DEFAULT 0;
