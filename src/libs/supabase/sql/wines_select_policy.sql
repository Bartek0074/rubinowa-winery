create policy "Enable read access for all users"
on "public"."wines"
as PERMISSIVE
for SELECT
to authenticated, anon
using (
    true
);