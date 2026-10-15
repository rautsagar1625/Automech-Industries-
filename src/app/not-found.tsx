import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ButtonArrow, ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="main-content" tabIndex={-1} className="flex flex-1 items-center outline-none">
        <div className="container-site py-24">
          <p className="label text-oxide">Error 404</p>
          <h1 className="type-h1 text-ink mt-5 max-w-2xl">This page could not be found.</h1>
          <p className="type-lead text-graphite mt-5 max-w-xl">
            The page may have moved or no longer exists.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/">
              Go to the homepage
              <ButtonArrow />
            </ButtonLink>
            <ButtonLink href="/capabilities" variant="outline">
              Our capabilities
            </ButtonLink>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
