import { LinkedinIcon } from "../assets/icons/LinkedinIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { TailcastLogo } from "../assets/logos/TailcastLogo";
import { TwitterIcon } from "../assets/icons/TwitterIcon";

export const Footer = () => {
  return (
    <footer>
      <div className="pt-10 bg-customDarkBg1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex">
            <div className="w-full mb-16 ">
              <div className="flex justify-center items-center grow">
                <div className="text-white mr-2 text-6xl">
                  <img
                    src="https://res.cloudinary.com/davkfrmah/image/upload/v1684239381/Filmingo/flamingo_logo.png"
                    alt="logo"
                    className="w-10 h-10"
                  />
                </div>
                <div className="text-white font-['Inter'] font-bold text-xl">
                  Filmingo
                </div>
              </div>
              <p className="mb-10 mt-4 sm:w-[28rem]  xl:w-[30rem] text-gray-400 leading-loose text-center  mx-auto ">
                A video player that allows you to watch synchronized content
                with your friends and family.
              </p>
              <div className="w-fit  mx-auto">
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="https://linkedin.com/in/akilesh-io"
                >
                  <LinkedinIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="https://twitter.com/akilesh_io"
                >
                  <TwitterIcon />
                </a>
              </div>
            </div>
          </div>
          <p className="lg:text-center text-sm text-gray-400 border-t border-[rgb(255,255,255,0.2)] pt-12 mt-16 hidden lg:block">
            &copy; 2023 Filmingo - Watch Movies Together Online.
          </p>
        </div>
      </div>
    </footer>
  );
};
