import { PopupButton } from "react-calendly";

export default function CalendlyBtn() {
  return (
    <div className="calendy-btn">
      <PopupButton
        url="https://calendly.com/pneumaoutsourcing/30min"
        rootElement={document.getElementById("__next")}
        text="Schedule an appointment!"
      />
    </div>
  );
}