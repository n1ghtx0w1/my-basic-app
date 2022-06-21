import Layout from "@/components/Layout";
import Link from "next/link";

export default function AboutPage() {
  return (
    <Layout title='About App'>
        <h1>About</h1>
        <p>
          Something to mess around with
        </p>
      <p>Version 0.0.5</p>
      <Link href='/'>Home</Link>
    </Layout>

  )
}