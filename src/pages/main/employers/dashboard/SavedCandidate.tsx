import SavedCandidateCard from "../../../../components/dashboard/SavedCandidateCard"

const SavedCandidate = () => {
    return (
        <div className="w-full h-full relative">
            <div className="space-y-5">
                <div className="flex items-center gap-2.5">
                    <h3>Saved Candidates</h3>
                </div>

                <section className="py-5">
                    <SavedCandidateCard />
                </section>
            </div>
        </div>
    )
}

export default SavedCandidate