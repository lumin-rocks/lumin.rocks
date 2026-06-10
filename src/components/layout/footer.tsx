export default function Footer() {
  return (
    <>
      <div className="mt-10 w-full border-t border-white/20" />
      <div className="px-10 py-6 w-screen flex flex-row justify-between items-center max-md:justify-center max-md:flex-col">
        <div className="px-2 py-2 flex flex-row items-center gap-2">
          <div>
            <p className="text-xs text-left font-bold">
              <span className="text-[#f8bfd4]">lumin</span>.rest
            </p>
            <p className="text-muted-foreground text-xs">
              Originally known as lumin.rest
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1 max-md:items-center max-md:mt-5">
          <p className="text-muted-foreground text-xs px-2 text-right max-md:text-center">
            This software is not affiliated, associated, authorized, endorsed
            by, or
            <br />
            in any way officially connected with Roblox or any of its
            subsidiaries or its affiliates.
          </p>
        </div>
      </div>
    </>
  );
}
