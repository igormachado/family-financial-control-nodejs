-- CreateTable
CREATE TABLE "income" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "payment" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "income_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "spends" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "payment" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "spends_pkey" PRIMARY KEY ("id")
);
