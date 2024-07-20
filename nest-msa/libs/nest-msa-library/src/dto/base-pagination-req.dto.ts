export interface BasePaginationReqDto {
  page?: number;
  sort?: string;
  order?: 'asc' | 'desc';
  skip?: number;
  take?: number;
}
