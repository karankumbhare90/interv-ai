import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        name: v.string(),
        email: v.string(),
        profileImage: v.string(),
        credits: v.number(),
        subscriptionId: v.optional(v.string())
    }),

    DicussionRoom: defineTable({
        coachingOption: v.string(),
        topic: v.string(),
        expertName: v.string(),
        conversation: v.optional(v.any())
    })
})