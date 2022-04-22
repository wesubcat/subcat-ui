import { EmailInput } from "../EmailInput/EmailInput";

export const Header = (): JSX.Element => {
  return (
    <div className="w-4/5 mt-40">
      <h1 className="text-8xl font-bold">🐱 subcat.</h1>
      <h2 className="text-6xl">nft comissions from your favorite artists.</h2>
      <p className="text-sm mt-10 font-thin mb-2">
        get in early: subscribe to know when we launch.
      </p>
      <EmailInput />
    </div>
  );
};
