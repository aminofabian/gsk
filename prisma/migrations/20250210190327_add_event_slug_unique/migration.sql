-- AlterTable
ALTER TABLE "_EventAttendees" ADD CONSTRAINT "_EventAttendees_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_EventAttendees_AB_unique";

-- AlterTable
ALTER TABLE "_EventOrganizers" ADD CONSTRAINT "_EventOrganizers_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_EventOrganizers_AB_unique";
