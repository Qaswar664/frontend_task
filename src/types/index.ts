export interface LoginForm {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  required?: boolean;
  className?: string;
  placeholder:string;
}

export interface LoginButton {
  type: 'submit' | 'button';
  label: string;
  className?: string;
}

export interface LoginResponse {
  accessToken: string;
  username: string;
  role: string;
  [key: string]: any;
}

export interface AuthContextType {
  user: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}