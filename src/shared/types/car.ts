export interface CarProps {
  id: string;
  img: string;
  year: number;
  make: string;
  model: string;
  price: string;
  mileage: string;
  transmission: string;
  href: string;
  type?: string;
  reserved?: boolean;
  onRemoveFavorite?: (id: string) => void;
}
