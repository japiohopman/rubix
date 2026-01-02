import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import {
  getArticles,
  getArticleBySlug,
  createArticle,
  subscribeNewsletter,
  createInquiry,
} from "./db";
import { z } from "zod";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
  // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  articles: router({
    list: publicProcedure.query(() => getArticles()),
    bySlug: publicProcedure
      .input(z.object({ slug: z.string() }))
      .query(({ input }) => getArticleBySlug(input.slug)),
  }),

  newsletter: router({
    subscribe: publicProcedure
      .input(z.object({ name: z.string(), email: z.string().email() }))
      .mutation(async ({ input }) => {
        try {
          await subscribeNewsletter({
            name: input.name,
            email: input.email,
          });
          await notifyOwner({
            title: "Nieuwe nieuwsbrief inschrijving",
            content: `${input.name} (${input.email}) heeft zich ingeschreven voor de nieuwsbrief.`,
          });
          return { success: true };
        } catch (error) {
          if ((error as any).message?.includes("Duplicate entry")) {
            return {
              success: false,
              message: "Dit e-mailadres is al ingeschreven.",
            };
          }
          throw error;
        }
      }),
  }),

  inquiries: router({
    create: publicProcedure
      .input(
        z.object({
          type: z.enum(["contact", "elearning", "training"]),
          name: z.string(),
          email: z.string().email(),
          phone: z.string().optional(),
          message: z.string().optional(),
          organizationName: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        try {
          await createInquiry({
            type: input.type,
            name: input.name,
            email: input.email,
            phone: input.phone,
            message: input.message,
            organizationName: input.organizationName,
          });
          await notifyOwner({
            title: `Nieuw ${input.type} verzoek van ${input.name}`,
            content: `Naam: ${input.name}\nE-mail: ${input.email}\nOrganisatie: ${input.organizationName || "N/A"}\nBericht: ${input.message || "N/A"}`,
          });
          return { success: true };
        } catch (error) {
          throw error;
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
