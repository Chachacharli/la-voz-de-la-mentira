export interface NewItem {
  id: number;
  title: string;
  autor: string;
  date: string;
  description: string;
  imagen?: string;
  documentId: string;
}

type TypeArticle = "paragraph" | "image" | "video";
type TypeChildrenArticle = "text" | "list" | "quote";


export interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface ImageFormats {
  thumbnail?: ImageFormat;
  small?: ImageFormat;
  medium?: ImageFormat;
  large?: ImageFormat;
}

export interface StrapiImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: ImageFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: unknown | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export type ChildrenArticle = {
  type: TypeChildrenArticle;
  text: string;
};

export type ArticleContent = {
  type: TypeArticle;
  children: ChildrenArticle[];
};

export type DataArticle = {
  id: number;
  createdAt: string;
  description: string;
  documentId: string;
  publishedAt: string;
  slug: string;
  title: string;
  updatedAt: string;
  article: ArticleContent[];
  cover?: StrapiImage;
};

export interface Pagination {
  total: number;
  page: number;
  pageSize: number;
  pageCount: number;
}

export interface StrapiNew {
  data: DataArticle[];
  meta?: {
    pagination: Pagination;
  };
}

export interface INewsRepository {
  getAll(): Promise<NewItem[]>;
  getById(id: number): Promise<NewItem | null>;
}
