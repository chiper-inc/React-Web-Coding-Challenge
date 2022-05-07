export interface IPagination {
  currentPage: number;
  pages: number;
  onSubmit: (page: number) => {};
}
