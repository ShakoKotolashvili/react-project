export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-orange-200 text-sky-950 py-3 text-center mt-20">
            <p>&copy; {currentYear} - Shalva Kotolashvili </p>
        </footer>
    );
}