import { Model } from "./model.model";

export interface Barbie {
  barbieId: number;
  modelId: number;
  firstName: string;
  lastName: string;
  imageUrl: string;
  releaseYear: string;
  model: Model;
}
