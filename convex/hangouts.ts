import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

//GET ALL HANGOUTS
export const list = query({
    handler: async (ctx) => {
        const hangouts = await ctx.db.query("hangouts").collect();
        return hangouts.sort((a, b) => a.date.localeCompare(b.date));
    },
});

//GET HANGOUT BY DATE
export const getByDate = query({
    args: { date: v.string() },
    handler: async (ctx, args) => {
        const hangout = await ctx.db
            .query("hangouts")
            .withIndex("by_date", (q) => q.eq("date", args.date))
            .first();
        return hangout;
    },
});

//CREATE
export const create = mutation({
    args: {
        date: v.string(),
        description: v.string(),
        stars: v.number(),
    },
    handler: async (ctx, args) => {
        // Validate stars rating
        if (args.stars < 1 || args.stars > 5) {
            throw new Error("Stars must be between 1 and 5");
        }

        //check se esiste già uno in quella data
        const existing = await ctx.db
            .query("hangouts")
            .withIndex("by_date", (q) => q.eq("date", args.date))
            .first();

        if (existing) {
            throw new Error("Hangout already exists for this date");
        }

        const hangoutId = await ctx.db.insert("hangouts", {
            date: args.date,
            description: args.description,
            stars: args.stars,
            createdAt: Date.now(),
        });

        return hangoutId;
    },
});

//UPDATE
export const update = mutation({
    args: {
        id: v.id("hangouts"),
        description: v.string(),
        stars: v.number(),
    },
    handler: async (ctx, args) => {
        // Validate stars rating
        if (args.stars < 1 || args.stars > 5) {
            throw new Error("Stars must be between 1 and 5");
        }

        await ctx.db.patch(args.id, {
            description: args.description,
            stars: args.stars,
        });

        return args.id;
    },
});

// DELETE
export const remove = mutation({
    args: { id: v.id("hangouts") },
    handler: async (ctx, args) => {
        await ctx.db.delete(args.id);
        return args.id;
    },
});