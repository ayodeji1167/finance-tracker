import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Icon,
} from '@chakra-ui/react';
import { useLocation, Link } from 'react-router-dom';
import { ReactComponent as SeparatorIcon } from '@/assets/icons/crumb-separator.svg';
interface BreadcrumbMapping {
  [key: string]: string;
}

const breadcrumbMapping: BreadcrumbMapping = {
  employees: 'Employees',
  add: 'Add New Employee',
};

const CustomBreadcrumb = () => {
  const location = useLocation();

  const pathSegments = location.pathname.split('/').filter(Boolean);

  const segmentsToDisplay = pathSegments.slice(1);

  return (
    <Breadcrumb separator={<Icon boxSize={'.6rem'} as={SeparatorIcon} />}>
      {segmentsToDisplay.map((segment, index) => {
        const fullPath = `/${pathSegments.slice(0, index + 2).join('/')}`;
        const isLast = index === segmentsToDisplay.length - 1;

        return (
          <BreadcrumbItem key={fullPath} isCurrentPage={isLast}>
            {!isLast ? (
              <BreadcrumbLink color={'neutral.800'} as={Link} to={fullPath}>
                {breadcrumbMapping[segment] || segment}
              </BreadcrumbLink>
            ) : (
              <BreadcrumbLink color={'neutral.800'} fontWeight={500}>
                {breadcrumbMapping[segment] || segment}
              </BreadcrumbLink>
            )}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;
