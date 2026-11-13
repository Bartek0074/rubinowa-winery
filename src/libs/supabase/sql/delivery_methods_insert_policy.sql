create policy 'Enable insert delivery methods for authenticated users only'
on "public"."delivery_methods"
as PERMISSIVE
for INSERT
to authenticated
with check (
    true
);