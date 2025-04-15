import classNames from 'classnames';

type Props = {
    text: string,
    isWhiteBtn?: boolean,
    className?: string
}

const ButtonV2 = ({ text, isWhiteBtn, className }: Props) => {
    return (
        <button className={classNames('p-[8px_20px] md:p-[10px_30px] text-[16px] md:text-[18px] leading-[25.6px] font-medium font-poppins rounded-[48px] cursor-pointer border-[2px] border-transparent duration-300', className, isWhiteBtn ? 'bg-white text-secondary hover:bg-transparent hover:border-white hover:text-white' : "bg-secondary text-white hover:bg-white hover:text-secondary hover:border-secondary")}>
            {text}
        </button>
    );
};

export default ButtonV2;