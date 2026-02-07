import { MannaData } from '../types';
// @ts-ignore
import { MANNA_DATA } from '../data/mannaData';

interface RawManna {
  date: string;
  reference: string;
  verse: string;
  meaning_title: string;
  meaning: string;
  mission_title: string;
  mission: string;
}

export const getLocalManna = (date: Date): MannaData | null => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const dateString = `${year}-${month}-${day}`;

  const rawData = (MANNA_DATA as RawManna[]).find((d: RawManna) => d.date === dateString);

  if (!rawData) return null;

  return {
    verseRef: rawData.reference,
    verseText: rawData.verse.replace(/<br>/g, '\n'),
    fullVerse: rawData.verse.replace(/<br>/g, ' '),
    interpretation: rawData.meaning.replace(/<br>/g, '\n'),
    mission: rawData.mission
  };
};
