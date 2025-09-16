import EmptyImage from '../assets/images/nodata.svg'

interface text {
    text: string
}

const EmptyContainer = ({ text }: text) => {
    return (
        <div className="w-full h-full flex items-center flex-col gap-3.5 justify-center">
            <div className="w-[30%]">
                <img draggable="false" src={EmptyImage} alt="empty" className="w-full object-cover" />
            </div>

            <div className="text-lg max-md:text-sm text-center"> {text} </div>
        </div>
    )
}

export default EmptyContainer