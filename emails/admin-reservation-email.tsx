// emails/admin-reservation-email.tsx
import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

type AdminReservationEmailProps = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  tableNumber: number;
  reservationId: string;
};

export default function AdminReservationEmail({
  name,
  email,
  phone,
  date,
  time,
  guests,
  tableNumber,
  reservationId,
}: AdminReservationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>
        New Grand Empire reservation: {name}, {String(guests)} guests, {date} at {time}
      </Preview>

      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Img
              src="https://grandempireuk.com/logo.png"
              alt="Grand Empire"
              width="140"
              height="40"
              style={logo}
            />

            <Text style={brand}>GRAND EMPIRE</Text>
            <Heading style={title}>New Reservation Received</Heading>
            <Text style={subtitle}>
              A new booking has been created.
            </Text>
          </Section>

          <Section style={content}>
            <Section style={statusBox}>
              <Text style={statusText}>Reservation Status: Confirmed</Text>
            </Section>

            <Section style={detailsCard}>
              <Text style={sectionTitle}>Guest Information</Text>
              <InfoRow label="Guest Name" value={name} />
              <InfoRow label="Email" value={email} />
              <InfoRow label="Phone" value={phone} />

              <Text style={sectionTitleSpacing}>Booking Details</Text>
              <InfoRow label="Date" value={date} />
              <InfoRow label="Time" value={time} />
              <InfoRow label="Guests" value={String(guests)} />
              <InfoRow label="Table" value={`Table ${tableNumber}`} />
              <InfoRow label="Reservation ID" value={reservationId} />
            </Section>

            <Section style={footerBox}>
              <Text style={footerNote}>
                Review this booking from the admin dashboard to manage updates.
              </Text>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <Section style={row}>
      <Text style={labelStyle}>{label}</Text>
      <Text style={valueStyle}>{value}</Text>
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

const header = {
  background:
    "linear-gradient(180deg, #171717 0%, #101010 100%)",
  padding: "36px 32px 28px",
};

const brand = {
  color: "#D4AF37",
  fontSize: "12px",
  letterSpacing: "0.38em",
  margin: "0 0 14px",
  fontWeight: "700",
};

const title = {
  color: "#FFFFFF",
  fontSize: "30px",
  lineHeight: "1.2",
  fontWeight: "700",
  margin: "0 0 10px",
};

const subtitle = {
  color: "#CFCFCF",
  fontSize: "14px",
  lineHeight: "1.7",
  margin: "0",
};

const content = {
  padding: "30px 32px 32px",
};

const statusBox = {
  backgroundColor: "rgba(212, 175, 55, 0.08)",
  border: "1px solid rgba(212, 175, 55, 0.18)",
  borderRadius: "14px",
  padding: "14px 16px",
  marginBottom: "20px",
};

const statusText = {
  color: "#E7D7A0",
  fontSize: "13px",
  fontWeight: "700",
  margin: "0",
};

const detailsCard = {
  backgroundColor: "#171717",
  border: "1px solid #2C2C2C",
  borderRadius: "18px",
  padding: "22px 20px",
};

const sectionTitle = {
  color: "#F5E3A1",
  fontSize: "15px",
  fontWeight: "700",
  margin: "0 0 14px",
};

const sectionTitleSpacing = {
  color: "#F5E3A1",
  fontSize: "15px",
  fontWeight: "700",
  margin: "22px 0 14px",
};

const row = {
  borderBottom: "1px solid #262626",
  padding: "0 0 12px",
  margin: "0 0 12px",
};

const labelStyle = {
  color: "#9B9B9B",
  fontSize: "13px",
  margin: "0 0 4px",
};

const valueStyle = {
  color: "#FFFFFF",
  fontSize: "15px",
  fontWeight: "600",
  margin: "0",
};

const footerBox = {
  marginTop: "20px",
};

const footerNote = {
  color: "#8E8E8E",
  fontSize: "12px",
  lineHeight: "1.7",
  margin: "0",
};

const logo = {
  display: "block",
  margin: "0 auto 18px",
};