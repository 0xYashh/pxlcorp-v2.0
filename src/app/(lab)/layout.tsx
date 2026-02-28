import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

export default function LabLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className={`${GeistSans.variable} ${GeistMono.variable} font-sans min-h-screen bg-pxlcorp text-white selection:bg-pxl-red selection:text-white relative`}>
            {children}
        </div>
    )
}
