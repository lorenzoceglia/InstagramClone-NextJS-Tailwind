import StoryCircle from "./StoryCircle";
import Post from "./Post";
import Image from "next/image";
import Suggestion from "./Suggestion";

const fakePosts = [
    {
        "account_name": "kyliejenner",
        "localization": "Houston Tx",
        "profile_pic": "https://instagram.fcia7-1.fna.fbcdn.net/v/t51.2885-19/176018991_452915632660151_2452110499084252327_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fcia7-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=b6A0cdMh68kAX8Vw6tN&tn=PcZfebnFHfRMowdG&edm=ALQROFkBAAAA&ccb=7-5&oh=00_AT_xKRitYOUdugHUh12muXjhrRABETz7eGCTFn2fmhUgeg&oe=62B6BA06&_nc_sid=30a2ef",
        "post_img": 'https://instagram.fcia7-1.fna.fbcdn.net/v/t51.2885-15/289027990_352189990378466_4768282128664924264_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fcia7-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=1D37WoWjTTwAX8cwq1d&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg2NDQyNzcwNzI4NzIxNjY1OQ%3D%3D.2-ccb7-5&oh=00_AT9KgrBGkDIekP1WFsWZ2pu4Xigj1RY_mXah6uTa4WroQA&oe=62B832B9&_nc_sid=30a2ef',
        "post_desc": '',
        "likes": 4923598,
        "comments_n": 3012,
        "verified" : true
    },
    {
        "account_name": "hypebeast",
        "localization": "",
        "profile_pic": "https://instagram.fcia7-1.fna.fbcdn.net/v/t51.2885-19/131288588_1915752261896413_2399327327594264123_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fcia7-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=q4gAKAmllpwAX8rLTpc&edm=AJ9x6zYBAAAA&ccb=7-5&oh=00_AT-KTb47PF6LInK4ksiBql1lsQUdZZu3uqLq324bXd7sXw&oe=62B7B3BC&_nc_sid=cff2a4",
        "post_img": 'https://instagram.fcia7-1.fna.fbcdn.net/v/t51.2885-15/288847270_724384795439601_233566179418439453_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fcia7-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=iM891CfbGgsAX-cq2Ef&edm=AJ9x6zYBAAAA&ccb=7-5&ig_cache_key=Mjg2NDgyNDEzMTMxMDU2NTkxNQ%3D%3D.2-ccb7-5&oh=00_AT9_7VrzoUXW7rYnDfYZ8qKgDQxaFa2XthpJYKHeOu4EWA&oe=62B77DE0&_nc_sid=cff2a4',
        "post_desc": '#hypeAF: As @dior continues to make moves, the fashion house has added a luxurious touch to its latest gardening kit. The new set is made from swathes of grained beige or black bull calfskin leather and is designed by @mrkimjones himself as an ode to Christian Dior’s love of flowers and gardens... ⁠\n',
        "likes": 12,
        "comments_n": 1,
        "verified" : false
    },
    {
        "account_name": "spritzworker",
        "localization": "",
        "profile_pic": "https://instagram.fcia7-1.fna.fbcdn.net/v/t51.2885-19/121255283_349501056284262_7717999455730755668_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fcia7-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=emeuiDVWfX8AX9D_yC-&edm=AEF8tYYBAAAA&ccb=7-5&oh=00_AT_J9bJrTi-rG1vimBnt-QE29k_4xHDwh40gIc8dx97c0g&oe=62B7EBBD&_nc_sid=a9513d",
        "post_img": 'https://instagram.fcia7-1.fna.fbcdn.net/v/t51.2885-15/289006083_3356154867946117_4293977233355718126_n.jpg?stp=dst-jpg_e35_p480x480&_nc_ht=instagram.fcia7-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=0KpfxVU_imAAX_CQaFs&edm=AJ9x6zYBAAAA&ccb=7-5&ig_cache_key=Mjg2NDc2MzYyNTc0MDUxODI2OQ%3D%3D.2-ccb7-5&oh=00_AT85cmwI5XhWnwBXUVnAETD-r565rMlCsUc-SXoVfT6mqA&oe=62B809D5&_nc_sid=cff2a4',
        "post_desc": 'Ruzzi Boia',
        "likes": 13,
        "comments_n": 0,
        "verified" : false
    },
    {
        "account_name": "outpumpsneakers",
        "localization": "",
        "profile_pic": "https://instagram.fcia7-1.fna.fbcdn.net/v/t51.2885-19/273186447_697587824740573_8852030631676194717_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fcia7-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=NhsD3tJrwdkAX8SXdnl&edm=APU89FABAAAA&ccb=7-5&oh=00_AT8pPQ1ybIvFmulnIWrEf0DyP11wVXXaDGqLJ5f4XXXK4A&oe=62B72959&_nc_sid=86f79a",
        "post_img": 'https://instagram.fcia7-1.fna.fbcdn.net/v/t51.2885-15/289108605_1195000317987251_8056350467217650479_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcia7-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=mcDoM7vpSXIAX8cACXF&tn=PcZfebnFHfRMowdG&edm=APU89FABAAAA&ccb=7-5&oh=00_AT85d3o3zvq_IoMfurVmZQmosZbd6yOC24dKMCL9MTsGiQ&oe=62B73EB1&_nc_sid=86f79a',
        "post_desc": 'Sono passati ben 5 anni da quando SNKRS App ha fatto il suo debutto.\n' +
            '\n' +
            'È inutile sottolineare come l’introduzione di questa app abbia rivoluzionato le abitudini di moltissimi sneakerhead, che dalle file fuori dai negozi si sono ritrovati il sabato mattina con il cellulare in mano sperando di essere estratti.\n' +
            '\n' +
            'Per celebrare i primi cinque anni di SNKRS, Nike ha così deciso di realizzare questa speciale Air Force 1.\n' +
            '\n' +
            'Qual è la L più dolorosa mai presa sull’app?',
        "likes": 3834,
        "comments_n": 26,
        "verified" : false
    },
];

