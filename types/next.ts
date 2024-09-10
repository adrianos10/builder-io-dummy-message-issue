export type PageProps = {
  params: Params;
  searchParams: Record<string, string>;
};

export type Params = { slug: string[] };
