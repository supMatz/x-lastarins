import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    hangouts: defineTable({
        date: v.string(), // Format: "dd-mm-yyyy"
        description: v.string(),
        stars: v.number(), // 1-5 rating
        createdAt: v.number(), // Timestamp
    }).index("by_date", ["date"]),
});