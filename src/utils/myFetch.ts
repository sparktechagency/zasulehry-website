export const myFetch = async (endpoint: string, options: RequestInit = {}) => {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_URL || "http://10.10.7.7:5000/api/v1";
  const url = `${baseUrl}${
    endpoint.startsWith("/") ? endpoint : `/${endpoint}`
  }`;

  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    // For SSR, we often want to ensure fresh data or use standard revalidation
    cache: "no-store",
  });

  if (!res.ok) {
    const errorBody = await res.text();
    throw new Error(
      `Failed to fetch from ${url}: ${res.status} ${res.statusText} - ${errorBody}`
    );
  }

  return res.json();
};
