import type { FilmWork } from "@/types/videos";

export const filmWorks = [
  {
    id: "the-bound",
    title: "The Bound",
    category: "Short Film",
    sourceFileName: "The_Bound.MOV",
    driveFileId: "1vmtZEEilhXbxVFdOthetZEtAGNh4tV0d",
    duration: "00:10:51",
  },
  {
    id: "dordu-bes-gece",
    title: "Dördü Beş Geçe",
    category: "Music Video",
    sourceFileName: "dördü beş geçe_nolcak.mp4",
    driveFileId: "1thJidX9fU_RVyuY1M-cHQo55CbJoSf1d",
    duration: null,
  },
  {
    id: "iflah-olmaz",
    title: "İflah Olmaz",
    category: "Music Video",
    sourceFileName: "iflah olmaz_nolcak.mp4",
    driveFileId: "15Mrx1WvyQWhKPihVSunMFq6I89TxGYw3",
    duration: null,
  },
  {
    id: "kayip",
    title: "Kayıp",
    category: "Music Video",
    sourceFileName: "kayıp_müzik_klibi.MP4",
    driveFileId: "1Qb4Lg191bs_XhtCDEp1sARicEBHq5qIC",
    duration: null,
  },
] as const satisfies readonly FilmWork[];
