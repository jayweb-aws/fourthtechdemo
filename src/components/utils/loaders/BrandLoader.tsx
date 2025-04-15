import Image from "next/image";

const BrandLoader = () => {
    return (
        <div className="fixed flex items-center justify-center h-screen w-screen z-[9999] bg-[#ffffff]">
            <Image
                src="/logo.png"
                alt="logo"
                width="50"
                height="50"
                className="animate-pulse"
            />
        </div>
    );
};

export default BrandLoader;