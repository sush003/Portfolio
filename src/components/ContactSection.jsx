import { useState } from "react";
import { Snippet } from "@/components/ui/snippet-1";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  return (
    <section className="content-section" id="contact">
      <h2>Get in Touch</h2>
      <p>
        "Have a bug to fix? A project to launch? Or just want to argue about Tabs vs. Spaces? Hit me up."
      </p>

      <p className="flex items-center gap-2">
        <strong>Email:</strong>
        <Snippet text="sushrutnisal03@gmail.com" dark />
      </p>
      <p>
        <strong>Phone:</strong> +91 9423556667
      </p>
      {/* <p>
        <strong>Address:</strong> kyu chahiye bhaiii??
      </p> */}
    </section>
  );
}
