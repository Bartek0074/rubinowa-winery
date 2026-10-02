export default function AdminPanelLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<p>Admin Layout</p>
			{children}
		</div>
	);
}
