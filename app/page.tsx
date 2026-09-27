import { Footer } from "@/components/layout/footer"
import { NavBar } from "@/components/layout/navbar"
import { Hero } from "@/components/marketing/hero"
import { HowItWorks } from "@/components/marketing/how-it-works"
import { Button } from "@/components/ui/button"
import { DoclyMark } from "@/components/ui/logo"


export default function Page() {
  return (
    <>
      <NavBar />
      <Hero />
      <HowItWorks />
      <Footer />
    </>
  )
}
