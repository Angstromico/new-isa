import { useMediaQuery } from 'react-responsive';
import MobileComponent from './mobile/NosotrosMobile';
import DesktopComponent from './Desktop/Nosotros';

interface PageInfo {
  attributes?: any;
  title: string;
  description: string;
  imagen: any;
  titulo: string;
}

const ResponsiveComponent: React.FC<{ pageInfo: PageInfo }> = ({ pageInfo }) => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  const attributes = pageInfo.attributes || {};

  return (
    <>
      {isDesktopOrLaptop && (
        <DesktopComponent
          attributes={attributes}
        />
      )}
      {isMobile && (
        <MobileComponent
          attributes={attributes}
        />
      )}
    </>
  );
};

export default ResponsiveComponent;

