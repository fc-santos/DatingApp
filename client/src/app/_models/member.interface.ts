import { Photo } from "./photo.interface";

export interface Member {
  id: number;
  username: string;
  photoUrl: any;
  age: number;
  knownAs: string;
  created: Date;
  lastActive: Date;
  gender: string;
  introduction: string;
  lookingFor: string;
  interests: string;
  city: string;
  country: string;
  photos: Photo[];
}
