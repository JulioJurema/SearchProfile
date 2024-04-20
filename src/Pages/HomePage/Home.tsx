import React, { useState } from "react";
import ProfileCard from "../../Components/ProfileCardComponent/ProfileCardComponent";


interface UserData {
  avatar_url: string;
  login: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
}

const HomePage: React.FC = () => {
    const [user, setUser] = useState<string>("JulioJurema");
    const [userData, setUserData] = useState<UserData | undefined>(); 
    const pickUser = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser(event.target.value);
    };

    const searchUser = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const result = await fetch(`https://api.github.com/users/${user}`);
        if(!result.ok){
            console.log("Usuário não encontrado.");
            return;
        }
        const data: UserData = await result.json();
        setUserData(data);
        setUser("");
        console.log(data);
    };
    
    return(
        <div className=" bg-zinc-100 h-screen">
            <div className="flex justify-between p-5 bg-zinc-100 mb-12 shadow-2xl ">
                <h2 className="flex items-center font-semibold text-zinc-600 text-xl">Busque um perfil do <span className="pl-1 text-indigo-700 font-black"> Github</span></h2>
                <form onSubmit={searchUser}> 
                    <input className="focus:outline-none border border-gray-300 p-2 rounded-l-md" type="text" value={user} onChange={pickUser} placeholder="Digite um nome."/>
                    <button className=" bg-indigo-500 h-auto p-2 pl-4 pr-4 rounded-r-md border-spacing-x-1 border-indigo-700 text-slate-50 hover:bg-indigo-700 transition-colors" type="submit">Buscar</button>
                </form>
            </div>
            <div>
                { userData ?
                    <ProfileCard avatar={userData.avatar_url} name={userData.login} bio={userData.bio} followers={userData.followers} following={userData.following} repo={userData.public_repos}/>
                    :
                    <div className="flex justify-center items-center pt-60 pb-60">
                        <span className=" text-indigo-700">Busque por um perfil no Github.</span>
                    </div>
                }          
            </div>
        </div>
    );
};

export default HomePage;
