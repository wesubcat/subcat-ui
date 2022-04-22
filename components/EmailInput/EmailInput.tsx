export const EmailInput = (): JSX.Element => {
  return (
    <div className="flex flex-row">
      <input
        type="email"
        className="w-full p-4 rounded-tl-xl focus:outline-none focus:shadow-outline"
        placeholder="your e-mail"
      />
      <button className="w-200 p-4 rounded-br-xl bg-primary-action-color text-secondary-text-color text-xl">
        subscribe
      </button>
    </div>
  );
};
