import Link from "next/link";
import { auth } from "../../../auth";
import SignIn from "./sign-in"; // Import the SignIn component
import { Button } from "../ui/button";
import { User } from "lucide-react";

export default async function Session() {
  const session = await auth(); // Fetch session data

  if (!session) {
    return <SignIn />;
  }

  return (
    <div>
      {session?.user ? (
        <Link href={`/@${session.user.username}`}>
          <Button size={"icon"} variant={"ghost"}>
            <User />
          </Button>
        </Link>
      ) : (
        <SignIn />
      )}
    </div>
  );
}
