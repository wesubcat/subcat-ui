export const Instructions = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center w-f text-secondary-text-color">
      <button className="flex -z-1 relative p-2 w-fit -mb-4 rounded-t-xl rounded-r-xl bg-primary-action-color text-xl">
        connect wallet
      </button>
      <div className="w-10/12 px-10 py-16 gap-20 flex flex-col bg-secondary-color text-secondary-text-color rounded-xl">
        <div className="flex flex-row">
          <div className="flex items-center justify-center w-1/2">a</div>
          <div className="flex flex-col gap-2 items-center justify-center w-1/2">
            <p className="font-bold">1. lorem ipsum</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col gap-2 items-center justify-center w-1/2">
            <p className="font-bold">2. lorem ipsum</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div className="flex items-center justify-center w-1/2">a</div>
        </div>

        <div className="flex flex-row">
          <div className="flex items-center justify-center w-1/2">a</div>
          <div className="flex flex-col gap-2 items-center justify-center w-1/2">
            <p className="font-bold">3. lorem ipsum</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
