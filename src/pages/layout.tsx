interface AppLayoutProps {
    children: React.ReactNode;
}

export default function AppLayout({
    children,
} : AppLayoutProps ) {
    return (
        <div className="flex min-h-screen bg-surface text-text">
            <main>
                {children}
            </main>
        </div>
    )
}