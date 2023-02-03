import { STSClient, GetCallerIdentityCommand } from "@aws-sdk/client-sts"; // ES Modules import
import { VercelRequest, VercelResponse } from "@vercel/node";

export default async (req: VercelRequest, res: VercelResponse) => {
  const client = new STSClient({});
  const command = new GetCallerIdentityCommand({});
  const response = await client.send(command);
  return res.json(response.Arn.replace(response.Account, "ACCOUNT_ID"));
};
