export class Proverb {
  id: string;
  text: string;
  literalTranslation: string;
  meaning?: string;
  likes?: number;
  audioURL?: string;
  comments: string[] = [];
  tags: string[] = [];

  constructor(fields: iProverb) {
    this.id = fields.id;
    this.text = fields.text;
    this.literalTranslation = fields.literalTranslation;
    this.meaning = fields.meaning;
    this.likes = fields.likes;
    this.audioURL = fields.audioURL;
    this.comments = fields.comments;
    this.tags = fields.tags;
  }
}

export interface iProverb {
  id: string;
  text: string;
  literalTranslation: string;
  meaning?: string;
  likes?: number;
  audioURL: string;
  comments: string[];
  tags: string[];
}
