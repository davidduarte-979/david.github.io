export interface PaginatedResponse<TData> {
  data: TData[] | TData;
  page: number;
  limit: number;
  count: number;
  pages: number;
  meta?: any;
  links: any;
}