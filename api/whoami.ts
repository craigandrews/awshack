import { STSClient, GetCallerIdentityCommand } from "@aws-sdk/client-sts";
import { VercelRequest, VercelResponse } from "@vercel/node";

export default async (req: VercelRequest, res: VercelResponse) => {
  const client = new STSClient({});
  const response = await client.send(
    new GetCallerIdentityCommand({}),
  );
  return res.json({
    "whoami": response.Arn.replace(response.Account, "ACCOUNT_ID"),
  });
};
