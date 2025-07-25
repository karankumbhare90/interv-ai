"use client";
import { api } from '@/convex/_generated/api';
import { CoachingExpert } from '@/services/Options';
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
                <div className="mt-5 grid grid-cols-1 lg:grid-cols-4">
                    <div className="lg:col-end-3">
                        <div className="size-20 relative overflow-hidden">
                            <Image
                                src={expert.avatar}
                                alt={expert.name}
                                fill
                                className="h-full w-full object-cover rounded-full"
                            />
                        </div>
                    </div>
                    <div className="lg:col-end-1">Chat</div>
                </div>
            )}
        </div>
    );
}
