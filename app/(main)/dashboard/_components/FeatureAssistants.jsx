"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { ExpertList } from "@/services/Options";
import { useUser } from "@stackframe/stack";
import Image from "next/image";

export default function FeatureAssistants() {
    const user = useUser();
    return (
        <div>
            <div className="flex justify-between items-center flex-wrap gap-4">
                <div>
                    <h2 className="font-medium text-gray-500">My Workspace</h2>
                    <h2 className="font-bold text-2xl">Welcome back, {user?.displayName}</h2>
                </div>
                <Button>Profile</Button>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-10">
                {ExpertList?.map((item, index) => (
                    <BlurFade key={item.icon} delay={0.25 + index * 0.05} inView>
                        <div className="p-3 bg-secondary rounded-2xl flex flex-col justify-center items-center gap-2.5">
                            <div className="size-10 lg:size-24 relative">
                                <Image src={item.icon} alt={item.name} fill className="h-full w-full object-cover rounded-xl hover:rotate-12 cursor-pointer transition-all duration-300" />
                            </div>
                            <h2>{item?.name}</h2>
                        </div>
                    </BlurFade>
                ))}
            </div>
        </div>
    )
}
