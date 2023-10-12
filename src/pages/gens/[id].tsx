import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';

import dynamic from "next/dynamic";

const DynamicDetails = dynamic(()=> import ('@/components/Details'), {ssr:false});
 
type Repo = {
  name: string
  stargazers_count: number
}

export default function Gene({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      <DynamicDetails repo={repo} />
    </main>
  );
}
 
export const getServerSideProps = (async (context) => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const repo = await res.json();
  return { props: { repo } };
}) satisfies GetServerSideProps<{
  repo: Repo
}>
