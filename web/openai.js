import "dotenv/config";
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  organization: "org-1Iv7uvSIAtMHOqgUR6ywovTn",
  apiKey: "ENTER-API-KEY-HERE"
});
const openai = new OpenAIApi(configuration);

export async function getResponse() {
  console.log("process.env.OPENAI_OPEN_KEY", process.env.OPENAI_OPEN_KEY);
  const response = await openai.listModels();
  return JSON.parse(JSON.stringify(response.data.data));
}
