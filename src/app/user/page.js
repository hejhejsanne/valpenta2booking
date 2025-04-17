import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function UserPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <p>Access denied</p>;
  }

  return <h1>Welcome {session.user.name}!</h1>;
}
