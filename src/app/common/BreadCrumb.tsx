"use client";
import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { usePathname } from 'next/navigation';

interface BreadcrumbItem {
  text: string;
  href: string;
}

const BreadCrumb: React.FC = () => {
  const pathname = usePathname();
  const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbItem[]>([{ text: 'Dashboard', href: '/' }]);

  useEffect(() => {
    const paths = pathname.split('/').filter(Boolean);
    
    // Create new breadcrumbs from paths
    const newBreadcrumbs = paths.map((path, index) => ({
      text: path.charAt(0).toUpperCase() + path.slice(1),
    //   href: '/' + paths.slice(0, index + 1).join('/'),
      href: '/' + paths.slice(0, index + 1).join('/'),
    }));

    // Combine with the Dashboard breadcrumb and avoid duplicates
    const combinedBreadcrumbs = [{ text: 'Dashboard', href: '/' }, ...newBreadcrumbs];

    // Ensure no duplicate entries
    const uniqueBreadcrumbs = Array.from(new Map(combinedBreadcrumbs.map(item => [item.href, item])).values());

    setBreadcrumbItems(uniqueBreadcrumbs);
  }, [pathname]);

  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        {breadcrumbItems.map((item, index) => (
        //   <Link key={index} underline="hover" color="inherit" href={item.href}>
        //     {item.text}
        //   </Link>
          <span key={index}>
            {item.text}
          </span>
        ))}
        {/* <Typography sx={{ color: 'text.primary' }}>
          {breadcrumbItems[breadcrumbItems.length - 1]?.text}
        </Typography> */}
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumb;
