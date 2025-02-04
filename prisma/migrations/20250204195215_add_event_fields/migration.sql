-- AlterTable
ALTER TABLE "events" ADD COLUMN     "capacity" INTEGER,
ADD COLUMN     "cpdPoints" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "materials" JSONB DEFAULT '{}',
ADD COLUMN     "moderators" TEXT[],
ADD COLUMN     "objectives" TEXT[],
ADD COLUMN     "registrationDeadline" TIMESTAMP(3),
ADD COLUMN     "speakers" TEXT[];
