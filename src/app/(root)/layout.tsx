import React from "react";

export default function Adminlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
