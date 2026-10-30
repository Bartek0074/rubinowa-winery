create policy 'Enable update wines for authenticated users only'
on "public"."wines"
as PERMISSIVE
for UPDATE
to authenticated
using (
    true
)
with check (
    true
);