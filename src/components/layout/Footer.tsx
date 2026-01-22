import { Link } from "react-router-dom";
import { IFooterLinks } from "../../interface";
import { payImagesData } from "../../data";
import Image from "../Ui/Image";
import Input from "../Ui/Input";
import Button from "../Ui/Button";

const Footer = () => {
  const { Company, Support, Mobile } = IFooterLinks;

  const companyLinks = Company.map((item) => (
    <li key={item.id}>
      <Link to={item.title} className="text-sm text-body hover:text-heading">
        {item.title}
      </Link>
    </li>
  ));

  const supportLinks = Support.map((item) => (
    <li key={item.id}>
      <Link to={item.title} className="text-sm text-body hover:text-heading">
        {item.title}
      </Link>
    </li>
  ));

  const mobileLinks = Mobile.map((item) => (
    <li key={item.id}>
      <Link to={item.title} className="text-sm text-body hover:text-heading">
        {item.title}
      </Link>
    </li>
  ));

  const PayImages = payImagesData.map((item) => (
    <Image src={item.src} alt={item.alt} className="h-6" />
  ));
  return (
    <footer className="bg-[#FFF7F3] pt-16">
      <div className="container mx-auto px-4">
        {/* Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-heading mb-4">Contact</h4>
            <p className="text-sm text-body leading-relaxed">
              328 Queensberry Street, North Melbourne VIC3051, Australia.
            </p>
            <p className="mt-3 text-sm text-body">hi@viatours.com</p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-heading mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-body">{companyLinks}</ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-heading mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-body">{supportLinks}</ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-heading mb-4">Newsletter</h4>
            <p className="text-sm text-body mb-4">
              Subscribe to the free newsletter and stay up to date
            </p>

            <div className="flex bg-white rounded-md overflow-hidden border">
              <Input
                name="sendEmail"
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 text-sm outline-none"
              />
              <Button className="px-6 text-sm font-medium text-white">
                Send
              </Button>
            </div>
          </div>

          {/* Mobile Apps */}
          <div>
            <h4 className="font-semibold text-heading mb-4">Mobile Apps</h4>
            <ul className="space-y-2 text-sm text-body">{mobileLinks}</ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-default py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-body">© Copyright Viatours 2024</p>

          <div className="flex items-center gap-2">{PayImages}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
