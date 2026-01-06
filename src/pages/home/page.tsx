import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
    return (
        <div className="p-8 flex flex-col gap-4">
            <h1>Welcome to the Home Page</h1>
            <ThemeToggle />
        </div>
    )
}