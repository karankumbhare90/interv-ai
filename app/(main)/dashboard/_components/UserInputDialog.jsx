import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { CoachingExpert } from "@/services/Options"
import Image from "next/image"
import { useMutation } from "convex/react";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";

export default function UserInputDialog({ children, coachingOption }) {

    const [selectedExpert, setSelectedExpert] = useState();
    const [topic, setTopic] = useState();
    const [loading, setLoading] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const router = useRouter();

    const createDiscussionRoom = useMutation(api.discussionRoom.CreateNewRoot)

    const OnClickNext = async () => {
        setLoading(true);
        const result = await createDiscussionRoom({
            topic: topic,
            coachingOption: coachingOption?.name,
            expertName: selectedExpert
        })
        setLoading(false);
        setOpenDialog(false);
        router.push(`/discussion-room/${result}`)

    }

    return (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger>{children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{coachingOption?.name}</DialogTitle>
                    <DialogDescription asChild>
                        <div className="mt-3">
                            <h2 className="text-black">Enter a topic to master your skills in {coachingOption?.name}</h2>
                            <Textarea
                                placeholder="Enter your topic here..."
                                className={'mt-2'}
                                onChange={(e) => setTopic(e.target.value)}
                                value={topic}
                            />
                            <h2 className="text-black mt-5">Select your coaching Expert</h2>
                            <div className="grid grid-cols-3 md:grid-cols-5 gap-5 mt-5">
                                {CoachingExpert?.map((expert, index) => (
                                    <div key={index} className="flex flex-col items-center justify-center gap-2.5" onClick={() => setSelectedExpert(expert?.name)}>
                                        <div className={`size-20 relative max-h-20 max-w-20 p-4 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer ${selectedExpert == expert.name ? 'border-4 border-[#000]' : ''}`}>
                                            <Image src={expert.avatar} alt={expert.name} fill className="h-full w-full object-cover rounded-lg" />
                                        </div>
                                        <h2 className={`${selectedExpert == expert.name ? 'font-bold text-primary' : ''}`}>{expert?.name}</h2>
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center justify-end gap-2.5 mt-5">
                                <DialogClose asChild>
                                    <Button variant={'ghost'}>Cancel</Button>
                                </DialogClose>
                                <Button disabled={(!topic || !selectedExpert || loading)} onClick={OnClickNext}>
                                    {loading ? <LoaderCircle className="animate-spin" /> : <></>}
                                    Next
                                </Button>
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
