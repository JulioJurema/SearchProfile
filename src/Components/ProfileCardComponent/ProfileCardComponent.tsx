
type userProps = {
    repo: number;
    avatar: string;
    name: string;
    bio: string;
    followers: number;
    following: number;

}

const ProfileCard = (props: userProps) => {
    return (
        <div className="flex justify-center">
            <div className="flex shadow-2xl rounded-2xl">
                <img className="h-80 rounded-l-2xl" src={props.avatar} alt="Avatar" />
                <div className=" min-w-96 max-w-md pl-10 pr-14 pt-8 pb-8">
                    <div>
                            <h2 className=" text-5xl font-bold pt-2 pb-2">{props.name}</h2>
                            <p className=" text-sm font-bold pt-1 pb-1 mb-4">{props.bio}</p>

                            <p className="text-sm font-medium text-zinc-700 pt-1 pb-1 mb-2">More info:</p>
                    </div>
                    <div className="flex content-around pb-6 justify-between">
                            <p className=" bg-zinc-300 pr-1 pl-1 rounded-xl"><span className=" font-bold">{props.following}</span> Following</p>
                            <p className=" bg-zinc-300 pr-1 pl-1 rounded-xl"><span className=" font-bold">{props.followers}</span> Followers</p>
                            <p className=" bg-zinc-300 pr-1 pl-1 rounded-xl"><span className=" font-bold">{props.repo}</span> Reposit</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;