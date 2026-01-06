import { useTheme } from "../hooks/use-theme";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const themes = ["light", "dark", "coffee", "ocean"];

    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="theme-select" className="text-sm font-medium opacity-70">
                Choose Theme:
            </label>
            <select
                id="theme-select"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="p-2 rounded-md border bg-surface text-brand border-brand/20 
                   focus:ring-2 focus:ring-brand outline-none cursor-pointer"
            >
                {themes.map((th) => (
                    <option key={th} value={th}>
                        {th}
                    </option>
                ))}
            </select>
        </div>
    );
}