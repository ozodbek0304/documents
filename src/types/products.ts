
export interface Document {
    id: string;
    name: string;
    desc: string;
    slug: string;
    price: number;
    file_url:Blob;
    category_id: string;
    category_name: string;
    tags: string[];
    category: {
      id: string;
      name: string;
      slug: string;
    };
    poster: string;
    ext: string;
    view_count: number;
    sold_count: number;
    size: number;
    pages: number;
    similar: Document[];
    images:string[];
  }