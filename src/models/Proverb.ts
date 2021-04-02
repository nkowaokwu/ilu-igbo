export class Proverb {
  id: string;
  text: string;
  literalTranslation: string;
  meaning?: string;
  likes?: number;
  audioURL?: string;
  comments: string[] = [];

  constructor(fields: iProverb) {
    this.id = fields.id;
    this.text = fields.text;
    this.literalTranslation = fields.literalTranslation;
    this.meaning = fields.meaning;
    this.likes = fields.likes;
    this.audioURL = fields.audioURL;
    this.comments = fields.comments;
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
}
