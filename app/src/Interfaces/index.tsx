export interface IFilters {
  query?: string;
  stolen_before?: string;
  stolen_after?: string;
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
  registration_created_at?: number;
  registration_updated_at?: number;
  api_url?: string;
  manufacturer_id?: number;
  paint_description?: string;
  name?: string;
  frame_size?: null;
  rear_tire_narrow?: boolean;
  front_tire_narrow?: string;
  type_of_cycle?: string;
  test_bike?: boolean;
  rear_wheel_size_iso_bsd?: string;
  front_wheel_size_iso_bsd?: string;
  handlebar_type_slug?: string;
  frame_material_slug?: string;
  front_gear_type_slug?: string;
  rear_gear_type_slug?: string;
  additional_registration?: string;
  stolen_record?: {
    date_stolen?: number;
    location?: string;
    latitude?: number;
    longitude?: number;
    theft_description?: string;
    locking_description?: string;
    lock_defeat_description?: string;
    police_report_number?: string;
    police_report_department?: string;
    created_at?: number;
    create_open311?: boolean;
    id?: number;
  };
  public_images?: string[];
  components?: string[];
}
