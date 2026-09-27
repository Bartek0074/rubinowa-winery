import { type SchemaTypeDefinition } from 'sanity'
import homePage from './pages/homePage';

import wine from './const-components/wine';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homePage, wine],
}
