export interface LoginForm {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  required?: boolean;
  className?: string; 
}

export interface LoginButton {
  type: 'submit' | 'button';
  label: string;
  className?: string; 
}