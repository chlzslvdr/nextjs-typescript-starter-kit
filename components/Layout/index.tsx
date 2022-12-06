import { Fragment } from 'react';
import SpriteSheet from '../SpriteIcon/SpriteSheet';
import Header from './Header/index';
import Footer from './Footer/index';

const Layout = ({ children }: any) => {
  return (
    <Fragment>
      <SpriteSheet />
      <Header />
      <main className="content">{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
