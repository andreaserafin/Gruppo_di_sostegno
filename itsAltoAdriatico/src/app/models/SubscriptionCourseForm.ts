export class SubscriptionCourseForm {
  name!: string;
  surname!: string;
  birthday!: Date;
  birthplace!: string;
  code!: string;
  city!: string;
  address!: string;
  houseNum!: number;
  documentType!: string;
  documentNumber!: string;
  documentReleasedBy!: string;
  documentExpiryDate!: Date;
  email!: string;
  phone?: number;
  school!: string;
  graduateYear?: number;
  diplomaVote?: number;
  textarea?: string;
  privacy!: boolean;
}
