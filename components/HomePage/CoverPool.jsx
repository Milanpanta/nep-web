import DownloadIcon from "@assets/icons/DownloadIcon";

export const CoverPoolComponent = () => {
  return (
    <div className="pt-56 px-26 mx-72">
      <div className="flex gap-10">
        <div className="">
          <p className="text-h3 font-sora font-semibold">
            Your Cover Pool, Your Style
          </p>
          <p className="pt-8 font-inter font-semibold text-4xxl text-transparent bg-clip-text bg-gradient-to-r from-FA5C2F via-A44ED9 to-A44ED9">
            Let&apos;s #buidl
          </p>
          <p className="pt-5 font-poppins font-light text-2xl leading-10 tracking-wide">
            Wouldn’t it be great if your users could access all coverage
            features inside your own app with your own “look and feel”?
          </p>
          <button className="border border-black flex items-center mt-18 py-5 px-8 rounded ">
            <DownloadIcon className="w-7 h-7" />
            <span className="font-inter text-lg leading-5">
              Get the Neptune Mutual SDK
            </span>
          </button>
        </div>
        <div className="w-full border-2 border-red-800"></div>
      </div>

      <div className="pt-60 flex w-full justify-between gap-8">
        <div className="">
          <p className="font-sora text-xl leading-7 text-676767 tracking-wide">
            Write
          </p>
          <p className="pt-2 text-4xxl leading-8 font-semibold font-sora text-transparent bg-clip-text bg-gradient-to-r from-FF9029 via-A44ED9 to-A44ED9">
            Less Code
          </p>
          <p className="pt-6 font-poppins font-light leading-8 tracking-wide">
            Write less code, plug in your own Web3 provider, and get a complete
            access to all coverage features.
          </p>
        </div>

        <div className="">
          <p className="font-sora text-xl leading-7 text-676767 tracking-wide">
            Use
          </p>
          <p className="pt-2 text-4xxl leading-8 font-semibold font-sora text-transparent bg-clip-text bg-gradient-to-r from-FF9029 via-A44ED9 to-A44ED9">
            Anywhere
          </p>
          <p className="pt-6 font-poppins font-light leading-8 tracking-wide">
            Built on Typescript, the SDK can be used in both frontend and
            backend environments, using any popular framework.
          </p>
        </div>

        <div className="">
          <p className="font-sora text-xl leading-7 text-676767 tracking-wide">
            Attract
          </p>
          <p className="pt-2 text-4xxl leading-8 font-semibold font-sora text-transparent bg-clip-text bg-gradient-to-r from-FF9029 via-A44ED9 to-A44ED9">
            Liquidity
          </p>
          <p className="pt-6 font-poppins font-light leading-8 tracking-wide">
            With our support, get more visibility to bootstrap liquidity into
            your own cover pool.
          </p>
        </div>
      </div>
    </div>
  );
};
