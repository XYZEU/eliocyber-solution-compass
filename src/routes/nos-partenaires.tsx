import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/nos-partenaires")({
  beforeLoad: () => { throw redirect({ to: "/devenir-partenaire", hash: "profils", statusCode: 301 }); },
});
