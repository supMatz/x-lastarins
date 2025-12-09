import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    hangouts: defineTable({
        date: v.string(), // Format: "dd-mm-yyyy"
        description: v.optional(v.string()), // Optional
        stars: v.optional(v.number()), // Now optional (0-5)
        createdAt: v.number(), // Timestamp
    }).index("by_date", ["date"]),
});