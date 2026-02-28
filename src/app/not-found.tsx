import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center bg-bg-dark">
      <Container>
        <div className="text-center max-w-lg mx-auto">
          <p className="text-8xl font-extrabold">
            <GradientText>404</GradientText>
          </p>
          <h1 className="mt-4 text-3xl font-bold text-text-on-dark">
            Page not found
          </h1>
          <p className="mt-4 text-text-muted text-lg">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="mt-8">
            <Button href="/" variant="primary" size="lg">
              <ArrowLeft size={18} />
              Back to Home
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
