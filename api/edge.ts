import { STSClient, GetCallerIdentityCommand } from "@aws-sdk/client-sts";

export const config = {
  runtime: 'edge', // this is a pre-requisite
};

export default async (req: Request) => {
  const client = new STSClient({});
  const response = await client.send(
    new GetCallerIdentityCommand({}),
  );
  return new Response(response.Arn.replace(response.Account, "ACCOUNT_ID"));
}

