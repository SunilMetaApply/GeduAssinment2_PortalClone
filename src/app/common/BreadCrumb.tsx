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

    const newBreadcrumbs = paths.map((path, index) => {
      const href = '/' + paths.slice(0, index + 1).join('/');
      return {
        text: path.charAt(0).toUpperCase() + path.slice(1),
        href,
      };
    });

    if (pathname === '/') {
      setBreadcrumbItems([{ text: 'Dashboard', href: '/' }]);
    } else {
      const combinedBreadcrumbs = [{ text: 'Dashboard', href: '/' }, ...newBreadcrumbs];
      const uniqueBreadcrumbs = Array.from(new Map(combinedBreadcrumbs.map(item => [item.href, item])).values());
      setBreadcrumbItems(uniqueBreadcrumbs);
    }
  }, [pathname]);

  if (pathname === '/dashboard') {
    return <Typography>Dashboard </Typography>;
  }

  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        {breadcrumbItems.map((item, index) => (
          <Typography key={index}>
              {item.text}
          </Typography>
        ))}
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumb;
