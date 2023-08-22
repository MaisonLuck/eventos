-- CreateTable
CREATE TABLE "Eventos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "data" DATETIME NOT NULL
);
