import React from 'react';
import { MainBody } from './styles';

export interface Byke {
  date_stolen?: string;
  description?: string;
  frame_colors?: string[];
  frame_model?: string;
  id?: string;
  is_stock_img?: false;
  large_img?: string;
  location_found?: string;
  manufacturer_name?: string;
  external_id?: string;
  registry_name?: string;
  registry_url?: string;
  serial?: string;
  status?: string;
  stolen?: true;
  stolen_coordinates?: string;
  stolen_location?: string;
  thumb?: string;
  title?: string;
  url?: string;
  year?: string;
}

export interface IBody {
  bykes: Partial<Byke>[];
  render: (item: any, index: number) => void;
}

const BykeList = ({ bykes, render }: IBody) => {
  return <MainBody>
    { bykes?.map(render)}
    </MainBody>;
};

export { BykeList };
