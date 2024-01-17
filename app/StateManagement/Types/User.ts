export interface UserData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface SupportData {
  url: string;
  text: string;
}

interface DataStructure {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserData[];
  support: SupportData;
}

export interface UserState {
  data: DataStructure;
  loading: boolean;
  error: string;
}
