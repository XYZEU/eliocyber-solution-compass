import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/solution")({
  beforeLoad: () => { throw redirect({ to: "/fonctionnalites", hash: "modules", statusCode: 301 }); },
});
