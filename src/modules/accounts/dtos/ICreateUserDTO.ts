interface ICreateUserDTO {
  name: string;
  password: string;
  email: string;
  escola: string;
  id?: string;
  isInstructor: boolean;
}

export { ICreateUserDTO };
