import { certificates } from "@/lib/constants";
import Link from "next/link";
import { BlurImage } from "@/components/ui/blur-image";

type Props = {
  params: { id: string };
};

export default function CertificatePage({ params }: Props) {
  const { id } = params;
  const cert = certificates.find((c) => String(c.id) === id);

  if (!cert) {
    return (
      <main className="mx-auto w-full max-w-4xl px-4 py-24">
        <h1 className="text-3xl font-bold">Certificate not found</h1>
        <p className="mt-4">We couldn't find the requested certificate.</p>
        <Link href="/certs" className="mt-6 inline-block text-sm underline">
          Back to certificates
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-24">
      <Link href="/certs" className="text-sm underline">
        ← Back
      </Link>

      <h1 className="my-6 text-4xl font-bold">{cert.certificateName}</h1>
      <div className="text-sm text-muted-foreground mb-4">
        {cert.issueDate} • {cert.issuer}
      </div>

      <div className="mb-8">
        <BlurImage
          src={cert.imgPath}
          alt={cert.certificateName}
          width={1200}
          height={630}
          className="rounded-lg"
        />
      </div>

      <p className="text-muted-foreground">{cert.description}</p>
    </main>
  );
}
