import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
       <div className="container mx-auto flex flex-wrap justify-around gap-5">
        <div>
          <h3 className="text-md font-semibold mb-4">
            {" "}
            Resources
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => {
                return(
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-white">
                    {link.text}
                  </a>
                </li>
              )})}
            </ul>
          </h3>
        </div>
   

      <div>
        <h3 className="text-md font-semibold mb-4">
          {" "}
          Platform
          <ul className="space-y-2">
            {platformLinks.map((link, index) => {
              return(
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white">
                  {link.text}
                </a>
              </li>
            )})}
          </ul>
        </h3>
      </div>

      <div>
        <h3 className="text-md font-semibold mb-4">
          {" "}
          Community
          <ul className="space-y-2">
            {communityLinks.map((link, index) => {
              return(
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white">
                  {link.text}
                </a>
              </li>)
            })}
          </ul>
        </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
