import users from '../../../../../assets/users.png'
import bg from '../../../../../assets/BG.png'
import Image from 'next/image';
import contactHeroStyle from "../../../../../styles/ContactStyle.module.css"

type UserGridCardProps = {
    firstName: string
    lastName: string
    avatar: string
    roles: any[]
}

const UserGridCard = (props: UserGridCardProps) => {
    const { firstName, lastName, avatar, roles } = props;
    return (
        <div className='relative'>
            <div className="z-10">
                <Image src={bg} alt={""} className="" layout='responsive' />
            </div>
            <div className="flex flex-col md:flex-row gap-2">
                <div className={`${contactHeroStyle.ourcss} w-[50px] md:w-[100px]`} style={{ overflow: 'visible' }}>
                    <Image className='!overflow-visible !-top-[15px] md:!-top-20' width={100} height={100} src={avatar} alt={"avatar"} />
                </div>
                <div>
                    <h6 className='text-[20px] md:text-[23px] capitalize leading-[30px] font-medium text-[#3A57E8]'>{firstName} {lastName}</h6>
                    <p className='text-base font-medium leading-7 text-[#232D42]'>@designer</p>
                    <p className='text-sm leading-7 font-normal text-{#8A92A6]'>Lorem ipsum dolor sit amet, consectetur adipiscing. </p>
                </div>
                <div className="pt-4">
                    <button className='text-white capitalize py-2 px-6 rounded bg-[#3A57E8]'>{roles[0]}</button>
                </div>
            </div>

        </div>
    );
};

export default UserGridCard;