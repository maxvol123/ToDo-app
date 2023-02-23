export function Modal({title,children}:any) {
    return(
        <div className="fixed bg-black/50 top-0 right-0 left-0 bottom-0 z-40 px-[20%]">
            <div className="bg-white rounded-xl4 w-full mt-28 py-7">
                <div className="text-black text-center text-3xl mb-5">{title}</div>
                {children}

            </div>
</div>
)}