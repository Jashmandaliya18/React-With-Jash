
function Card({ userName, someObj, someArr }) {
    console.log("Props Username: ", userName);
    console.log("Props Object: ", someObj);
    console.log("Props Array: ", someArr);

    return (
        <div className="flex flex-col items-center p-7 rounded-2xl">
            <div>
                <img className="size-48 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/3284268/pexels-photo-3284268.jpeg" />
            </div>
            <div className="flex">
                <span className="text-2xl f">{userName}</span>
                <span>The Anti-Patterns</span>
                <span className="flex">
                    <span>No. 4</span>
                    <span>·</span>
                    <span>2025</span>
                </span>
            </div>
        </div >
    )
}

export default Card