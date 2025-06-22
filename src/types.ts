export interface ImageData {
  id: string;
  urls: {
    small: string;
    regular: string;
    full?: string;
    thumb?: string;
  };
  alt_description: string | null;
  description?: string | null;
  likes: number;
  views: number;
  location?: {
    name: string;
  };
  user: {
    name?: string;
    first_name?: string;
    links: {
      html: string;
    };
    portfolio_url?: string;
  };
}

export interface ApiResponse {
  results: ImageData[];
  total_pages: number;
  total: number;
}



