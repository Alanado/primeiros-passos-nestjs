export type ICreateUserDTO = {
  username: string;
  email: string;
  password: string;
};

export type UsernameAndEmail = {
  username: string;
  email: string;
};

export type UserCreatedDTO = {
  id: string;
  criated_at: Date;
} & ICreateUserDTO;
