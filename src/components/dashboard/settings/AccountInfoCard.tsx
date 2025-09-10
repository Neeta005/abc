import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function AccountInfoCard() {
  const [email, setEmail] = useState("hello@designdrops.io");
  const [phone, setPhone] = useState("+92");
  const [editEmail, setEditEmail] = useState(false);
  const [editPhone, setEditPhone] = useState(false);

  return (
    <Card className="mb-8 bg-steelBlue">
      <CardHeader className="border-none pb-0">
        <span className="text-white font-bold text-lg">ACCOUNT INFORMATION</span>
      </CardHeader>
      <CardContent>
        <div className="bg-yellow-100 text-gray-800 rounded-md p-4 mb-6 text-base font-medium">
          You haven't verified your email! To publish a project and perform other actions, please <a href="#" className="text-blue-600 underline">verify your email.</a>
        </div>
        <div className="flex gap-8 mb-6">
          <div className="flex-1">
            <Label htmlFor="email" className="text-white">Email id</Label>
            {editEmail ? (
              <>
                <Input
                  id="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="mt-2 bg-onyxBlue border-gray-400 text-white"
                  autoFocus
                />
                <span
                  className="text-blue-400 cursor-pointer ml-2"
                  onClick={() => setEditEmail(false)}
                >Save</span>
              </>
            ) : (
              <>
                <span className="text-blue-400 cursor-pointer ml-2" onClick={() => setEditEmail(true)}>Edit</span>
                <div className='w-[350px]'><Input id="email" value={email} className="mt-2  bg-onyxBlue border-gray-400 text-white" readOnly /></div>
              </>
            )}
          </div>
          <div className="flex-1">
            <Label htmlFor="phone" className="text-white">Phone Number</Label>
            {editPhone ? (
              <>
                <Input
                  id="phone"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="mt-2 bg-onyxBlue border-gray-400 text-white"
                  autoFocus
                />
                <span
                  className="text-blue-400 cursor-pointer ml-2"
                  onClick={() => setEditPhone(false)}
                >Save</span>
              </>
            ) : (
              <>
                <span className="text-blue-400 cursor-pointer ml-2" onClick={() => setEditPhone(true)}>Edit</span>
                <Input id="phone" value={phone} className="mt-2 bg-onyxBlue border-gray-400 text-white" readOnly />
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
export default AccountInfoCard;

