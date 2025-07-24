export default function ProductDetailsLayout({
    children,
} : {
    children: React.ReactNode;
}) {
    // children here means the 
    return (
        <>
            {children}
            <h2>Featured layout for productId page</h2>
        </>
    );
}