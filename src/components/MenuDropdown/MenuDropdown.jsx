import { CircleHelp } from "lucide-react";
import { toast } from "sonner";

export default function MenuDropdown({ onOpenLogin, onDismiss }) {
  const showComingSoon = () => {
    onDismiss();
    toast.info("Referral Program comming soon");
  };

  const openLogin = () => {
    onDismiss();
    onOpenLogin();
  };

  return (
    <div className="menu-dropdown" role="menu" aria-label="Account menu">
      <button
        className="menu-dropdown-help"
        type="button"
        role="menuitem"
        onClick={showComingSoon}
      >
        <CircleHelp size={16} strokeWidth={2} />
        <span>Help Centre</span>
      </button>
      <div
        className="menu-dropdown-host cursor-pointer"
        onClick={openLogin}
        role="menuitem"
      >
        <button type="button" onClick={openLogin}>
          Become a host
        </button>
        <p className="cursor-pointer">
          It&apos;s easy to start hosting and earn extra income.
        </p>
        <span className="menu-host-illustration" aria-hidden="true">
          🙋
        </span>
      </div>
      <button
        className="menu-dropdown-link"
        type="button"
        role="menuitem"
        onClick={showComingSoon}
      >
        Refer a host
      </button>
      <button
        className="menu-dropdown-link"
        type="button"
        role="menuitem"
        onClick={showComingSoon}
      >
        Find a co-host
      </button>
      <button
        className="menu-dropdown-login"
        type="button"
        role="menuitem"
        onClick={openLogin}
      >
        Log in or sign up
      </button>
    </div>
  );
}
