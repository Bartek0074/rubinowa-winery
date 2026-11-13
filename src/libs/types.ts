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

export type SupabaseDeliveryMethod = Tables<'delivery_methods'>;
export type SupabaseDeliveryMethodInsert = TablesInsert<'delivery_methods'>;
export type SupabaseDeliveryMethodUpdate = TablesUpdate<'delivery_methods'>;
