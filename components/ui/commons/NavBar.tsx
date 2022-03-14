import { FC, useEffect, useState } from "react";
import { MenuIcon } from "../icons/MenuIcon";
import { BlogLink } from "../links/BlogLink";
import { GithubTextLink } from "../links/GithubTextLink";
import { LinkBase } from "../links/LinkBase";
import { InstillAiLogo } from "./InstillAiLogo";
import { CrossIcon } from "../icons/CrossIcon";
import { AboutPageLink } from "../links/AboutPageLink";
import { GetEarlyAccessButton } from "../buttons/GetEarlyAccessButton";
import * as classNames from "classnames";
import { useRouter } from "next/router";
import { NewsletterArchivePageLink } from "../links/NewsletterArchivePageLink";
import { CareerPageLink } from "../links/CareerPageLink";

interface Props {}

export const NavBar: FC<Props> = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    setOpen(false);
  }, [router]);

  const navbarLinkGroup = (
    <>
      <AboutPageLink />
      <BlogLink />
      <CareerPageLink hiring={true} />
      <NewsletterArchivePageLink />
      <GithubTextLink />
      <GetEarlyAccessButton />
    </>
  );

  return (
    <div className="flex w-full lg:absolute lg:top-0 lg:z-50 bg-instillGray95">
      <div className="flex w-full max-w-[1440px] mx-auto">
        <div className="hidden lg:flex lg:flex-row w-full p-4 content-center">
          <LinkBase styleName="my-auto mr-auto" href="/">
            <InstillAiLogo type="ColourLogoWhiteType" width={159} />
          </LinkBase>

          <div className="flex flex-row gap-x-[60px] justify-end lg:ml-auto">
            {navbarLinkGroup}
          </div>
        </div>
        <div
          className={classNames.default(
            "w-full h-full flex flex-col lg:hidden",
            open ? "bg-instillGray95 fixed z-50 top-0 left-0" : ""
          )}
        >
          <div className="flex flex-row w-full lg:mb-[60px] p-5">
            <LinkBase styleName="flex" href="/">
              <InstillAiLogo type="ColourLogoWhiteType" width={159} />
            </LinkBase>
            <button
              className="ml-auto rounded-[3px] hover:bg-instillGray30 hover:bg-opacity-10"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <CrossIcon styleName="w-10 text-instillGray05" />
              ) : (
                <MenuIcon styleName="w-10 text-instillGray05" />
              )}
            </button>
          </div>
          <div className="relative w-full">
            {open && (
              <div className="absolute top-0 left-0 py-[50px] px-4 w-full flex flex-col gap-y-[50px] bg-instillGray95">
                {navbarLinkGroup}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
