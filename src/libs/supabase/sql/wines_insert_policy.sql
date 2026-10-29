create policy 'Enable insert wines for authenticated users only'
on "public"."wines"
as PERMISSIVE
for INSERT
to authenticated
with check (
    true
);