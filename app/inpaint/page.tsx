"use client"

import React from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useConvexAuth } from "convex/react";
import { useUser, SignOutButton } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";

type Props = {};

const Dashboard = (props: Props) => {
  const { isLoading, isAuthenticated } = useConvexAuth();
  const { user } = useUser();
  const tasks = useQuery(api.tasks.get);

  const router = useRouter();

  return (
    <div>
      {isAuthenticated ? (
        <>
          <h1>Welcome {user?.fullName}</h1>
          {tasks?.map(({ _id, text }) => (
            <div key={_id}>{text}</div>
          ))}
          <br />
          <SignOutButton signOutCallback={() => router.push("/")}/>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Dashboard;
