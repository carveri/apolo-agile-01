-- CreateTable
CREATE TABLE `Account` (
    `id` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `provider` VARCHAR(191) NOT NULL,
    `providerAccountId` VARCHAR(191) NOT NULL,
    `refresh_token` TEXT NULL,
    `access_token` TEXT NULL,
    `expires_at` INTEGER NULL,
    `token_type` VARCHAR(191) NULL,
    `scope` VARCHAR(191) NULL,
    `id_token` TEXT NULL,
    `session_state` VARCHAR(191) NULL,
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Account_provider_providerAccountId_key`(`provider`, `providerAccountId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Session` (
    `id` VARCHAR(191) NOT NULL,
    `sessionToken` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Session_sessionToken_key`(`sessionToken`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `primerNombre` VARCHAR(191) NULL,
    `segundoNombre` VARCHAR(191) NULL,
    `apellidoPaterno` VARCHAR(191) NULL,
    `apellidoMaterno` VARCHAR(191) NULL,
    `rutPersonal` VARCHAR(191) NULL,
    `password` VARCHAR(191) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `email` VARCHAR(191) NULL,
    `emailVerified` DATETIME(3) NULL,
    `image` VARCHAR(191) NULL,
    `created_at` VARCHAR(191) NOT NULL,
    `hora_at` VARCHAR(191) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `empresaId` VARCHAR(191) NOT NULL,
    `cargoId` VARCHAR(191) NOT NULL,
    `equipoId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_rutPersonal_key`(`rutPersonal`),
    UNIQUE INDEX `User_password_key`(`password`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VerificationToken` (
    `identifier` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `VerificationToken_token_key`(`token`),
    UNIQUE INDEX `VerificationToken_identifier_token_key`(`identifier`, `token`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Area` (
    `id` VARCHAR(191) NOT NULL,
    `nombreArea` VARCHAR(191) NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `created_at` VARCHAR(191) NOT NULL,
    `hora_at` VARCHAR(191) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Departamento` (
    `id` VARCHAR(191) NOT NULL,
    `nombreDepartamento` VARCHAR(191) NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `created_at` VARCHAR(191) NOT NULL,
    `hora_at` VARCHAR(191) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `areaId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cargo` (
    `id` VARCHAR(191) NOT NULL,
    `nombreCargo` VARCHAR(191) NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `created_at` VARCHAR(191) NOT NULL,
    `hora_at` VARCHAR(191) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `departamentoId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Empresa` (
    `id` VARCHAR(191) NOT NULL,
    `nombreEmpresa` VARCHAR(191) NOT NULL,
    `rutEmpresa` VARCHAR(191) NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `created_at` VARCHAR(191) NOT NULL,
    `hora_at` VARCHAR(191) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Evento` (
    `id` VARCHAR(191) NOT NULL,
    `nombreEvento` VARCHAR(191) NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `created_at` VARCHAR(191) NOT NULL,
    `hora_at` VARCHAR(191) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `cargoId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tarea` (
    `id` VARCHAR(191) NOT NULL,
    `nombreTarea` VARCHAR(191) NOT NULL,
    `pesoTarea` INTEGER NOT NULL DEFAULT 1,
    `bloqueoTarea` BOOLEAN NOT NULL DEFAULT false,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `created_at` VARCHAR(191) NOT NULL,
    `hora_at` VARCHAR(191) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `cargoId` VARCHAR(191) NOT NULL,
    `usuarioId` VARCHAR(191) NOT NULL,
    `historiaId` VARCHAR(191) NOT NULL,
    `sprintBacklogId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Equipo` (
    `id` VARCHAR(191) NOT NULL,
    `nombreEquipo` VARCHAR(191) NOT NULL,
    `created_at` VARCHAR(191) NOT NULL,
    `hora_at` VARCHAR(191) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `areaId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Permiso` (
    `id` VARCHAR(191) NOT NULL,
    `nombrePermiso` VARCHAR(191) NOT NULL,
    `created_at` VARCHAR(191) NOT NULL,
    `hora_at` VARCHAR(191) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Historia` (
    `id` VARCHAR(191) NOT NULL,
    `nombreHistoria` VARCHAR(191) NOT NULL,
    `presupuestoHistoria` VARCHAR(191) NOT NULL DEFAULT '100.000',
    `puntoHistoria` INTEGER NOT NULL DEFAULT 10,
    `tiempoHistoria` VARCHAR(191) NOT NULL DEFAULT '14',
    `detalleHistoria` VARCHAR(191) NOT NULL DEFAULT 'Urgente',
    `discrepancia1` VARCHAR(191) NOT NULL DEFAULT '-',
    `descripcion1` VARCHAR(191) NOT NULL DEFAULT '-',
    `discrepancia2` VARCHAR(191) NOT NULL DEFAULT '-',
    `descripcion2` VARCHAR(191) NOT NULL DEFAULT '-',
    `discrepancia3` VARCHAR(191) NOT NULL DEFAULT '-',
    `descripcion3` VARCHAR(191) NOT NULL DEFAULT '-',
    `discrepancia4` VARCHAR(191) NOT NULL DEFAULT '-',
    `descripcion4` VARCHAR(191) NOT NULL DEFAULT '-',
    `created_at` VARCHAR(191) NOT NULL,
    `hora_at` VARCHAR(191) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `productBacklogId` VARCHAR(191) NOT NULL,
    `caracterId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductBacklog` (
    `id` VARCHAR(191) NOT NULL,
    `nombreProductBacklog` VARCHAR(191) NOT NULL DEFAULT 'Pb',
    `created_at` VARCHAR(191) NOT NULL,
    `hora_at` VARCHAR(191) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SprintBacklog` (
    `id` VARCHAR(191) NOT NULL,
    `nombreSprintBacklog` VARCHAR(191) NOT NULL DEFAULT 'Sb',
    `created_at` VARCHAR(191) NOT NULL,
    `hora_at` VARCHAR(191) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `sprintId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Caracter` (
    `id` VARCHAR(191) NOT NULL,
    `nombreCaracter` VARCHAR(191) NOT NULL,
    `created_at` VARCHAR(191) NOT NULL,
    `hora_at` VARCHAR(191) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sprint` (
    `id` VARCHAR(191) NOT NULL,
    `nombreSprint` VARCHAR(191) NOT NULL,
    `created_at` VARCHAR(191) NOT NULL,
    `hora_at` VARCHAR(191) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AreaToEmpresa` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_AreaToEmpresa_AB_unique`(`A`, `B`),
    INDEX `_AreaToEmpresa_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CargoToPermiso` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_CargoToPermiso_AB_unique`(`A`, `B`),
    INDEX `_CargoToPermiso_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_EventoToUser` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_EventoToUser_AB_unique`(`A`, `B`),
    INDEX `_EventoToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Account` ADD CONSTRAINT `Account_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Session` ADD CONSTRAINT `Session_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_empresaId_fkey` FOREIGN KEY (`empresaId`) REFERENCES `Empresa`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_cargoId_fkey` FOREIGN KEY (`cargoId`) REFERENCES `Cargo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_equipoId_fkey` FOREIGN KEY (`equipoId`) REFERENCES `Equipo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Departamento` ADD CONSTRAINT `Departamento_areaId_fkey` FOREIGN KEY (`areaId`) REFERENCES `Area`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cargo` ADD CONSTRAINT `Cargo_departamentoId_fkey` FOREIGN KEY (`departamentoId`) REFERENCES `Departamento`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Evento` ADD CONSTRAINT `Evento_cargoId_fkey` FOREIGN KEY (`cargoId`) REFERENCES `Cargo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tarea` ADD CONSTRAINT `Tarea_cargoId_fkey` FOREIGN KEY (`cargoId`) REFERENCES `Cargo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tarea` ADD CONSTRAINT `Tarea_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tarea` ADD CONSTRAINT `Tarea_historiaId_fkey` FOREIGN KEY (`historiaId`) REFERENCES `Historia`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tarea` ADD CONSTRAINT `Tarea_sprintBacklogId_fkey` FOREIGN KEY (`sprintBacklogId`) REFERENCES `SprintBacklog`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Equipo` ADD CONSTRAINT `Equipo_areaId_fkey` FOREIGN KEY (`areaId`) REFERENCES `Area`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Historia` ADD CONSTRAINT `Historia_productBacklogId_fkey` FOREIGN KEY (`productBacklogId`) REFERENCES `ProductBacklog`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Historia` ADD CONSTRAINT `Historia_caracterId_fkey` FOREIGN KEY (`caracterId`) REFERENCES `Caracter`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Historia` ADD CONSTRAINT `Historia_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SprintBacklog` ADD CONSTRAINT `SprintBacklog_sprintId_fkey` FOREIGN KEY (`sprintId`) REFERENCES `Sprint`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AreaToEmpresa` ADD CONSTRAINT `_AreaToEmpresa_A_fkey` FOREIGN KEY (`A`) REFERENCES `Area`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AreaToEmpresa` ADD CONSTRAINT `_AreaToEmpresa_B_fkey` FOREIGN KEY (`B`) REFERENCES `Empresa`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CargoToPermiso` ADD CONSTRAINT `_CargoToPermiso_A_fkey` FOREIGN KEY (`A`) REFERENCES `Cargo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CargoToPermiso` ADD CONSTRAINT `_CargoToPermiso_B_fkey` FOREIGN KEY (`B`) REFERENCES `Permiso`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EventoToUser` ADD CONSTRAINT `_EventoToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `Evento`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EventoToUser` ADD CONSTRAINT `_EventoToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
