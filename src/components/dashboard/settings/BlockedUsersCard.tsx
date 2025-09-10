import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";   
function BlockedUsersCard() {
  return (
    <Card className="mb-8 bg-steelBlue">
      <CardHeader className="border-none pb-0">
        <span className="text-white font-bold text-lg">BLOCKED USERS</span>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="font-semibold text-white mb-2">Block Users</div>
          <div className="text-gray-300 mb-2">Blocked users will no longer be allowed to: follow you, see your work in their feed, comment on your work, add your work to a moodboard, and message you.</div>
          <Input placeholder="Enter username" className="bg-onyxBlue border-gray-400 text-white font-bold" />
        </div>
        <div className="text-white font-semibold">You haven't blocked any users</div>
      </CardContent>
    </Card>
  );
}
export default BlockedUsersCard;
