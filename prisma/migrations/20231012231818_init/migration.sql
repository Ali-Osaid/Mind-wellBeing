-- CreateTable
CREATE TABLE "NewsLetter" (
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Session" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "typeOfTherapy" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "Time" TEXT NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NewsLetter_email_key" ON "NewsLetter"("email");
