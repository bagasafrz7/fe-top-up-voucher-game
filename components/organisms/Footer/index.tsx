import Image from "next/image"
import Menu from "./Menu"

export default function Footer() {
    const today = new Date().getFullYear();
  return (
    <section className="footer pt-50">
          <footer>
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-lg-4 text-lg-start text-center">
                          <a href="" className="mb-30">
                              <Image src={'/icon/logo.svg'} width={60} height={60} alt={'logo'} />
                          </a>
                          <p className="mt-30 text-lg color-palette-1 mb-30">StoreGG membantu gamers<br /> untuk menjadi
                              pemenang sejati</p>
                          <p className="mt-30 text-lg color-palette-1 mb-30">Copyright {today}. All Rights Reserved.</p>
                      </div>
                      <div className="col-lg-8 mt-lg-0 mt-20">
                          <div className="row gap-sm-0">
                              <Menu title={'Company'} listMenu={[{link: '/', title: 'About Us'}, {link: '/', title: 'Press Release'}, {link: '', title: 'Terms of Use'}, {link: '/', title: 'Privacy & Policy'}]} />
                              <Menu title={'Support'} listMenu={[{link: '/', title: 'Refund Policy'}, {link: '/', title: 'Unlock Rewards'}, {link: '', title: 'Live Chatting'}]} />
                              <Menu title={'Connect'} listMenu={[{link: 'mailto: hi@store.gg', title: 'hi@store.gg'}, {link: 'mailto: team@store.gg', title: 'team@store.gg'}, {link: 'http://maps.google.com/?q=Pasific12,JakartaSelatan', title: 'Pasific 12, Jakarta Selatan'}, {link: 'tel: 02111229090', title: '021 - 1122 - 9090'}]} />
                          </div>
                      </div>
                  </div>
              </div>
          </footer>
      </section>
  )
}
