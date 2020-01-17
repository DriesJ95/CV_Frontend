export interface Profile {
  generalInfo: GeneralInfo;
  generalDescription: GeneralDescription;
  photo: Photo;
}

export interface GeneralInfo {
  id: number;
  name?: string;
  lastName?: string;
  lastUpdate?: string;
  birthdate?: string;
  frenchDescription?: string;
  englishDescription?: string;
  languages?: Language[];
  titles?: Title[];
}

export interface Photo {
  id: number;
  fileUrl: string;
  name: string;
}

export interface GeneralDescription {
  id: number;
  text: string;
}

export interface Title {
  id: number;
  titleLov: TitleLov;
}

export interface TitleLov {
  id: number;
  name: string;
}

export interface Language {
  id: number;
  languageLov: LanguageLov;
}

export interface LanguageLov {
  id: number;
  name: string;
}

export interface Affectation {
  id: number;
  functionName: string;
  startDate: Date;
  endDate: Date;
  description: string;
  priorEmployerId: number;
  roleId: number;
}

export interface Training {
  id: number;
  startYear: Date;
  endYear: Date;
  diplomaTitle: string;
  diplomaTitleEnglish: string;
  institution: string;
}

export interface User {
  username: string;
  password: string;
  role: string;
}

export interface Attachment {
  id: number;
  locationString: string;
  name: string;
}
