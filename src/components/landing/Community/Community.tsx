import { SectionHeader, SectionLabel } from "@/components/ui";
import { CommunityBlock } from "./CommunityBlock";

export const Community = () => {
  return (
    <div className="flex flex-col bg-instillGrey90 py-20">
      <div className="mb-10 flex flex-col xl:mb-[200px]">
        <SectionLabel
          text="follow us"
          position="mr-auto"
          marginBottom="mb-2.5"
        />
        <SectionHeader
          header="Built by and for the community"
          headerWidth="w-full"
          headerTextColor="text-white"
          marginBottom="mb-4"
        />
        <p className="text-lg font-normal text-white xl:w-7/12">
          Join 100+ Data/AI practitioners discussing VDP in action and help
          building the modern ETL infrastructure for unstructured data.
        </p>
      </div>
      <div className="grid-col-1 grid gap-y-5 xl:grid-cols-3 xl:gap-y-0 xl:gap-x-6">
        <CommunityBlock
          name="GitHub"
          title="Star VDP on GitHub"
          linkText="Star VDP"
          link="https://github.com/instill-ai"
        />
        <CommunityBlock
          name="Discord"
          title="Join the discussion on Dicord"
          linkText="Join the community"
          link={process.env.NEXT_PUBLIC_DISCORD_INVITATION_LINK || "/"}
        />
        <CommunityBlock
          name="Twitter"
          title="Keep updated on Twitter"
          linkText="Follow us"
          link="https://twitter.com/instill_tech"
        />
      </div>
    </div>
  );
};