const Container = () => {
    return (
        <div className="md:max-w-3xl sm:max-w-xs flex md:m-auto md:mt-6">
            <div className="xs:mx-auto xs:max-w-sm md:mx-0 mt-3">
                <div className="flex scrollbar-hide overflow-x-auto xs:m-1 md:m-0  border rounded-lg bg-white border">
                    <ul className="flex p-3 space-x-6">
                        <StoryCircle image={"https://i.pinimg.com/originals/1c/0a/ee/1c0aeea954e2e7e7e49eb6742e70e055.jpg"}/>
                        <StoryCircle image={"data:image/jpeg;base64,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"}/>
                        <StoryCircle image={"https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec"}/>
                        <StoryCircle image={"https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec"}/>
                        <StoryCircle image={"https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec"}/>
                        <StoryCircle image={"https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec"}/>
                    </ul>
                </div>
                <div className="rounded-lg xs:max-w-sm md:max-w-md md:m-0 xs:m-1 mt-3">
                    {
                        fakePosts.map((post) => (
                            <Post key={post.likes} verified= {post.verified} profile_pic= {post.profile_pic }account_name = {post.account_name} likes = {post.likes} image = {post.post_img} desc = {post.post_desc} locality = {post.localization} comments={post.comments_n}/>
                        ))
                    }
                </div>
            </div>
            <div className="hidden md:inline-flex pl-7 pt-3">
                <div className="fixed">
                    <div className="flex items-center side-header min-w-20">
                        <Image width="55" height="55" className="cursor-pointer rounded-full" objectFit="contain" src="https://scontent.cdninstagram.com/v/t51.2885-19/243428365_399054164928037_7684865314990260831_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=X5ci7KA18G8AX_hV16y&edm=APs17CUBAAAA&ccb=7-5&oh=00_AT849XK7CitZm1B7TvwaB7rbua6KMPEVnbO4B0VvLqjsYg&oe=62B80DC4&_nc_sid=978cb9"/>
                        <div className="justify-between flex flex-grow">
                            <div className="ml-4 text-sm">
                                <p className="font-bold cursor-pointer ">lorenzo.ceglia</p>
                                <p className="text-gray-400">Lorenzo Ceglia</p>
                            </div>
                            <p className="cursor-pointer text-blue-500 text-center pt-3 items-center text-xs font-bold">
                                Passa a
                            </p>
                        </div>
                    </div>
                    <div className="flex pt-3 justify-between">
                        <p className="text-gray-500 text-sm font-bold cursor-pointer ">Suggerimenti per te</p>
                        <p className="text-sm font-bold cursor-pointer ">Mostra tutti</p>
                    </div>
                    <div className="mt-3">
                        <Suggestion name={"savesta"} image={"data:image/jpeg;base64,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"}/>
                        <Suggestion name={"amongo"} image={"https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec"}/>
                        <Suggestion name={"erchad"} image={"https://melmagazine.com/wp-content/uploads/2021/01/66f-1.jpg"}/>
                    </div>
                    <div className="mt-8 flex-grow">
                        <div className="text-xs flex text-gray-400">
                            <span>Informazioni • </span>
                            <span>Assistenza • </span>
                            <span>Stampa • </span>
                            <span>Stampa • </span>
                            <span>API • </span>
                        </div>
                        <div className="text-xs flex text-gray-400">
                            <span>Lavora con noi • </span>
                            <span>Privacy • </span>
                            <span>Condizioni • </span>
                            <span>Luoghi • </span>
                            <span>Lingua • </span>
                        </div>
                    </div>
                    <div className="flex mt-3 text-xs text-gray-400">
                        © 2022 LORENZGRAM V2 FROM LORENZO
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container;
