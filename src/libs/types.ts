import type { Tables, TablesInsert, TablesUpdate } from '@/database.types';
import type { Wine } from '@/sanity.types';

export type SupabaseWine = Tables<'wines'>;
export type SupabaseWineInsert = TablesInsert<'wines'>;
export type SupabaseWineUpdate = TablesUpdate<'wines'>;

export type SanityWine = Wine;

export type WineMatch = {
    supabase: SupabaseWine;
    sanity: SanityWine | null;
    isMatched: boolean;
};
