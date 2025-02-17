import { FormEvent, useRef, useState } from "react";
import {
  ArrowRightIcon,
  Button,
  Input,
  SolidButton,
} from "@instill-ai/design-system";
import cn from "clsx";

export type SubscribeNewsletterFormProps = {
  position?: string;
  width?: string;
};

export const SubscribeNewsletterForm = ({
  position,
  width,
}: SubscribeNewsletterFormProps) => {
  const email = useRef<HTMLInputElement>(null);
  const [warn, setWarn] = useState(false);
  const [message, setMessage] = useState<string>();

  const subscribe = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.current) {
      return;
    }

    if (email.current.value === "") {
      setWarn(true);
      setMessage("Please fill in your email address.");
      return;
    }

    // Fetch api endpoint for subscribing, Mailchimp's API doesn't have CORS enabled,
    // So it can't receive request from browser.
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: email.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      if (error === "MemberExists") {
        setWarn(true);
        setMessage("You already subscribed to Instill AI newsletter.");
      } else {
        console.log(error);
        setWarn(true);
        setMessage("Something went wrong, please contact us");
      }
      return;
    }
    setMessage("Cheers! Welcome aboard.");
  };

  return (
    <form onSubmit={subscribe} className={cn(position, width)}>
      <div className="my-auto flex w-full flex-col gap-y-1 sm:ml-auto">
        <div className="flex flex-col gap-y-2 sm:gap-y-0">
          <div className="mb-1.5 flex flex-row">
            <div className="flex flex-1">
              {/* <input
                aria-label="Email for newsletter"
                placeholder="Your email..."
                type="email"
                ref={email}
                className="h-full w-full rounded-[1px] bg-instillNeonBlue05 px-5 text-instillGrey90 instill-input-no-highlight"
              /> */}

              <Input.Root className="!rounded-none !rounded-l-sm !px-4">
                <Input.Core
                  aria-label="Email for newsletter"
                  disabled={false}
                  type="email"
                  placeholder="Your email..."
                  ref={email}
                />
              </Input.Root>
            </div>

            <Button
              variant="primary"
              className="!rounded-none !rounded-r-sm"
              size="lg"
            >
              Subscribe
            </Button>
          </div>
          <div className="flex">
            <p
              className={cn(
                "instill-text-small",
                warn ? "text-instill_red" : "text-instillGrey05"
              )}
            >
              {message}
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};
