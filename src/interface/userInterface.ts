export interface UserData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  roleName: string | null;
  roleCode: string | null;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: UserData;
  token: string;
}

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: number;
}
