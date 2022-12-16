import { PopupButton } from "react-calendly";

export default function CalendlyBtn({text}: {text: string}) {
  return (
    <div className="calendy-btn">
      <PopupButton
        url="https://calendly.com/pneumaoutsourcing/30min"
        rootElement={document.getElementById("__next") as HTMLInputElement}
        text={text}
      />
    </div>
  );
}