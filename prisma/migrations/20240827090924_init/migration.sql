-- CreateTable
CREATE TABLE "Article" (
    "id" SERIAL NOT NULL,
    "fname" TEXT NOT NULL,
    "lname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "Dob" TEXT NOT NULL,
    "Rollno" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Article_email_key" ON "Article"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Article_Rollno_key" ON "Article"("Rollno");
