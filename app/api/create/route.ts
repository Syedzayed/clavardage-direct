import { StreamChat } from "stream-chat";

const api_key = process.env.NEXT_PUBLIC_STREAM_API_KEY!;
const api_secret = process.env.STREAM_API_SECRET!;
const user_id = "john";

export async function GET() {
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  // Create User Token
  const token = serverClient.createToken(user_id);
}
