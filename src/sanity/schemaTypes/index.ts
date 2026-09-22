import { type SchemaTypeDefinition } from 'sanity'
import homePage from './pages/homePage';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homePage],
}
