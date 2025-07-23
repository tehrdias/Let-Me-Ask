import { fastify } from 'fastify';
import 'dotenv/config';
import { serializerCompiler, validatorCompiler, ZodTypeProvider } from 'fastify-type-provider-zod';
import {fastifyCors} from '@fastify/cors';
import { getRoonsRoute } from './http/routes/get-rooms';

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: 'http://localhost:5173', // Allow all origins
});

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);
app.get('/health', ( ) => {
return 'ok'
})

app.register(getRoonsRoute)
app.listen({ port: Number(process.env.PORT) }).then(() => {
  console.log(`Server is running on port ${process.env.PORT}`);
  console.log('Server is running ');
})