const Note = ({number, text, city}) => {
    return (
        <>
            <div className="w-36 border-t-2 border-black/30 text-black/30 hover:text-black hover:border-black py-2 flex flex-col font-medium text-sm transition-all ease-in-out">
                <span>{number}.</span>
                <span>{text}</span>
                <span>{city}</span>
            </div>
        </>
    )
};

export default Note;