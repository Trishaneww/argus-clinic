import * as sdk from "node-appwrite";

export const {
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
} = process.env;

const client = new sdk.Client();


client.setEndpoint('https://cloud.appwrite.io/v1').setProject('669ca8b900154d4c71c3').setKey('e8b1be5275ca3e62f104fae36bba08d45603c6b58a3e8076cf484839aaad33d7a1bafda8cf2fe4e1f9eef7213b9126bae73d14946418feb858c706955de28dd4b408b901b21160644ec4df10bdc15efe507347c5ef9d9e5f0edb284bcc908197c14f0cda1b3cd430462ae1f74da3f0a1951e15aa30aa72bf4f1e842508c70d70');

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);