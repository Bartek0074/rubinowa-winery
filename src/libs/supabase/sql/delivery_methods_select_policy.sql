create policy "Enable read access for all users"
on "public"."delivery_methods"
as PERMISSIVE
for SELECT
to authenticated, anon
using (
    true
);