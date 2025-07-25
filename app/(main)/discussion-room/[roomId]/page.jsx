"use client";
import { Button } from '@/components/ui/button';
import { api } from '@/convex/_generated/api';
import { CoachingExpert } from '@/services/Options';
import { UserButton } from '@stackframe/stack';
import { useQuery } from 'convex/react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function DiscussionRoom() {
    const { roomId } = useParams();
    const [expert, setExpert] = useState(null);

    const discussionRoomData = useQuery(api.discussionRoom.GetDiscussionRoom, {
        id: roomId,
    });

    useEffect(() => {
        if (discussionRoomData) {
            const foundExpert = CoachingExpert.find(
                (item) => item.name === discussionRoomData.expertName
            );
            setExpert(foundExpert);
        }
    }, [discussionRoomData]);

    return (
        <div>
            <h2 className="text-lg font-bold">
                {discussionRoomData?.coachingOption}
            </h2>

            {expert && expert.avatar && (
                <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2 ">
                        <div className="relative h-[60vh] bg-secondary rounded-4xl border flex flex-col gap-2.5 items-center justify-center">
                            <div className="size-20 relative overflow-hidden">
                                <Image
                                    src={expert.avatar}
                                    alt={expert.name}
                                    fill
                                    className="h-full w-full object-cover rounded-full animate-pulse"
                                />
                            </div>
                            <h2 className='text-gray-500'>{expert?.name}</h2>
                            <div className="p-5 bg-gray-200 px-10 rounded-lg absolute bottom-5 right-5">
                                <UserButton />
                            </div>
                        </div>
                        <Button className={'mx-auto mt-5 flex items-center justify-center'}>Connect</Button>
                    </div>
                    <div>
                        <div className="relative h-[60vh] bg-secondary rounded-4xl border flex flex-col gap-2.5 items-center justify-center">Chat</div>
                        <h2 className='text-center text-xs mt-2.5 text-gray-400'>At the end of your conversation we will automatically generate feedback/notes from your conversation.</h2>
                    </div>
                </div>
            )}
        </div>
    );
}
