import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

type CustomerReservationEmailProps = {
  name: string;
  date: string;
  time: string;
  guests: number;
  tableNumber: number;
};

export default function CustomerReservationEmail({
  name,
  date,
  time,
  guests,
  tableNumber,
}: CustomerReservationEmailProps) {
  const whatsappMessage = encodeURIComponent(
    `Hello, I have a question about my reservation on Grand Empire.

Name: ${name}`
  );

  return (
    <Html>
      <Head />
      <Preview>
        Your Grand Empire reservation is confirmed for {date} at {time}.
      </Preview>

      <Body style={main}>
        <Container style={container}>
          <Section style={hero}>
 <tr>
  <td style={{ padding: "24px 0", textAlign: "center" }}>
    
    <img
      src="https://grandempireuk.com/logo.png"
      alt="Grand Empire"
      width="140"
      style={{
        display: "block",
        margin: "0 auto 16px auto",
        border: 0,
      }}
    />

    <p
      style={{
        margin: 0,
        textAlign: "center",
        fontSize: "20px",
        fontWeight: 600,
        color: "#111111",
        lineHeight: "1.4",
      }}
    >

    </p>

  </td>
</tr>

            <Text style={brand}>GRAND EMPIRE</Text>
            <Heading style={heroTitle}>Your Reservation is Confirmed</Heading>
            <Text style={heroSubtitle}>
              Thank you for choosing Grand Empire. We look forward to welcoming
              you for an exceptional dining experience.
            </Text>
          </Section>

          <Section style={content}>
            <Text style={greeting}>Hello {name},</Text>

            <Text style={paragraph}>
              Your reservation has been successfully received and confirmed.
              Below are your booking details.
            </Text>

            <Section style={detailsCard}>
              <Text style={cardTitle}>Reservation Details</Text>

              <Row label="Date" value={date} />
              <Row label="Time" value={time} />
              <Row label="Guests" value={String(guests)} />
              <Row label="Table" value={`Table ${tableNumber}`} />
              <Row label="Duration" value="Open Hours" />
            </Section>

            <Section style={noticeBox}>
              <Text style={noticeText}>
                Please arrive on time. If you need to make any
                changes to your reservation, kindly contact the restaurant in
                advance.
              </Text>
            </Section>

            <Section style={buttonGroup}>
              <Button
                href={`https://wa.me/447413491088?text=${whatsappMessage}`}
                style={whatsappButton}
              >
                Contact On WhatsApp
              </Button>

              <Button href="https://grandempireuk.com" style={button}>
                Visit Grand Empire
              </Button>
            </Section>

            <Hr style={divider} />

            <Section style={footer}>
              <Text style={footerHeading}>Grand Empire</Text>
              <Text style={footerText}>108–110 Rushey Green, London</Text>
              <Text style={footerText}>info@grandempireuk.com</Text>
              <Text style={footerSubtext}>
                This email serves as confirmation of your reservation.
              </Text>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <Section style={row}>
      <Text style={rowLabel}>{label}</Text>
      <Text style={rowValue}>{value}</Text>
    </Section>
  );
}

const main = {
  backgroundColor: "#070707",
  margin: "0",
  padding: "32px 16px",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
};

const container = {
  maxWidth: "620px",
  margin: "0 auto",
  backgroundColor: "#111111",
  border: "1px solid #262626",
  borderRadius: "24px",
  overflow: "hidden",
};

const hero = {
  background: "linear-gradient(180deg, #161616 0%, #101010 100%)",
  padding: "40px 32px 30px",
  textAlign: "center" as const,
};

const logo = {
  display: "block",
  margin: "0 auto 18px",
};

const brand = {
  color: "#D4AF37",
  fontSize: "12px",
  letterSpacing: "0.38em",
  margin: "0 0 16px",
  fontWeight: "700",
};

const heroTitle = {
  color: "#FFFFFF",
  fontSize: "34px",
  lineHeight: "1.2",
  margin: "0 0 14px",
  fontWeight: "700",
};

const heroSubtitle = {
  color: "#D1D1D1",
  fontSize: "15px",
  lineHeight: "1.7",
  margin: "0 auto",
  maxWidth: "470px",
};

const content = {
  padding: "34px 32px 32px",
};

const greeting = {
  color: "#FFFFFF",
  fontSize: "22px",
  lineHeight: "1.4",
  margin: "0 0 12px",
  fontWeight: "600",
};

const paragraph = {
  color: "#CFCFCF",
  fontSize: "15px",
  lineHeight: "1.75",
  margin: "0 0 26px",
};

const detailsCard = {
  backgroundColor: "#171717",
  border: "1px solid #2C2C2C",
  borderRadius: "18px",
  padding: "22px 20px",
  marginBottom: "22px",
};

const cardTitle = {
  color: "#F5E3A1",
  fontSize: "15px",
  fontWeight: "700",
  margin: "0 0 16px",
};

const row = {
  borderBottom: "1px solid #262626",
  padding: "0 0 12px",
  margin: "0 0 12px",
};

const rowLabel = {
  color: "#9B9B9B",
  fontSize: "13px",
  margin: "0 0 4px",
};

const rowValue = {
  color: "#FFFFFF",
  fontSize: "15px",
  fontWeight: "600",
  margin: "0",
};

const noticeBox = {
  backgroundColor: "rgba(212, 175, 55, 0.08)",
  border: "1px solid rgba(212, 175, 55, 0.18)",
  borderRadius: "16px",
  padding: "16px 18px",
  marginBottom: "24px",
};

const noticeText = {
  color: "#E7D7A0",
  fontSize: "13px",
  lineHeight: "1.7",
  margin: "0",
};

const buttonGroup = {
  textAlign: "center" as const,
};

const whatsappButton = {
  display: "inline-block",
  backgroundColor: "#25D366",
  color: "#FFFFFF",
  padding: "14px 22px",
  borderRadius: "12px",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "700",
  margin: "0 8px 12px",
};

const button = {
  display: "inline-block",
  backgroundColor: "#D4AF37",
  color: "#111111",
  padding: "14px 24px",
  borderRadius: "12px",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "700",
  margin: "0 8px 12px",
};

const divider = {
  borderColor: "#262626",
  margin: "30px 0",
};

const footer = {
  textAlign: "center" as const,
};

const footerHeading = {
  color: "#FFFFFF",
  fontSize: "16px",
  fontWeight: "700",
  margin: "0 0 6px",
};

const footerText = {
  color: "#BFBFBF",
  fontSize: "13px",
  lineHeight: "1.7",
  margin: "0",
};

const footerSubtext = {
  color: "#7E7E7E",
  fontSize: "12px",
  lineHeight: "1.7",
  margin: "14px 0 0",
};