import { z } from "astro:content";

const TRAINING_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSI99VpoHBuRP3jQYRJjKonnTGybQGefkH449LOjkLZu7MoHmG8FuFNcZhskg0odzyn83lZ2zdLkXNJ/pub?gid=0&single=true&output=tsv";

const trainingSchema = z.object({
  id: z.string(),
  title: z.string(),
  summary: z.string().nullable(),
  tags: z.string().nullable(),
  category_id: z.string(),
  category_name: z.string(),
  image: z.string().nullable(),
  link: z.string(),
  date: z.string().nullable(),
  enabled: z.string(),
});

export type Training = z.infer<typeof trainingSchema>;

const api = {
  list: async (): Promise<Training[]> => {
    const document = await fetch(TRAINING_URL).then((res) => res.text());
    const rows = document
      .split("\n")
      .slice(1)
      .map((row) => row.trim().split("\t"));
    return rows.map(
      ([
        id,
        title,
        summary,
        tags,
        category_id,
        category_name,
        image,
        link,
        date,
        enabled,
      ]) =>
        trainingSchema.parse({
          id,
          title,
          summary,
          tags,
          category_id,
          category_name,
          image,
          link,
          date,
          enabled,
        }),
    );
  },
};

export default api;
