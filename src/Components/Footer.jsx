import { Container } from "react-bootstrap";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

function Footer() {
    const router = useRouter();
  const currentPath = usePathname();

  const handleHomeClick = (e) => {
    e.preventDefault();

    if (currentPath === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };
  return (
    <section>
      <Container className='my_container '>
      <p className='font-size-80 font_weight_600 '>Let’s Talk</p>
      <div className='row'>
        <div className=' col-sm-6 col-12 justify-content-between d-flex flex-column '>
          <div className='row-6'>
            <a href="mailto:techsupport@codeship.in" className='footer_support font-size-28 font_weight_400 text-black '>
              techsupport@codeship.in
            </a>
          </div>
          <div className='row-6 mt-2'>
            <p className="font-size-28 m-0">No 1, 1st Floor, Narasimhan St, Jothi <br /> Nagar, West Mambalam, Chennai,<br /> Tamil Nadu 600033</p>
          </div>
        </div>

        <div className='col-sm-6'>
  <div className='d-flex justify-content-end flex-column flex-sm-col'>
   <div className="row d-flex  flex-flex-md-column">
     <div className='col-6 col-sm-6 mt-2'>
      <div className='d-flex flex-column gap-4'>
        <Link href="/" className='footer_links font-size-30 font_color_black font_weight_400' onClick={handleHomeClick}>Home</Link>
        <Link href="/about" className='footer_links font-size-30 font_color_black font_weight_400'>About</Link>
        <Link href="/capable" className='footer_links font-size-30 font_color_black font_weight_400'>Capabilities</Link>
      </div>
    </div>
    <div className='col-6 col-sm-6 mt-2'>
      <div className='d-flex flex-column gap-4'>
        <Link href="/solutions" className='footer_links font-size-30 font_color_black font_weight_400'>Solutions</Link>
        <Link href="/ourworks" className='footer_links font-size-30 font_color_black font_weight_400'>Our Works</Link>
        <Link href="/contact" className='footer_links font-size-30 font_color_black font_weight_400'>Contact</Link>
      </div>
    </div>
   </div>
  </div>
</div>

      </div>

      <div className='row mt-lg-5 mb-md-4'>
        <div className='col-md-6   col-12 mt-4'>
          
          <div className='d-flex  justify-content-md-start gap-3  gap-lg-5  mt-sm-5 mb-3 '>
            <div className="d-inline"> <Link href="/privacy" className='footer_links font-size-24 font_color_black font_weight_400'>Privacy Policy</Link></div>
            <div className="d-inline"> <Link href="/refund" className='footer_links font-size-24 font_color_black font_weight_400'>Refund Policy</Link></div>
            <div className="d-inline"> <Link href="/terms" className='footer_links font-size-24 font_color_black font_weight_400'>Terms</Link></div>
          </div>
        </div>
        <div className='col-md-6  col-12 d-flex justify-content-start mt-2 mt-md-5'>
          <p className='font-size-24 font_weight_400 font_color_black mt-2'>© 2025 Codeship pvt Ltd</p>
        </div>
      </div>
    </Container>
    </section>
  );
}

export default Footer;
