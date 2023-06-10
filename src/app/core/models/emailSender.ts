export interface EmailSender<T> {
  to: string;
  subject: string;
  data: T;
}