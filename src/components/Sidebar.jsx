import Menu from "./Menu";

export default function Sidebar(){
    return (
        <>
            <div className="container w-1/5 h-full bg-orange-600"> 
                <div className="py-32 flex flex-col justify-center items-center align-center self-center ">
                    <div className="mb-4 w-40 self-center ">
                        <img src="src\assets\ana.jpg" className="rounded-full w-auto" alt="" />
                    </div>
                    <div className="self-center ">
                        <Menu/>
                    </div>
                </div>
            </div>
        </>
    )
}