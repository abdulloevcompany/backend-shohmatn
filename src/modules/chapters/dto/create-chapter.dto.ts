export class CreateChapterDto {
  readonly title: string;
  readonly content: string;
  readonly language?: string; // необязательный, по умолчанию tj
}
