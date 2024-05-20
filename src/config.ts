import "dotenv/config";

const env = process.env.NODE_ENV || "development";
const config = {
  env,
  dev: env === "development",
  prod: env === "production",
};

export default config;
