if (
  !(
    process.env.GITHUB_URL &&
    process.env.GITHUB_PAT &&
    process.env.GITHUB_EVENT_TYPE
  )
) {
  throw new Error(
    "Missing GITHUB environment variables. Please check `.env.example` file."
  );
}

export const CONFIG = {
  GITHUB: {
    URL: process.env.GITHUB_URL,
    PAT: process.env.GITHUB_PAT,
    EVENT_TYPE: process.env.GITHUB_EVENT_TYPE,
  },
} as const;