export interface BasePaginationResDto<T> {
  data: T[];
  count: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  nextUrl?: number;
  previousUrl?: number;
}
