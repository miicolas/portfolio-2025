export default function TimeSkeleton() {

    return (
        <div className="flex flex-col justify-center gap-2">
            <div className="flex items-center space-x-2">
                <span className="w-24 h-4 bg-neutral-200 animate-pulse rounded"></span>
            </div>
            <div className="flex flex-col space-y-2">
                <span className="w-20 h-4 bg-neutral-200 animate-pulse rounded"></span>
            </div>
        </div>
    )
}
