import { z } from 'zod';

const envSchema = z.object({
  name: z.union([z.literal('local'), z.literal('dev'), z.literal('prod')], {
    message: 'Ambiente inválido!',
  }),
  auth: z.object({
    id: z.string().min(1, 'Deve ter client-id!'),
    domain: z.string().min(1, 'Deve ter domínio!'),
  }),
});

envSchema.parse(window.env);

declare global {
  interface Window {
    env: z.infer<typeof envSchema>;
  }
}
