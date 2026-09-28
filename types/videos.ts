export type FilmCategory = "Short Film" | "Music Video";

export interface FilmWork {
  readonly id: string;
  readonly title: string;
  readonly category: FilmCategory;
  readonly sourceFileName: string;
  readonly driveFileId: string;
  readonly duration: string | null;
}
