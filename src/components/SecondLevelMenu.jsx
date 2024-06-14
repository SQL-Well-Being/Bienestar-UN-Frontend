
function SecondLevelMenu({labels, pages, currentPage, setter}){
    
    return (
        <div className="mt-3 ml-8">
            {labels.map((label, idx) => {
                return <span className= {`m-3 hover: cursor-pointer px-2 ${currentPage === pages[idx] ? "bg-[#C7C7C7] rounded-[10px]" : ""}`}  onClick={() => setter(pages[idx])}>
                            {label}
                        </span>
            })}
        </div>
    );
}

export default SecondLevelMenu;