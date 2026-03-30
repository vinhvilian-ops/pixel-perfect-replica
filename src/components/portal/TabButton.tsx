interface TabButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const TabButton = ({ label, active, onClick }: TabButtonProps) => (
  <button
    onClick={onClick}
    className={`px-5 py-2.5 text-sm border-none bg-transparent cursor-pointer font-inherit -mb-[2px] transition-all ${
      active
        ? "font-bold text-primary border-b-[3px] border-b-primary"
        : "font-semibold text-gray-500 border-b-[3px] border-b-transparent"
    }`}
  >
    {label}
  </button>
);

export default TabButton;
