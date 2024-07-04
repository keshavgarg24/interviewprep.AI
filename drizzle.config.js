/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://accounts:tJTVR6Hnwx2K@ep-mute-morning-a58u3sn3.us-east-2.aws.neon.tech/interviewprep-ai?sslmode=require',
  }
};