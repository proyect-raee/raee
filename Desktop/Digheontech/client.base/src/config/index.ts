const config = {
  api: process.env.NEXT_PUBLIC_API,
  isDevelopment: process.env.NODE_ENV === 'development',
};

export const { api } = config;

export default config;
