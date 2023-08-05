export class CurrentUser {
  constructor(
    public email: string,
    public id: string,
    // tslint:disable-next-line: variable-name
    private _token: string,
    // tslint:disable-next-line: variable-name
    private _tokenExpirationDate: Date,
  ) { }
  get token(): string | null {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }
}
export interface User {
  readonly id: number;
  recoveryToken?: string,
  email: string;
  displayName: string;
  password?: string;
  firstname: string;
  lastname: string;
  role: string;
  createdAt: string;
  isEmailVerify: boolean;
}

export type CreateUserDto = Pick<User, 'firstname' | 'lastname' | 'password' | 'email'>;

export interface LoginResponseDto extends Omit<User, 'password' | 'createAt' | 'recoveryToken' | 'role' | 'firstname' | 'lastname'> {
  token: string;
  refreshToken: string
}

export interface AutoLoginUser {
  email: string;
  id: string;
  token: string;
  tokenExpirationDate: string;
};
