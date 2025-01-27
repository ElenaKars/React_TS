import { ReactNode } from "react";

export interface AnimalProps {
  id?: string;
  animalName: string;
  animalSpecies: string;
  animalImg: string;
  children?: ReactNode;
}
