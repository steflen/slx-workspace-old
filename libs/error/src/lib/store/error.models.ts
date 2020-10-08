export interface ErrorEntity {
  id: string | number;
  error: any;
  date: number | Date;
  severity: 'default' | 'high';
  code?: number;
  message?: string;
}
