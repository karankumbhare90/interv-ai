import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateUser = mutation({
    args: {
        name: v.string(),
        email: v.string(),
        profileImage: v.string(),
    },
    handler: async (ctx, args) => {
        // Properly collect query results into an array
        const existingUsers = await ctx.db.query("users")
            .filter(q => q.eq(q.field("email"), args.email))
            .collect();

        if (existingUsers.length > 0) {
            // User already exists, don't insert
            return existingUsers[0]; // You can return the existing user doc if needed
        }

        const newUser = {
            name: args.name,
            email: args.email,
            profileImage: args.profileImage,
            credits: 50000,
        };

        const insertedId = await ctx.db.insert("users", newUser);
        return insertedId;


    }
});
