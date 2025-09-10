import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/Text';

function DeleteAccountCard() {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <Card className="mb-8 bg-steelBlue">
            <CardHeader className="border-none pb-0">
                <Text as="span" text="DELETE ACCOUNT" size="lg" weight="bold" />
            </CardHeader>
            <CardContent>
                <div className="mb-2">
                    <Text weight="bold">
                        Would you like to delete your account:{' '}
                        <Text as="span" text="@thegriffster" className="text-blue-400" />?
                    </Text>
                </div>
                <Text className="mb-2 text-gray-300">
                    This account contains{' '}
                    <Text as="span" weight="bold" className="underline">
                        0 projects and drafts
                    </Text>
                    . Deleting your account will remove all of your content and data associated with
                    it.
                </Text>
                <Button
                    variant="link"
                    className="text-blue-500 font-bold text-base p-0 mt-2"
                    onClick={() => setOpen(true)}
                >
                    I want to delete my account
                </Button>
                {open && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                        <div className="bg-slate-800 rounded-lg shadow-lg p-8 max-w-sm w-full text-center">
                            <Text
                                as="h2"
                                text="Are you absolutely sure?"
                                size="lg"
                                weight="bold"
                                className="mb-4 text-red-600"
                            />
                            <Text
                                text="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
                                className="mb-6 text-white-700"
                            />
                            <div className="flex gap-4 justify-center">
                                <Button
                                    className="bg-red-600 hover:bg-red-700 text-white"
                                    onClick={() => {
                                        setOpen(false);
                                    }}
                                >
                                    Delete
                                </Button>
                                <Button variant="outline" onClick={() => setOpen(false)}>
                                    <Text as="span" text="Cancel" className="text-black" />
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

export default DeleteAccountCard;
