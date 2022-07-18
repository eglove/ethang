import {
  Breadcrumb,
  BreadcrumbBar,
  BreadcrumbLink,
} from '@trussworks/react-uswds';
import React from 'react';

export interface LinkProperties {
  href: string;
  title: string;
}

export interface TrussBreadcrumbProperties {
  links: LinkProperties[];
}

export const TrussBreadcrumb = ({
  links,
}: TrussBreadcrumbProperties): JSX.Element => {
  return (
    <BreadcrumbBar variant="wrap">
      {links.map(link => {
        return (
          <TrussBreadcrumbItem
            href={link.href}
            key={`${link.title}${link.href}`}
            title={link.title}
          />
        );
      })}
    </BreadcrumbBar>
  );
};

const TrussBreadcrumbItem = ({ title, href }: LinkProperties): JSX.Element => {
  return (
    <Breadcrumb>
      <BreadcrumbLink href={href}>
        <span>{title}</span>
      </BreadcrumbLink>
    </Breadcrumb>
  );
};
