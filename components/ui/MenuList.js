import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MenuList({ className }) {
  const pathname = usePathname();

  const navList = [
    {
      text: 'Acceuil',
      path: '/',
    },
    {
      text: 'Réserver',
      path: '/reserver',
    },
    {
      text: 'Commande',
      path: '/order',
    },
    /* {
      text: 'FAQ',
      path: '/faq',
    }, */
    {
      text: 'Contact',
      // path: 'mailto: gosco6689@gmail.com?subject = Feedback&body = Message',
      path: '/contact',
    },
  ];

  return (
    <ul className={className}>
      {navList.map(({ text, path }) => {
        const isActive = pathname === path;
        return (
          <Link key={text} href={path} className="group">
            <span className={`${isActive ? 'text-primary' : 'text-[#28224b]'} group-hover:opacity-75 font-medium`}>
              {text}
            </span>
          </Link>
        );
      })}
    </ul>
  );
}
