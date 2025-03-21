import { z } from "astro:content";

const MEMBERS_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSwANBgFg7HkGM9lspBNL_0Dg7IwS_E86fSSwwHHRPXI1indFQ-yfM18F9WCcXhr1KWWmzowkujyzOF/pub?output=tsv";

const memberSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  degree: z.string(),
  position: z.string(),
  avatar: z.string().nullable(),
  active: z.string(),
});

export type Member = z.infer<typeof memberSchema>;

const api = {
  list: async (): Promise<Member[]> => {
    const document = await fetch(MEMBERS_URL).then((res) => res.text());
    const rows = document
      .split("\n")
      .slice(1)
      .map((row) => row.trim().split("\t"));
    return rows.map(([id, name, email, degree, position, avatar, active]) =>
      memberSchema.parse({
        id,
        name,
        email,
        degree,
        position,
        avatar,
        active,
      }),
    );
  },
};

export default api;
