"use client";
import React from "react";
import { UserButton } from "@clerk/nextjs";
import { ChartNoAxesGantt } from "lucide-react";

const UserMenu = () => {
  return (
    <div>
      <UserButton
        appearance={{
          elements: { avatarBox: "w-20 h-20" },
        }}
      >
        <UserButton.MenuItems>
          <UserButton.Link
            label="Dashboard"
            labelIcon={<ChartNoAxesGantt size={15} />}
            href="/dashboard"
          />
          <UserButton.Action label="manageAccount" />
        </UserButton.MenuItems>
      </UserButton>
    </div>
  );
};

export default UserMenu;
