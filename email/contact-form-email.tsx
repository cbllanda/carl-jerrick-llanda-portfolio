import { StaticImageData } from 'next/image';
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Font,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

import CJ from "@/public/cj.jpg"

type ContactFormEmailProps = {
  senderEmail: string;
  message: string;
};

const imageSrc: StaticImageData = CJ;

const ContactFormEmail = ({ message, senderEmail }: ContactFormEmailProps) => {
  return (
    <Html lang="en">
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Head>
          <Font
            fontFamily="Lexend"
            fallbackFontFamily="Helvetica"
            webFont={{
              url: "https://fonts.gstatic.com/s/lexend/v15/wlptgwvFAVdoq2_F94zlCfv0bz1WC2UWzLdneg.woff2",
              format: "woff2",
            }}
            fontStyle="normal"
          />
        </Head>
        <Body className="bg-zinc-100 !text-black">
          <Container>
            <Section className="bg-white border border-black/10 my-10 px-10 py-4 rounded-md">
              <Heading as="h1" className="leading-tight !text-zinc-900">
                You received the following message from the contact form:
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>From: {senderEmail} </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
