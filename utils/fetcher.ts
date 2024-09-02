export async function fetcher(url: string) {
  // @ts-ignore
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  return res.json();
}
