import { ArrowRight, CheckCircle } from "lucide-react"
import Logo from "../../../components/ui/Logo"
import Button from "../../../components/ui/Button"

const SetupComplete = () => {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      <div className="h-full w-full p-2">
        <Logo />

      <section className="w-full h-full flex items-center justify-center">
        <div className="flex items-center flex-col gap-5">
          <div>
            <div className="max-md:w-40 max-md:h-40 w-50 h-50 rounded-full flex items-center justify-center bg-orange-300/50">
              <CheckCircle size={70} color="orange" />
            </div>
          </div>

          <div className="space-y-5">
            <h1 className="text-3xl max-md:text-xl">🎉Congratulations, Your profile is 100% complete!</h1>

            <span>All done! You can now add job listings, review applications, and grow your team.</span>
          </div>

          <div className="flex items-center max-md:flex-col gap-3.5 py-7">
            <Button title="save & next" bgcolor="bg-orange-200" color="text-orange-600">
                {
                    <>
                        <span>Continue</span>
                        <ArrowRight />
                    </>
                }
            </Button>
          </div>
        </div>
      </section>
    </div>
    
    </div>
  )
}

export default SetupComplete