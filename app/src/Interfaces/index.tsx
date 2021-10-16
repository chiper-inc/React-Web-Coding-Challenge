export interface IFilters {
  word?: string;
  from?: string;
  to?: string;
}

export interface IBikes {
  date_stolen: number;
  description?: string;
  frame_colors?: string[];
  frame_model?: string;
  id: number;
  is_stock_img: boolean;
  large_img?: string;
  location_found?: string;
  manufacturer_name?: string;
  external_id?: number | string;
  registry_name?: string;
  registry_url?: string;
  serial?: string;
  status?: string;
  stolen?: boolean;
  stolen_location?: string;
  thumb?: string;
  title: string;
  url: string;
  year?: number;
}
