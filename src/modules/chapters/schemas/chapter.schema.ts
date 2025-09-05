import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ChapterDocument = Chapter & Document;

@Schema()
export class Chapter {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  matn: string;

  @Prop({required: true})
  available: boolean;

  @Prop()
  image: string;

  @Prop({ default: 'tj' })
  language: string; // tj, ru, en, fa
}

export const ChapterSchema = SchemaFactory.createForClass(Chapter);
