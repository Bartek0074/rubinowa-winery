create policy 'Enable update delivery methods for authenticated users only'
on "public"."delivery_methods"
as PERMISSIVE
for UPDATE
to authenticated
using (
    true
)
with check (
    true
);