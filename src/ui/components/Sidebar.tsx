import Link from 'next/link';

const links = [
    { name: 'Home', href: '/' },
    { name: 'dev', href: '/dev' },
    { name: 'resume', href: '/resume' },
    { name: 'terminology', href: '/terminology' },
    { name: 'til', href: '/til' },
];

export default function SideNav() {
    return (
        <div>
            {links.map((link) => {
                return (
                    <Link key={link.name} href={link.href}>
                        {link.name}
                    </Link>
                )
            })}
        </div>
    );
}